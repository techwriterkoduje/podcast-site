import type { Metadata } from 'next';
import Container from '@mui/material/Container';
import Heading1 from '../../../components/Heading1'; // Adjusted path
import EpisodeListClient from '../../../components/EpisodeListClient'; // Adjusted path
import { getAllEpisodeData, RssItem } from '../../../lib/rss'; // Adjusted path
import { EpisodePreviewProps } from '../../../components/EpisodePreview/EpisodePreview'; // Adjusted path
import { notFound } from 'next/navigation';

const pageSize = 10;

function getNumberOfPages(numberOfEpisodes: number): number {
  const pages = Math.floor(numberOfEpisodes / pageSize);
  const remainder = numberOfEpisodes % pageSize;
  return remainder > 0 ? pages + 1 : pages;
}

type EpisodeListPageProps = {
  params: { page: string };
};

// Replaces getStaticPaths
export async function generateStaticParams() {
  const allEpisodeData = await getAllEpisodeData();
  const numberOfPages = getNumberOfPages(allEpisodeData.length);
  const paths = Array.from(Array(numberOfPages).keys()).map((p) => ({
    page: `${p + 1}`,
  }));
  return paths;
}

// Fetches data for the page
async function getEpisodeListData(pageString: string) {
  const page = parseInt(pageString, 10);
  if (isNaN(page) || page < 1) {
    return null;
  }

  const allEpisodeData = await getAllEpisodeData();
  const numberOfPages = getNumberOfPages(allEpisodeData.length);

  if (page > numberOfPages) {
    return null; // Page out of bounds
  }

  const pageStart = (page - 1) * pageSize;
  const pageEnd = pageStart + pageSize;
  const episodesForPage = allEpisodeData.slice(pageStart, pageEnd);

  const episodePreviews: EpisodePreviewProps[] = episodesForPage.map(
    ({ audioUrl, title, blurb, episodeLink, pubDate, duration }: RssItem) => ({
      audioUrl,
      title,
      blurb,
      episodeLink,
      pubDate,
      duration,
    })
  );

  return {
    episodePreviews,
    numberOfPages,
    currentPage: page,
  };
}

// Generates metadata for the page
export async function generateMetadata({ params }: EpisodeListPageProps): Promise<Metadata> {
  const pageNumber = parseInt(params.page, 10);
  if (isNaN(pageNumber) || pageNumber < 1) {
    return { title: 'Invalid Page Number' };
  }
  // We could fetch total pages here again if needed, but for title, page number is enough.
  // const allEpisodeData = await getAllEpisodeData();
  // const totalPages = getNumberOfPages(allEpisodeData.length);
  // if (pageNumber > totalPages) return { title: "Page Not Found"};

  return {
    title: `Lista odcinków (strona ${pageNumber})`,
    description: 'Wybierz odcinek podcastu do posłuchania',
  };
}

// Page component
export default async function EpisodeListPage({ params }: EpisodeListPageProps) {
  const pageData = await getEpisodeListData(params.page);

  if (!pageData) {
    notFound(); // Triggers the not-found UI
  }

  const { episodePreviews, numberOfPages, currentPage } = pageData;

  return (
    <Container>
      <Heading1>Lista odcinków</Heading1>
      <EpisodeListClient
        episodePreviews={episodePreviews}
        numberOfPages={numberOfPages}
        currentPage={currentPage}
      />
    </Container>
  );
}
