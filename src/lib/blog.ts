import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  rmdirSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { getAllEpisodeData } from '../lib/rss';
import TurndownService from 'turndown';

function createDirectoryIfNeeded(filePath: string) {
  const pathParts = filePath.split('/');
  pathParts.pop();
  let currentPath = '';
  pathParts.forEach((part) => {
    currentPath += part + '/';
    if (!existsSync(currentPath)) {
      mkdirSync(currentPath);
    }
  });
}

function deleteTheBlogFolderIfItExists() {
  const blogPath = 'blog';
  if (existsSync(blogPath)) {
    console.log('Deleting existing blog folder...');
    const deleteFolderRecursive = (path: string) => {
      if (existsSync(path)) {
        readdirSync(path).forEach((file) => {
          const curPath = path + '/' + file;
          if (lstatSync(curPath).isDirectory()) {
            // recurse
            deleteFolderRecursive(curPath);
          } else {
            // delete file
            unlinkSync(curPath);
          }
        });
        rmdirSync(path);
      }
    };
    deleteFolderRecursive(blogPath);
    console.log('Deleted existing blog folder.');
  }
}

function convertHtmlToMarkdown(html: string): string {
  const turndownService = new TurndownService({
    linkReferenceStyle: 'collapsed',
  });

  return turndownService
    .turndown(html)
    .replace(/<iframe>/g, '`<iframe>`')
    .replace(/\(\/\/\)/g, '');
}

export function createEpisodePages() {
  deleteTheBlogFolderIfItExists();
  const allEpisodeData = getAllEpisodeData();

  console.log(`Creating ${allEpisodeData.length} episode pages...`);
  allEpisodeData.forEach((episode) => {
    const episodeNumber = episode.episodeNumber.toString();
    const episodeDate = new Date(episode.pubDate);
    const episodeDateData = {
      year: episodeDate.getFullYear(),
      month: (episodeDate.getUTCMonth() + 1).toString(),
      day: episodeDate.getDate().toString(),
    };
    const filePath = `blog/${episodeDateData.year}/${episodeDateData.month}/${episodeDateData.day}/${episodeNumber}.mdx`;
    createDirectoryIfNeeded(filePath);

    const cleanTitle = encodeURI(episode.title);

    const fileContents = `---
slug: ${episodeDateData.year}/${episodeDateData.month}/${
      episodeDateData.day
    }/${episodeNumber}
---

# ${episode.title}

{/* truncate */}

import AudioPlayer from '@site/src/components/AudioPlayer';

<AudioPlayer audioSrc="${episode.audioUrl}" title="${cleanTitle}" />

${convertHtmlToMarkdown(episode.description)}
`;
    writeFileSync(filePath, fileContents);
  });

  console.log(`📚 Wrote ${allEpisodeData.length} episode pages`);
}
