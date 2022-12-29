import SubscribeButtons from '../SubscribeButtons/SubscribeButtons';
import PodcastDescription from './PodcastDescription';
import PodcastLogo from './PodcastLogo';
import Grid from '@mui/material/Unstable_Grid2';

export default function ShowBanner() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ paddingTop: '100px', margin: '0 auto', maxWidth: '1200px' }}
    >
      <Grid
        lg={7}
        container
        alignItems="center"
        justifyContent="center"
        gap="2rem"
      >
        <PodcastDescription />
        <SubscribeButtons />
      </Grid>
      <Grid sx={{ marginLeft: '75px' }}>
        <PodcastLogo />
      </Grid>
    </Grid>
  );
}
