import type { Metadata } from 'next';
import AudioPlayer from '../../../components/AudioPlayer/AudioPlayer'; // Adjusted path
import BackLink from '../../../components/BackLink'; // Adjusted path
import DateDisplay from '../../../components/DateDisplay/DateDisplay'; // Adjusted path
import PageContainer from '../../../components/Layout/PageContainer'; // Adjusted path
import HtmlDisplay from '../../../components/HtmlDisplay'; // Adjusted path
import {
  getAllEpisodeData,
  getDateAsStrings,
  getOneEpisodeData,
  RssItem,
} from '../../../lib/rss'; // Adjusted path
import Heading1 from '../../../components/Heading1'; // Adjusted path
import { notFound } from 'next/navigation';

type EpisodePageProps = {
  params: { slug?: string[] }; // slug can be undefined if accessing /blog
};

// Replaces getStaticPaths
export async function generateStaticParams() {
  const allEpisodeData = await getAllEpisodeData();
  const paths = allEpisodeData.map((episode) => {
    const slugParts = [
      ...getDateAsStrings(episode.pubDate),
      episode.episodeNumber.toString(),
    ];
    return { slug: slugParts };
  });
  return paths;
}

// Fetches data for the page
async function getEpisodePageData(slug?: string[]): Promise<RssItem | null> {
  if (!slug || slug.length < 3) { // Expecting year, month, day at least
    return null;
  }
  const [year, month, day] = slug;
  try {
    const episodeData = await getOneEpisodeData(year, month, day);
    return episodeData;
  } catch (error) {
    // console.error("Failed to get episode page data:", error); // Optional
    return null;
  }
}

// Generates metadata for the page
export async function generateMetadata({ params }: EpisodePageProps): Promise<Metadata> {
  const episodeData = await getEpisodePageData(params.slug);

  if (!episodeData) {
    return {
      title: 'Episode Not Found',
      description: 'The requested episode could not be found.',
    };
  }
  return {
    title: episodeData.title,
    description: episodeData.title, // Or a more specific description if available
  };
}

// Page component
export default async function EpisodePage({ params }: EpisodePageProps) {
  // Handle the case for /blog (no slug) - perhaps render a list of blog posts or a message
  if (!params.slug || params.slug.length === 0) {
    // This could be a dedicated page listing all blog posts/episodes,
    // or redirect to the first page of episode list.
    // For now, let's indicate it's the blog root.
    // Or, if /blog should always redirect or show a list, this logic would be different.
    // For this migration, if no slug, we'll consider it a "not found" for a specific episode.
    // A more dedicated /blog index page might be needed if /blog itself is a valid URL.
    // Given the original [[...slug]] structure, it implies /blog itself might not be a target for this specific page component.
    notFound(); 
  }

  const episodeData = await getEpisodePageData(params.slug);

  if (!episodeData) {
    notFound(); // Triggers the not-found UI
  }

  const { title, pubDate, audioUrl, description } = episodeData;

  return (
    <PageContainer>
      <BackLink href="/episode-list/1">lista odcinków</BackLink>
      <Heading1>{title}</Heading1>
      {pubDate && <DateDisplay dateString={pubDate} />}
      <AudioPlayer audioSrc={audioUrl} title={title} />
      <HtmlDisplay htmlString={description} />
    </PageContainer>
  );
}
