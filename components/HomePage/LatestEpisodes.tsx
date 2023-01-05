import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import EpisodePreviewSmall from '../EpisodePreview/EpisodePreviewSmall';

type LatestEpisodesProps = {
  lastThreeEpisodes: RssItem[];
};

export default function LatestEpisodes({
  lastThreeEpisodes,
}: LatestEpisodesProps) {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      spacing={3}
    >
      <Typography variant="h2">Posłuchaj ostatnich odcinków</Typography>
      <Grid container spacing={2}>
        {lastThreeEpisodes.map((episode) => (
          <Grid key={episode.anchorLink} md={4}>
            <EpisodePreviewSmall {...episode} />
          </Grid>
        ))}
      </Grid>
      <ActionButtonLink href="/episode-list">
        Wszystkie odcinki
      </ActionButtonLink>
    </Stack>
  );
}
