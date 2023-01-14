import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import ShowBanner from '../components/HomePage/ShowBanner';
import LatestEpisodes from '../components/HomePage/LatestEpisodes';
import ContactUs from '../components/HomePage/ContactUs';
import ShoutOuts from '../components/HomePage/ShoutOuts';
import { getAllEpisodeData, RssItem } from '../lib/rss';
import AllEpisodesButton from '../components/HomePage/AllEpisodesButton';

const podcastTitle = process.env.PODCAST_TITLE;

export async function getStaticProps() {
  const allEpisodeData = await getAllEpisodeData();
  const props: HomePageProps = { allEpisodeData };
  return {
    props,
  };
}

type HomePageProps = {
  allEpisodeData: RssItem[];
};

const Home: NextPage<HomePageProps> = ({ allEpisodeData }) => {
  return (
    <Layout
      title={`Podcast ${podcastTitle}`}
      description="Podcast dla tech writerów, którzy kodują i nie tylko"
      isHome
      mainStyle={{ textAlign: 'center' }}
    >
      <Container>
        <Grid
          container
          gap="1rem"
          alignItems="center"
          justifyContent="space-between"
          sx={{ paddingTop: '75px' }}
        >
          <ShowBanner />
          <LatestEpisodes lastThreeEpisodes={allEpisodeData.slice(0, 3)} />
          <AllEpisodesButton />
          <ContactUs />
          <ShoutOuts />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Home;
