import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Container from '@mui/material/Container';
import ShowBanner from '../components/HomePage/ShowBanner';
import LatestEpisodes, {
  LatestEpisodesProps,
} from '../components/HomePage/LatestEpisodes';
import ContactUs from '../components/HomePage/ContactUs';
import ShoutOuts from '../components/HomePage/ShoutOuts';
import { getAllEpisodeData } from '../lib/rss';
import SubscribeButtons from '../components/HomePage/SubscribeButtons';
import Hosts from '../components/HomePage/Hosts';
import HomeGridContainer from '../components/HomePage/HomeGridContainer';

const podcastTitle = process.env.PODCAST_TITLE;

export async function getStaticProps() {
  const allEpisodeData = await getAllEpisodeData();
  const episodeList = allEpisodeData
    .slice(0, 3)
    .map(({ title, episodeLink, audioUrl, pubDate, duration }) => ({
      title,
      episodeLink,
      audioUrl,
      pubDate,
      duration,
    }));
  const props: HomePageProps = {
    episodeList,
  };
  return {
    props,
  };
}

type HomePageProps = {
  episodeList: LatestEpisodesProps['episodeList'];
};

const Home: NextPage<HomePageProps> = ({ episodeList }) => {
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
          <LatestEpisodes episodeList={episodeList} />
          <Hosts />
          <ContactUs />
          <ShoutOuts />
        </HomeGridContainer>
      </Container>
    </Layout>
  );
};

export default Home;
