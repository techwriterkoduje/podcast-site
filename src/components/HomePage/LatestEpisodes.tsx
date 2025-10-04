import Grid from '@mui/material/Grid';
import HomeEpisodePreview, {
  HomeEpisodePreviewProps,
} from '../EpisodePreview/HomeEpisodePreview';
import PodcastCard from '../PodcastCard';
import AllEpisodesButton from './AllEpisodesButton';
import Typography from '@mui/material/Typography';
import SectionStack from '../SectionStack';
import { useTheme } from '@mui/material/styles';

export type LatestEpisodesProps = { episodeList: HomeEpisodePreviewProps[] };

export default function LatestEpisodes({ episodeList }: LatestEpisodesProps) {
  const theme = useTheme();

  return (
    <PodcastCard>
      <SectionStack
        sx={{
          [theme.breakpoints.down('md')]: {
            padding: '1rem 0',
          },
        }}
      >
        <Typography variant="h2" textAlign="center">
          Najnowsze odcinki
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            [theme.breakpoints.down('md')]: {
              padding: '0',
            },
          }}
        >
          {episodeList.map(
            ({ title, audioUrl, episodeLink, pubDate, duration }) => (
              <Grid
                key={episodeLink}
                sx={{
                  [theme.breakpoints.down('md')]: {
                    padding: '0',
                  },
                  width: '100%',
                }}
              >
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
          <Grid size={12}>
            <AllEpisodesButton />
          </Grid>
        </Grid>
      </SectionStack>
    </PodcastCard>
  );
}
