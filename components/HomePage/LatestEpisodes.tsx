import Grid from '@mui/material/Unstable_Grid2';
import HomeEpisodePreview, {
  HomeEpisodePreviewProps,
} from '../EpisodePreview/HomeEpisodePreview';
import PodcastCard from '../PodcastCard';
import AllEpisodesButton from './AllEpisodesButton';

export type LatestEpisodesProps = { episodeList: HomeEpisodePreviewProps[] };

export default function LatestEpisodes({ episodeList }: LatestEpisodesProps) {
  return (
    <PodcastCard>
      <Grid container spacing={4}>
        {episodeList.map(
          ({ title, audioUrl, episodeLink, pubDate, duration }, idx) => (
            <Grid key={episodeLink} md={12}>
              <HomeEpisodePreview
                title={title}
                audioUrl={audioUrl}
                episodeLink={episodeLink}
                pubDate={pubDate}
                duration={duration}
              />
            </Grid>
          )
        )}
        <Grid md={12}>
          <AllEpisodesButton />
        </Grid>
      </Grid>
    </PodcastCard>
  );
}
