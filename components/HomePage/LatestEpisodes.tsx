import Grid from '@mui/material/Unstable_Grid2';
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
                md={12}
                sx={{
                  [theme.breakpoints.down('md')]: {
                    padding: '0',
                  },
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
          <Grid md={12}>
            <AllEpisodesButton />
          </Grid>
        </Grid>
      </SectionStack>
    </PodcastCard>
  );
}
