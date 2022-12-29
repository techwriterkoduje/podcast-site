import { readdirSync } from 'fs';
import { join } from 'path';
import {
  getDateFromId,
  getMarkdownContent,
  getMarkdownMatter,
  markdownDir,
} from './markdown';

const episodesDirectory = join(markdownDir, 'episodes');

export type EpisodeMetadata = {
  params: {
    id: string;
    date: string;
    title: string;
  };
};

function getAbsolutePathFromId(id: string): string {
  return join(episodesDirectory, `${id}.md`);
}

export function getAllEpisodeMetadata(): EpisodeMetadata[] {
  const fileNames = readdirSync(episodesDirectory);

  const result: EpisodeMetadata[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const date = getDateFromId(id);
    const matterResult = getMarkdownMatter(getAbsolutePathFromId(id));

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
  const markdownData = await getMarkdownContent(getAbsolutePathFromId(id));
  return {
    ...markdownData,
    date: getDateFromId(id).toDateString(),
  };
}
