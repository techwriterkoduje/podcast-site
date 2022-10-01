import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const episodesDirectory = join(process.cwd(), "episodes");

type EpisodeIdData = {
  params: {
    id: string;
  };
};

export function getAllEpisodeIds() {
  const fileNames = readdirSync(episodesDirectory);

  const result: EpisodeIdData[] = fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));

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
