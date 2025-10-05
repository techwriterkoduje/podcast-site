import Typography from '@mui/material/Typography';
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
