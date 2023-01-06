import SubscribeButtons from './SubscribeButtons';
import PodcastDescription from './PodcastDescription';
import PodcastLogo from '../Layout/PodcastLogo';
import Grid from '@mui/material/Unstable_Grid2';
import Hosts from './Hosts';

export default function ShowBanner() {
  return (
    <Grid container flexDirection="row-reverse" justifyContent="center">
      <Grid lg={4} height={450} width={450} sx={{ position: 'relative' }}>
        <PodcastLogo />
      </Grid>
      <Grid
        lg={7}
        container
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{ margin: 'auto', padding: '1.5rem' }}
      >
        <PodcastDescription />
        <Hosts size="small" overrideLink="/contact" />
        <SubscribeButtons />
      </Grid>
    </Grid>
  );
}
