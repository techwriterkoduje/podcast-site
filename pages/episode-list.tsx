import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import EpisodePreview, {
  EpisodePreviewProps,
} from '../components/EpisodePreview/EpisodePreview';
import Layout from '../components/Layout/Layout';
import PodcastCard from '../components/PodcastCard';
import { getAllEpisodeData, RssItem } from '../lib/rss';

export async function getStaticProps() {
  const allEpisodeData = await getAllEpisodeData();
  const episodePreviews: EpisodePreviewProps[] = allEpisodeData.map(
    ({ audioUrl, title, blurb, episodeLink, pubDate, duration }) => ({
      audioUrl,
      title,
      blurb,
      episodeLink,
      pubDate,
      duration,
    })
  );
  const props: EpisodeListProps = { episodePreviews };
  return { props };
}

type EpisodeListProps = {
  episodePreviews: EpisodePreviewProps[];
};

const EpisodeList: NextPage<EpisodeListProps> = ({ episodePreviews }) => {
  return (
    <Layout
      title="Lista odcinków"
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <Container>
        <Stack spacing={4} paddingTop={4}>
          <Typography variant="h1">Lista odcinków</Typography>
          <Stack spacing={2}>
            {episodePreviews.map((episode) => (
              <PodcastCard key={episode.episodeLink}>
                <EpisodePreview {...episode} />
              </PodcastCard>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};

export default EpisodeList;
