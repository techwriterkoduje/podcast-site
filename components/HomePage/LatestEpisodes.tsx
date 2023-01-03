import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { RssItem } from '../../lib/rss';
import EpisodePreview from './EpisodePreview';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';

type LatestEpisodesProps = {
  lastThreeEpisodes: RssItem[];
};

export default function LatestEpisodes({
  lastThreeEpisodes,
}: LatestEpisodesProps) {
  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      spacing={3}
    >
      <Typography variant="h2">Posłuchaj ostatnich odcinków</Typography>
      <Grid
        lg={12}
        alignItems="center"
        justifyContent="center"
        sx={{ gap: '1rem' }}
      >
        <EpisodePreview {...lastThreeEpisodes[0]} />
      </Grid>
      <Grid md={6}>
        <EpisodePreview {...lastThreeEpisodes[1]} />
      </Grid>
      <Grid md={6}>
        <EpisodePreview {...lastThreeEpisodes[2]} />
      </Grid>
      <ActionButtonLink to="/episode-list">Wszystkie odcinki</ActionButtonLink>
    </Grid>
  );
}
