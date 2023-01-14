import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import BlurbWithLink from '../BlurbWithLink';
import DateDisplay from '../DateDisplay/DateDisplay';
import DurationDisplay from '../DurationDisplay';

export default function EpisodePreview({
  audioUrl,
  title,
  blurb,
  episodeLink,
  pubDate,
  duration,
}: RssItem) {
  return (
    <Card
      key={episodeLink}
      variant="outlined"
      sx={{ height: '100%', width: '100%' }}
    >
      <Stack spacing={2} sx={{ padding: '2rem' }}>
        <Typography fontWeight="bold" fontSize="1.1rem">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ display: 'flex', gap: '1rem' }}
          fontSize="small"
        >
          <DateDisplay dateString={pubDate} />
          <DurationDisplay duration={duration} />
        </Typography>
        <AudioPlayer audioSrc={audioUrl} />
        <BlurbWithLink blurb={blurb} link={episodeLink} />
      </Stack>
    </Card>
  );
}
