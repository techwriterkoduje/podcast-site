import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../types';

const postsDir = path.join(process.cwd(), 'blog');

export function getSortedPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDir);
  const allPosts = fileNames.map((fileName) => {
    const id = fileName.replace('.md', '');
    const date = fileName.match(/([0-9]+-[0-9]+-[0-9]+)/)[1];
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const metadata = matter(fileContents);
    const { title, episodeId } = metadata.data;

    return {
      id,
      date,
      title,
      episodeId,
    };
  });

  allPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  return allPosts;
}
