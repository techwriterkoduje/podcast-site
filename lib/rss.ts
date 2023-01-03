import { DOMParser } from 'xmldom';

export type RssItem = {
  title: string;
  description: string;
  episodeNumber: number;
  pubDate: string;
  anchorLink: string;
  audioUrl: string;
  episodeLink: string;
};

async function getRssDocument(url: string): Promise<Document | string> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch from RSS: ${response}`);
    }

    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/xml');

    return doc;
  } catch (err) {
    return `${err}`;
  }
}

function getContentsByTagName(
  element: Element,
  tagName: string,
  nameSpace?: string
): string {
  const matchingElements = nameSpace
    ? element.getElementsByTagNameNS(nameSpace, tagName)
    : element.getElementsByTagName(tagName);

  if (!matchingElements || matchingElements.length === 0) {
    return `${tagName} missing`;
  }

  return (
    matchingElements[0].nodeValue ||
    matchingElements[0].textContent ||
    `${tagName} has no content`
  );
}

function getAudioUrl(element: Element): string {
  const enclosureElements = element.getElementsByTagName('enclosure');

  if (!enclosureElements || enclosureElements.length === 0) {
    return 'audio URL missing';
  }

  const url = enclosureElements[0].getAttribute('url');

  if (!url) {
    return `URL attribute missing from enclosure: ${enclosureElements[0].outerHTML}`;
  }

  return url;
}

function getEpisodeLink(dateString: string, episodeNumber: string) {
  const [year, month, day] = getDateAsStrings(dateString);

  return `${year}/${month}/${day}/${episodeNumber}`;
}

function replaceUrlsWithLinks(text: string): string {
  var regularExpression =
    /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;

  return text.replace(regularExpression, '<a href="$1" target="_blank">$1</a>');
}

export async function getAllEpisodeData(): Promise<RssItem[]> {
  const rssUrl = process.env.RSS_URL;

  if (!rssUrl) {
    throw new Error(
      'RSS_URL missing from site configuration. Set it in next.config.js'
    );
  }
  const rssDoc = await getRssDocument(rssUrl);

  if (typeof rssDoc === 'string') {
    throw new Error(rssDoc);
  }

  const items = rssDoc.getElementsByTagName('item');

  return Array.from(items).map((item) => {
    const title = getContentsByTagName(item, 'title');
    const description = replaceUrlsWithLinks(
      getContentsByTagName(item, 'description')
    );
    const episodeNumber = getContentsByTagName(item, 'itunes:episode');
    const pubDate = getContentsByTagName(item, 'pubDate');
    const anchorLink = getContentsByTagName(item, 'link');
    const audioUrl = getAudioUrl(item);
    const episodeLink = getEpisodeLink(pubDate, episodeNumber);

    return {
      title,
      description,
      pubDate,
      anchorLink,
      audioUrl,
      episodeNumber: parseInt(episodeNumber),
      episodeLink,
    };
  });
}

export function getDateAsStrings(dateString: string): string[] {
  const parsedDate = new Date(dateString);
  return [
    parsedDate.getFullYear().toString(),
    `${parsedDate.getUTCMonth() + 1}`,
    parsedDate.getDate().toString(),
  ];
}

export async function getOneEpisodeData(
  yearToMatch: string,
  monthToMatch: string,
  dayToMatch: string
): Promise<RssItem> {
  const allEpisodeData = await getAllEpisodeData();
  const matchingEpisode = allEpisodeData.find((episode) => {
    const [year, month, day] = getDateAsStrings(episode.pubDate);
    return year === yearToMatch && month === monthToMatch && day === dayToMatch;
  });

  if (!matchingEpisode) {
    throw new Error(
      `Cannot find episode for ${yearToMatch}/${monthToMatch}/${dayToMatch}`
    );
  }

  return matchingEpisode;
}
