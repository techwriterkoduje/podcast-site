import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import DescriptionIcon from '@mui/icons-material/Description';
import PodcastIconButton from '../PodcastIconButton';

export default function HomeEpisodePreview({
  title,
  episodeLink,
  audioUrl,
}: RssItem) {
  return (
    <Stack
      width="100%"
      height="100%"
      justifyContent="space-between"
      spacing={2}
      sx={{ padding: '1rem' }}
    >
      <Typography variant="h5" component="div">
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
