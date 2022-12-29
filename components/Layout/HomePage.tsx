import Stack from '@mui/material/Stack';
import ShowBanner from './ShowBanner';
import LatestEpisodes from './LatestEpisodes';
import ContactUs from './ContactUs';
import ShoutOuts from './ShoutOuts';

export default function HomePage() {
  return (
    <Stack gap="4rem">
      <ShowBanner />
      <LatestEpisodes />
      <ContactUs />
      <ShoutOuts />
    </Stack>
  );
}
