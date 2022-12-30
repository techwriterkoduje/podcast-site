import SubscribeButtons from '../SubscribeButtons/SubscribeButtons';
import PodcastDescription from './PodcastDescription';
import PodcastLogo from './PodcastLogo';
import Grid from '@mui/material/Unstable_Grid2';
import Hosts from './Hosts';

export default function ShowBanner() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ paddingTop: '75px', margin: '0 auto', maxWidth: '1200px' }}
    >
      <Grid
        lg={7}
        container
        alignItems="center"
        justifyContent="center"
        gap="2rem"
        sx={{ margin: 'auto', padding: '1.5rem' }}
      >
        <PodcastDescription />
        <Hosts />
        <SubscribeButtons />
      </Grid>
      <Grid sx={{ margin: 'auto' }}>
        <PodcastLogo />
      </Grid>
    </Grid>
  );
}
