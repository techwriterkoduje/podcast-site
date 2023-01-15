import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Container from '@mui/material/Container';
import ShowBanner from '../components/HomePage/ShowBanner';
import LatestEpisodes, {
  LatestEpisodesProps,
} from '../components/HomePage/LatestEpisodes';
import ContactUs from '../components/HomePage/ContactUs';
import ShoutOuts from '../components/HomePage/ShoutOuts';
import { getAllEpisodeData, RssItem } from '../lib/rss';
import AllEpisodesButton from '../components/HomePage/AllEpisodesButton';
import SubscribeButtons from '../components/HomePage/SubscribeButtons';
import Hosts from '../components/HomePage/Hosts';
import HomeGridContainer from '../components/HomePage/HomeGridContainer';

const podcastTitle = process.env.PODCAST_TITLE;

export async function getStaticProps() {
  const allEpisodeData = await getAllEpisodeData();
  const latestEpisodes = allEpisodeData
    .slice(0, 3)
    .map(({ title, episodeLink, audioUrl }) => ({
      title,
      episodeLink,
      audioUrl,
    }));
  const props: HomePageProps = {
    latestEpisodes: {
      latestEpisodes,
    },
  };
  return {
    props,
  };
}

type HomePageProps = {
  latestEpisodes: LatestEpisodesProps;
};

const Home: NextPage<HomePageProps> = ({ latestEpisodes }) => {
  return (
    <Layout
      title={`Podcast ${podcastTitle}`}
      description="Podcast dla tech writerów, którzy kodują i nie tylko"
      isHome
      mainStyle={{ textAlign: 'center' }}
    >
      <Container>
        <HomeGridContainer>
          <ShowBanner />
        </HomeGridContainer>
      </Container>
      <HomeGridContainer>
        <SubscribeButtons />
      </HomeGridContainer>
      <Container>
        <HomeGridContainer>
          <LatestEpisodes latestEpisodes={latestEpisodes.latestEpisodes} />
          <AllEpisodesButton />
          <Hosts />
          <ContactUs />
          <ShoutOuts />
        </HomeGridContainer>
      </Container>
    </Layout>
  );
};

export default Home;
