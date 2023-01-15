import Grid from '@mui/material/Unstable_Grid2';
import PodcastButton from '../PodcastButton';
import PodcastCard from '../PodcastCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function AllEpisodesButton() {
  return (
    <Grid md={12} alignItems="center" justifyContent="center">
      <PodcastCard>
        <PodcastButton
          href="/episode-list/1"
          variant="text"
          fullWidth
          startIcon={<FormatListBulletedIcon />}
        >
          Wszystkie odcinki
        </PodcastButton>
      </PodcastCard>
    </Grid>
  );
}
