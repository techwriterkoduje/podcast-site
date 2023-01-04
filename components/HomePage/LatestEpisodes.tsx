import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import EpisodePreview from './EpisodePreview';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';
import Stack from '@mui/material/Stack';

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
      <Stack spacing={2}>
        {lastThreeEpisodes.map((episode) => (
          <EpisodePreview {...episode} key={episode.anchorLink} />
        ))}
      </Stack>
      <ActionButtonLink to="/episode-list">Wszystkie odcinki</ActionButtonLink>
    </Stack>
  );
}
