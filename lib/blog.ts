import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '../types';

function getIdFromFilename(fileName) {
  return fileName.replace(/\.md$/, '');
}

const postsDir = path.join(process.cwd(), 'blog');

export function getSortedPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDir);
  const allPosts = fileNames.map((fileName) => {
    const id = getIdFromFilename(fileName);
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

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: getIdFromFilename(fileName),
      },
    };
  });
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contents = processedContent.toString();

  return {
    id,
    contents,
    ...(matterResult.data as {
      date: string;
      title: string;
      episodeId: string;
    }),
  };
}
