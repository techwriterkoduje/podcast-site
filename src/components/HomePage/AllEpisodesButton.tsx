import Grid from '@mui/material/Grid';
import PodcastButton from '../PodcastButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function AllEpisodesButton() {
  return (
    <Grid
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
