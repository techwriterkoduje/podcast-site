import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import ActionButtonLink from '../ActionButtonLink';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import HomeEpisodePreview from '../EpisodePreview/HomeEpisodePreview';
import HomeCard from './HomeCard';

type LatestEpisodesProps = {
  lastThreeEpisodes: RssItem[];
};

export default function LatestEpisodes({
  lastThreeEpisodes,
}: LatestEpisodesProps) {
  return (
    <Grid container spacing={2}>
      {lastThreeEpisodes.map((episode, idx) => (
        <Grid key={episode.anchorLink} md={idx === 0 ? 12 : 6}>
          <HomeCard>
            <HomeEpisodePreview {...episode} />
          </HomeCard>
        </Grid>
      ))}
    </Grid>
  );
}
