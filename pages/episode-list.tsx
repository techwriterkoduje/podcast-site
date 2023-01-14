import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import EpisodePreview from '../components/EpisodePreview/EpisodePreview';
import Layout from '../components/Layout/Layout';
import PodcastCard from '../components/PodcastCard';
import { getAllEpisodeData, RssItem } from '../lib/rss';

export async function getStaticProps() {
  const allEpisodeData = await getAllEpisodeData();
  const props: EpisodeListProps = { allEpisodeData };
  return { props };
}

type EpisodeListProps = {
  allEpisodeData: RssItem[];
};

const EpisodeList: NextPage<EpisodeListProps> = ({ allEpisodeData }) => {
  return (
    <Layout
      title="Lista odcinków"
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <Container>
        <Stack spacing={4} paddingTop={4}>
          <Typography variant="h1">Lista odcinków</Typography>
          <Stack spacing={2}>
            {allEpisodeData.map((episode) => (
              <PodcastCard key={episode.anchorLink}>
                <EpisodePreview {...episode} key={episode.anchorLink} />
              </PodcastCard>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
};

export default EpisodeList;
