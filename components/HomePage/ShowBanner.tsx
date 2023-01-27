import PodcastDescription from './PodcastDescription';
import PodcastLogo from '../Layout/PodcastLogo';
import Grid from '@mui/material/Unstable_Grid2';
import PodcastCard from '../PodcastCard';

export default function ShowBanner() {
  return (
    <PodcastCard
      sx={{
        padding: '4px',
        width: '100%',
        height: '100%',
        background: 'none',
      }}
      elevation={0}
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
          sx={{ margin: 'auto' }}
        >
          <PodcastDescription />
        </Grid>
      </Grid>
    </PodcastCard>
  );
}
