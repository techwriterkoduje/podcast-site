import SubscribeButtons from './SubscribeButtons';
import PodcastDescription from './PodcastDescription';
import PodcastLogo from '../Layout/PodcastLogo';
import Grid from '@mui/material/Unstable_Grid2';
import Hosts from './Hosts';
import PodcastCard from '../PodcastCard';

export default function ShowBanner() {
  return (
    <PodcastCard>
      <Grid
        container
        flexDirection="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid lg={4} paddingTop={1}>
          <PodcastLogo />
        </Grid>
        <Grid
          lg={7}
          container
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ margin: 'auto', padding: '1.5rem 0' }}
        >
          <PodcastDescription />
          <Hosts size="small" overrideLink="/contact" />
          <SubscribeButtons />
        </Grid>
      </Grid>
    </PodcastCard>
  );
}
