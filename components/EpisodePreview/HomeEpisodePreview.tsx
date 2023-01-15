import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import DescriptionIcon from '@mui/icons-material/Description';
import PodcastIconButton from '../PodcastIconButton';
import DateDisplay from '../DateDisplay/DateDisplay';
import DurationDisplay from '../DurationDisplay';

export type HomeEpisodePreviewProps = {
  title: RssItem['title'];
  episodeLink: RssItem['episodeLink'];
  audioUrl: RssItem['audioUrl'];
  pubDate: RssItem['pubDate'];
  duration: RssItem['duration'];
};

export default function HomeEpisodePreview({
  title,
  episodeLink,
  audioUrl,
  pubDate,
  duration,
}: HomeEpisodePreviewProps) {
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="space-between"
      spacing={2}
      sx={{ padding: '1rem' }}
    >
      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', gap: '1rem' }}
        fontSize="medium"
      >
        <DateDisplay dateString={pubDate} />
        <DurationDisplay duration={duration} />
      </Typography>
      <Typography variant="h3" component="div" color="#ed6e5f">
        {title}
      </Typography>
      <Stack direction="row" width="100%">
        <AudioPlayer audioSrc={audioUrl} />
        <PodcastIconButton href={episodeLink} title="opis odcinka" size="small">
          <DescriptionIcon />
        </PodcastIconButton>
      </Stack>
    </Stack>
  );
}
