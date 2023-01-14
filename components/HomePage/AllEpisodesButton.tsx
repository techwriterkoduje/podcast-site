import Grid from '@mui/material/Unstable_Grid2';
import PodcastButton from '../PodcastButton';
import HomeCard from './HomeCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export default function AllEpisodesButton() {
  return (
    <Grid md={12} alignItems="center" justifyContent="center">
      <HomeCard>
        <PodcastButton
          href="/episode-list"
          variant="text"
          fullWidth
          startIcon={<FormatListBulletedIcon />}
        >
          Wszystkie odcinki
        </PodcastButton>
      </HomeCard>
    </Grid>
  );
}
