import Grid from '@mui/material/Unstable_Grid2';
import PodcastButton from '../PodcastButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function AllEpisodesButton() {
  return (
    <Grid
      md={12}
      alignItems="center"
      justifyContent="center"
      sx={{ textAlign: 'center' }}
    >
      <PodcastButton
        href="/episode-list/1"
        variant="contained"
        startIcon={<FormatListBulletedIcon />}
      >
        Wszystkie odcinki
      </PodcastButton>
    </Grid>
  );
}
