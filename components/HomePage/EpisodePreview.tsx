import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';
import AudioPlayer from '../AudioPlayer';

export default function EpisodePreview({
  audioUrl,
  title,
  anchorLink,
}: RssItem) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ padding: '2rem', border: 1 }}
    >
      <Typography>{title}</Typography>
      <AudioPlayer audioSrc={audioUrl} />
      <Stack
        direction="row"
        spacing={3}
        alignItems="center"
        justifyContent="space-between"
      >
        <ActionButtonLink to={''}>Opis odcinka</ActionButtonLink>
        <ActionButtonLink to={anchorLink}>Anchor</ActionButtonLink>
      </Stack>
    </Stack>
  );
}
