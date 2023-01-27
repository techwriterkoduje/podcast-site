import Grid from '@mui/material/Unstable_Grid2';
import PodcastButton from '../PodcastButton';
import PodcastCard from '../PodcastCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from '@mui/material/Box';

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
