import Grid from '@mui/material/Unstable_Grid2';
import ActionButtonLink from '../ActionButtonLink';
import HomeCard from './HomeCard';

export default function AllEpisodesButton() {
  return (
    <Grid md={12} alignItems="center" justifyContent="center">
      <HomeCard>
        <ActionButtonLink href="/episode-list" variant="text">
          Wszystkie odcinki
        </ActionButtonLink>
      </HomeCard>
    </Grid>
  );
}
