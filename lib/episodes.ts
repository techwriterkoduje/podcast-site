import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

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
    console.log({ date });
    return {
      params: {
        id,
        date,
      },
    };
  });

  return result;
}

export function getEpisodeData(id: string) {
  const fullPath = join(episodesDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
