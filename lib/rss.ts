import { DOMParser } from 'xmldom';

export type RssItem = {
  title: string;
  description: string;
  blurb: string;
  episodeNumber: number;
  pubDate: string;
  anchorLink: string;
  audioUrl: string;
  episodeLink: string;
  duration: string;
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

function getContentsByTagName(element: Element, tagName: string): string {
  const matchingElements = element.getElementsByTagName(tagName);

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

  return `/blog/${year}/${month}/${day}/${episodeNumber}`;
}

function replaceUrlsWithLinks(text: string): string {
  var urlReplacerExpression =
    /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;

  return text.replace(
    urlReplacerExpression,
    '<a href="$1" target="_blank">$1</a>'
  );
}

function getBlurb(description: string): string {
  return description
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .slice(0, 160);
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
    const blurb = getBlurb(description);
    const episodeNumber = getContentsByTagName(item, 'itunes:episode');
    const pubDate = getContentsByTagName(item, 'pubDate');
    const anchorLink = getContentsByTagName(item, 'link');
    const duration = getContentsByTagName(item, 'itunes:duration');
    const audioUrl = getAudioUrl(item);
    const episodeLink = getEpisodeLink(pubDate, episodeNumber);

    return {
      title,
      description,
      blurb,
      pubDate,
      anchorLink,
      audioUrl,
      episodeNumber: parseInt(episodeNumber),
      episodeLink,
      duration,
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

export function findMatchingEpisode(
  yearToMatch: string,
  monthToMatch: string,
  dayToMatch: string,
  allEpisodeData: RssItem[]
) {
  return allEpisodeData.find((episode) => {
    const [year, month, day] = getDateAsStrings(episode.pubDate);
    return year === yearToMatch && month === monthToMatch && day === dayToMatch;
  });
}

export async function getOneEpisodeData(
  yearToMatch: string,
  monthToMatch: string,
  dayToMatch: string
): Promise<RssItem> {
  const allEpisodeData = await getAllEpisodeData();
  const matchingEpisode = findMatchingEpisode(
    yearToMatch,
    monthToMatch,
    dayToMatch,
    allEpisodeData
  );

  if (!matchingEpisode) {
    throw new Error(
      `Cannot find episode for ${yearToMatch}/${monthToMatch}/${dayToMatch}`
    );
  }

  return matchingEpisode;
}
