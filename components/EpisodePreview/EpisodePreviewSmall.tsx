import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import AudioPlayer from '../AudioPlayer';
import BlurbWithLink from '../BlurbWithLink';
import DateDisplay from '../DateDisplay/DateDisplay';
import DurationDisplay from '../DurationDisplay';

export default function EpisodePreviewSmall({
  title,
  pubDate,
  duration,
  blurb,
  episodeLink,
  audioUrl,
}: RssItem) {
  return (
    <Stack spacing={1} sx={{ padding: '1rem' }}>
      <Typography fontWeight="bold" component="div">
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ display: 'flex', gap: '1rem' }}
        fontSize="small"
        component="div"
      >
        <DateDisplay dateString={pubDate} />
        <DurationDisplay duration={duration} />
      </Typography>
      <AudioPlayer audioSrc={audioUrl} />
      <BlurbWithLink blurb={blurb} link={episodeLink} fontSize="small" />
    </Stack>
  );
}
