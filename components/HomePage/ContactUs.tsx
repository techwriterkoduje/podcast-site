import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PodcastButton from '../PodcastButton';
import PodcastCard from '../PodcastCard';

export default function ContactUs() {
  return (
    <PodcastCard>
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
    </PodcastCard>
  );
}
