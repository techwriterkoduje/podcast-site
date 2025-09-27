import { readdir } from 'fs/promises';
import { basename, extname, join } from 'path';
import { markdownDir } from './markdown';

export const getMarkdownFiles = async () => {
  const articlesPath = join(markdownDir, 'articles');
  try {
    const files = await readdir(articlesPath);
    return files
      .filter((file) => extname(file) === '.md')
      .map((file) => basename(file, '.md'));
  } catch (error) {
    console.error('Error reading markdown directory:', error);
    return [];
  }
};
