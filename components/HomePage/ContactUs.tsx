import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PodcastButton from '../PodcastButton';
import PodcastCard from '../PodcastCard';
import SectionStack from '../SectionStack';
import ContactInfo from '../Contact/ContactInfo';

export default function ContactUs() {
  return (
    <PodcastCard>
      <SectionStack>
        <Typography variant="h2" textAlign="center">
          Kontakt
        </Typography>
        <ContactInfo />
      </SectionStack>
    </PodcastCard>
  );
}
