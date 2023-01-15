import { RssItem } from '../../lib/rss';
import Grid from '@mui/material/Unstable_Grid2';
import HomeEpisodePreview, {
  HomeEpisodePreviewProps,
} from '../EpisodePreview/HomeEpisodePreview';
import PodcastCard from '../PodcastCard';

export type LatestEpisodesProps = {
  latestEpisodes: HomeEpisodePreviewProps[];
};

export default function LatestEpisodes({
  latestEpisodes,
}: LatestEpisodesProps) {
  return (
    <Grid container spacing={2}>
      {latestEpisodes.map(({ title, audioUrl, episodeLink }, idx) => (
        <Grid key={episodeLink} md={idx === 0 ? 12 : 6}>
          <PodcastCard>
            <HomeEpisodePreview
              title={title}
              audioUrl={audioUrl}
              episodeLink={episodeLink}
            />
          </PodcastCard>
        </Grid>
      ))}
    </Grid>
  );
}
