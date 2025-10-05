import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Container from '@mui/material/Container';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import allEpisodeData from '../../all-episodes.json';
import ContactUs from '../components/HomePage/ContactUs';
import HomeGridContainer from '../components/HomePage/HomeGridContainer';
import Hosts from '../components/HomePage/Hosts';
import LatestEpisodes from '../components/HomePage/LatestEpisodes';
import ShoutOuts from '../components/HomePage/ShoutOuts';
import ShowBanner from '../components/HomePage/ShowBanner';
import SubscribeButtons from '../components/HomePage/SubscribeButtons';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const episodeList = allEpisodeData.slice(0, 3);
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>
        <Container>
          <HomeGridContainer>
            <ShowBanner />
          </HomeGridContainer>
        </Container>
        <HomeGridContainer justifyContent="center">
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
      </main>
    </Layout>
  );
}
