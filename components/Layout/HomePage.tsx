import ShowBanner from './ShowBanner';
import LatestEpisodes from './LatestEpisodes';
import ContactUs from './ContactUs';
import ShoutOuts from './ShoutOuts';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

export default function HomePage() {
  return (
    <Container>
      <Grid
        container
        gap="4rem"
        alignItems="center"
        justifyContent="center"
        sx={{ paddingTop: '75px' }}
      >
        <ShowBanner />
        <LatestEpisodes />
        <ContactUs />
        <ShoutOuts />
      </Grid>
    </Container>
  );
}
