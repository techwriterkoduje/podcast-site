import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { MarkdownProps } from "../pages/episodes/[id]";

const episodesDirectory = join(process.cwd(), "episodes");

type EpisodeIdData = {
  params: {
    id: string;
    date: Date;
  };
};

// id format is like: 2001-05-14-some-episode-title
function getDateFromId(id: string) {
  const match = id.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/);
  if (match) {
    return new Date(match[0]);
  }

  return new Date();
}

export function getAllEpisodeIds() {
  const fileNames = readdirSync(episodesDirectory);

  const result: EpisodeIdData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const date = getDateFromId(id);
    return {
      params: {
        id,
        date,
      },
    };
  });

  // sort from newest to oldest
  result.sort((a, b) => (a.params.date > b.params.date ? -1 : 1));
  return result;
}

export async function getEpisodeData(id: string) {
  const fullPath = join(episodesDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  // markdown metadata
  const matterResult = matter(fileContents);

  // markdown as HTML
  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const result: MarkdownProps = {
    id,
    date: getDateFromId(id).toDateString(),
    contentHtml,
    title: matterResult.data.title,
    episodeId: matterResult.data.episodeId,
  };

  return result;
}
