import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PodcastButton from '../PodcastButton';
import HomeCard from './HomeCard';

export default function ContactUs() {
  return (
    <HomeCard>
      <Stack
        sx={{
          alignItems: 'center',
          padding: '2rem',
        }}
        spacing={2}
      >
        <Typography variant="h2">
          Masz pomysł na odcinek? Chcesz być naszym gościem?
        </Typography>
        <PodcastButton href="/contact">Skontaktuj się z nami</PodcastButton>
      </Stack>
    </HomeCard>
  );
}
