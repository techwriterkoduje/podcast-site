import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Layout from '@theme/Layout';
import { useState } from 'react';
import allEpisodeData from '../../all-episodes.json';
import EpisodePreview, {
    EpisodePreviewProps,
} from '../components/EpisodePreview/EpisodePreview';
import Heading1 from '../components/Heading1';
import PodcastCard from '../components/PodcastCard';

const pageSize = 10;

function getNumberOfPages(numberOfEpisodes: number): number {
  const pages = Math.floor(numberOfEpisodes / pageSize);
  const remainder = numberOfEpisodes % pageSize;
  return remainder > 0 ? pages + 1 : pages;
}

export default function EpisodeList() {
  const [page, setPage] = useState(1);
  const pageStart = (page - 1) * pageSize;
  const pageEnd = pageStart + pageSize;
  const episodesForPage = allEpisodeData.slice(pageStart, pageEnd);
  const episodePreviews: EpisodePreviewProps[] = episodesForPage.map(
    ({ audioUrl, title, blurb, episodeLink, pubDate, duration }) => ({
      audioUrl,
      title,
      blurb,
      episodeLink,
      pubDate,
      duration,
    })
  );
  const numberOfPages = getNumberOfPages(allEpisodeData.length);

  function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
    setPage(value);
  }

  return (
    <Layout
      title={`Lista odcinków`}
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <Container>
        <Stack spacing={4} paddingTop={4} paddingBottom={4}>
          <Heading1>Lista odcinków</Heading1>
          <Stack spacing={2}>
            {episodePreviews.map((episode) => (
              <PodcastCard key={episode.episodeLink}>
                <EpisodePreview {...episode} />
              </PodcastCard>
            ))}
          </Stack>
          <Pagination
            count={numberOfPages}
            page={page}
            onChange={handlePageChange}
          />
        </Stack>
      </Container>
    </Layout>
  );
}
