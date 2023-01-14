import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RssItem } from '../../lib/rss';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import BlurbWithLink from '../BlurbWithLink';

export default function HomeEpisodePreview({
  title,
  blurb,
  episodeLink,
  audioUrl,
}: RssItem) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1.4fr 1.5fr 2fr',
    height: '100%',
    padding: '4px',
  };

  const flexStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '1rem',
  };

  const divStyle = isLargeScreen ? gridStyle : flexStyle;

  return (
    <div style={divStyle}>
      <Typography fontWeight="500" component="div" fontSize="90%">
        {title}
      </Typography>
      <AudioPlayer audioSrc={audioUrl} />
      <BlurbWithLink blurb={blurb} link={episodeLink} fontSize="small" />
    </div>
  );
}
