import SubscribeButtons from './SubscribeButtons';
import PodcastDescription from './PodcastDescription';
import PodcastLogo from '../Layout/PodcastLogo';
import Grid from '@mui/material/Unstable_Grid2';
import Hosts from './Hosts';
import PodcastCard from '../PodcastCard';

export default function ShowBanner() {
  return (
    <PodcastCard
      sx={{
        padding: '4px',
        width: '100%',
        height: '100%',
        background: 'none',
        marginBottom: '1.5rem',
      }}
    >
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
        </Grid>
      </Grid>
    </PodcastCard>
  );
}
