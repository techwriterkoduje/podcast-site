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
import { utf8ToBase64 } from './base64';

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

export function createEpisodePages() {
  deleteTheBlogFolderIfItExists();
  const allEpisodeData = getAllEpisodeData();

  console.log(`Creating ${allEpisodeData.length} episode pages...`);
  allEpisodeData.forEach(
    ({ episodeNumber: number, pubDate, title, description, audioUrl }) => {
      const episodeNumber = number.toString();
      const episodeDate = new Date(pubDate);
      const episodeDateData = {
        year: episodeDate.getFullYear(),
        month: (episodeDate.getUTCMonth() + 1).toString(),
        day: episodeDate.getDate().toString(),
      };
      const filePath = `blog/${episodeDateData.year}/${episodeDateData.month}/${episodeDateData.day}/${episodeNumber}.mdx`;
      createDirectoryIfNeeded(filePath);

      const safeTitle = utf8ToBase64(title);
      const safeDescription = utf8ToBase64(description);

      const fileContents = `---
slug: ${episodeDateData.year}/${episodeDateData.month}/${episodeDateData.day}/${episodeNumber}
---

# ${title}

{/* truncate */}

import AudioPlayer from '@site/src/components/AudioPlayer';
import HtmlDisplay from '@site/src/components/HtmlDisplay';

<AudioPlayer audioSrc="${audioUrl}" title="${safeTitle}" />

<HtmlDisplay htmlString="${safeDescription}" />
`;
      writeFileSync(filePath, fileContents);
    }
  );

  console.log(`📚 Wrote ${allEpisodeData.length} episode pages`);
}
