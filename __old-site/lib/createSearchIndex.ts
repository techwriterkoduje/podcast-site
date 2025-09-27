import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { resolve, join, extname, relative, basename } from 'path';
import { JSDOM } from 'jsdom';

const buildPath = resolve(__dirname, '..', 'out');

function getHtmlFilePaths(dirPath: string): string[] {
  const files = readdirSync(dirPath);

  return files
    .map((file) => {
      if (statSync(dirPath + '/' + file).isDirectory()) {
        return getHtmlFilePaths(dirPath + '/' + file);
      } else {
        return join(dirPath, '/', file);
      }
    })
    .flat()
    .filter(
      (filePath) =>
        extname(filePath) === '.html' &&
        !['404.html'].includes(basename(filePath))
    );
}

function removeExcludedChildNodes(mainNode: Element) {
  const childNodeElements = mainNode?.querySelectorAll('.exclude-from-index');
  childNodeElements.forEach((c) => {
    const childNodeElementParent = c.parentNode;
    if (childNodeElementParent) {
      childNodeElementParent.removeChild(c);
    }
  });
  return mainNode.innerHTML;
}

function parseHtmlFile(filePath: string) {
  const relativeFilename = relative(buildPath, filePath);
  const href = relativeFilename
    .substring(0, relativeFilename.lastIndexOf('.'))
    .replaceAll('\\', '/');

  const fileContents = readFileSync(filePath, { encoding: 'utf-8' });
  const { document } = new JSDOM(fileContents).window;
  const titleText = document.querySelector('title')?.textContent;
  const title = titleText?.substring(0, titleText.lastIndexOf('|')).trim();

  const mainHtmlRaw = document.querySelector('main');
  const mainHtml = mainHtmlRaw ? removeExcludedChildNodes(mainHtmlRaw) : '';
  const withExtraSpaces = mainHtml.replaceAll('>', '> ');
  const noStyleTags = withExtraSpaces.replace(
    /<style[^>]*>[^<]+<\/style>/g,
    ''
  );
  const mainAsDocument = new JSDOM(`<div>${noStyleTags}</div>`).window.document;

  const textContent = mainAsDocument.documentElement.textContent || '';
  const contents = textContent.replace(/\s\s+/g, ' ').trim();

  if (href === 'index') {
    return {
      href: '/',
      title: 'Strona domowa podcastu',
      contents,
    };
  }

  return { href, title, contents };
}

console.log('Parsing output files to create a search index...');
const allHtmlFilePaths = getHtmlFilePaths(buildPath);
console.log(`Found ${allHtmlFilePaths.length} HTML files. Indexing...`);

const searchIndex = allHtmlFilePaths.map((filePath) => parseHtmlFile(filePath));
console.log('Created a search index. Saving...');

writeFileSync(
  resolve(buildPath, 'search.json'),
  JSON.stringify(searchIndex, null, 2),
  { encoding: 'utf-8' }
);

const devSearchIndexPath = resolve(__dirname, '..', 'public', 'search.json');
writeFileSync(devSearchIndexPath, JSON.stringify(searchIndex, null, 2), {
  encoding: 'utf-8',
});

console.log('Index saved. Success rate: 100%');
