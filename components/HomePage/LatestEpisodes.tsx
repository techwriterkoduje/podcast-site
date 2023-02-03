import Grid from '@mui/material/Unstable_Grid2';
import HomeEpisodePreview, {
  HomeEpisodePreviewProps,
} from '../EpisodePreview/HomeEpisodePreview';
import PodcastCard from '../PodcastCard';
import AllEpisodesButton from './AllEpisodesButton';
import Typography from '@mui/material/Typography';
import SectionStack from '../SectionStack';

export type LatestEpisodesProps = { episodeList: HomeEpisodePreviewProps[] };

export default function LatestEpisodes({ episodeList }: LatestEpisodesProps) {
  return (
    <PodcastCard>
      <SectionStack>
        <Typography variant="h2" textAlign="center">
          Najnowsze odcinki
        </Typography>
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
      </SectionStack>
    </PodcastCard>
  );
}
