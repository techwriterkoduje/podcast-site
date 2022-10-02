import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { MarkdownProps } from "../pages/episodes/[id]";

const episodesDirectory = join(process.cwd(), "episodes");

export type EpisodeMetadata = {
  params: {
    id: string;
    date: string;
    title: string;
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

function getMarkdownFrontMatterById(id: string): GrayMatterFile<string> {
  const fullPath = join(episodesDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  return matter(fileContents);
}

export function getAllEpisodeMetadata(): EpisodeMetadata[] {
  const fileNames = readdirSync(episodesDirectory);

  const result: EpisodeMetadata[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const date = getDateFromId(id);
    const matterResult = getMarkdownFrontMatterById(id);

    return {
      params: {
        id,
        date: date.toDateString(),
        title: matterResult.data.title,
      },
    };
  });

  // sort from newest to oldest
  result.sort((a, b) =>
    new Date(a.params.date) > new Date(b.params.date) ? -1 : 1
  );
  return result;
}

export async function getEpisodeData(id: string) {
  const matterResult = getMarkdownFrontMatterById(id);

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
