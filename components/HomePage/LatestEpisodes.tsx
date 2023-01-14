import { RssItem } from '../../lib/rss';
import Grid from '@mui/material/Unstable_Grid2';
import HomeEpisodePreview from '../EpisodePreview/HomeEpisodePreview';
import PodcastCard from '../PodcastCard';

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
          <PodcastCard>
            <HomeEpisodePreview {...episode} />
          </PodcastCard>
        </Grid>
      ))}
    </Grid>
  );
}
