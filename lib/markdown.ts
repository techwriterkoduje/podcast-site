import { readFileSync } from 'fs';
import matter, { GrayMatterFile } from 'gray-matter';
import { join, parse } from 'path';

export const markdownDir = join(process.cwd(), 'docs');

export type MarkdownProps = {
  id: string;
  title: string;
  episodeId: string;
  date?: string;
  content: string;
  description?: string;
};

export function getMarkdownMatter(
  absolutePath: string
): GrayMatterFile<string> {
  const fileContents = readFileSync(absolutePath, 'utf8');

  return matter(fileContents);
}

// id format is like: 2001-05-14-some-episode-title
export function getDateFromId(id: string): Date {
  const match = id.match(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/);
  if (match) {
    return new Date(match[0]);
  }

  return new Date();
}

export async function getMarkdownContent(
  absolutePath: string
): Promise<MarkdownProps> {
  const fileContents = readFileSync(absolutePath, 'utf8');
  const matterResult = matter(fileContents);

  const id = parse(absolutePath).name;

  return {
    id: id,
    content: matterResult.content,
    title: matterResult.data.title,
    episodeId: matterResult.data.episodeId || null,
    description: matterResult.data.description || null,
  };
}
