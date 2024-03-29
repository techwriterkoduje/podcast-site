import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RssItem } from '../../lib/rss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import BlurbWithLink from '../BlurbWithLink';
import DateDisplay from '../DateDisplay/DateDisplay';
import DurationDisplay from '../DurationDisplay';

export type EpisodePreviewProps = {
  audioUrl: RssItem['audioUrl'];
  title: RssItem['title'];
  blurb: RssItem['blurb'];
  episodeLink: RssItem['episodeLink'];
  pubDate: RssItem['pubDate'];
  duration: RssItem['duration'];
};

export default function EpisodePreview({
  audioUrl,
  title,
  blurb,
  episodeLink,
  pubDate,
  duration,
}: EpisodePreviewProps) {
  return (
    <Stack spacing={2} padding="1rem">
      <Typography variant="h2" component="div" color="primary" fontSize="24px">
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
      <AudioPlayer audioSrc={audioUrl} title={title} />
      <BlurbWithLink blurb={blurb} link={episodeLink} />
    </Stack>
  );
}
