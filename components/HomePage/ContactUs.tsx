import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PodcastButton from '../PodcastButton';
import PodcastCard from '../PodcastCard';
import SectionStack from '../SectionStack';

export default function ContactUs() {
  return (
    <PodcastCard>
      <SectionStack>
        <Typography variant="h2" textAlign="center">
          Masz pomysł na odcinek? Chcesz być naszym gościem?
        </Typography>
        <PodcastButton href="/contact">Skontaktuj się z nami</PodcastButton>
      </SectionStack>
    </PodcastCard>
  );
}
