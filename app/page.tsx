// This page is a Server Component by default.
import { Metadata } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'; // For applying mainStyle

import ShowBanner from '../components/HomePage/ShowBanner';
import LatestEpisodes, {
  LatestEpisodesProps,
} from '../components/HomePage/LatestEpisodes'; // This might need "use client" if it uses hooks for audio interaction
import ContactUs from '../components/HomePage/ContactUs';
import ShoutOuts from '../components/HomePage/ShoutOuts';
import { getAllEpisodeData, Episode } from '../lib/rss'; // Assuming Episode type is exported
import SubscribeButtons from '../components/HomePage/SubscribeButtons'; // This might need "use client"
import Hosts from '../components/HomePage/Hosts';
import HomeGridContainer from '../components/HomePage/HomeGridContainer';

const podcastTitle = process.env.PODCAST_TITLE || 'Podcast';

// Metadata for the page
export const metadata: Metadata = {
  title: `Home | ${podcastTitle}`,
  description: "Podcast dla tech writerów, którzy kodują i nie tylko",
};

// Data fetching directly in the Server Component
async function getHomePageData() {
  const allEpisodeData = await getAllEpisodeData();
  const episodeList = allEpisodeData
    .slice(0, 3)
    .map(({ title, episodeLink, audioUrl, pubDate, duration } : Episode) => ({ // Added Episode type
      title,
      episodeLink,
      audioUrl,
      pubDate,
      duration,
    }));
  return { episodeList };
}

export default async function Home() {
  const { episodeList } = await getHomePageData();

  const mainStyle: React.CSSProperties = { 
    textAlign: 'center',
    paddingBottom: '1rem' // Re-apply padding previously in Layout's main tag
  };

  return (
    <Box component="div" style={mainStyle}> {/* Using Box to apply style, similar to main in old Layout */}
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
    </Box>
  );
}
