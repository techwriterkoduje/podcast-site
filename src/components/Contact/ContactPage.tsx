import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Heading1 from '../Heading1';
import PodcastCard from '../PodcastCard';
import ContactInfo from './ContactInfo';

export default function ContactPage() {
  return (
    <Container sx={{ padding: '4rem 6px' }}>
      <Grid container spacing={2}>
        <Grid size={12} justifyContent="center">
          <Heading1>Kontakt</Heading1>
        </Grid>
        <PodcastCard>
          <ContactInfo />
        </PodcastCard>
      </Grid>
    </Container>
  );
}
