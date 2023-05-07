import AudioPlayer from './AudioPlayer/AudioPlayer';
import { useAudio } from '../context/AudioContext';
import PodcastCard from './PodcastCard';
import CardHeader from '@mui/material/CardHeader';
import CloseIcon from '@mui/icons-material/Close';
import PodcastIconButton from './PodcastIconButton';
import { useTheme } from '@mui/material/styles';

export default function NowPlaying() {
  const { audio, closeAudio } = useAudio();
  const { src, title } = audio;
  const theme = useTheme();

  if (!src) {
    return null;
  }

  function handleClose() {
    closeAudio();
  }

  return (
    <PodcastCard
      sx={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        border: '1px solid #ddd',
        padding: '0.5rem',
        width: '500px',
        zIndex: '999',
        [theme.breakpoints.down('sm')]: {
          width: '350px',
        },
      }}
      className="exclude-from-index"
    >
      <CardHeader
        action={
          <PodcastIconButton title="zamknij" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </PodcastIconButton>
        }
        title={title || 'Odtwarzanie'}
        titleTypographyProps={{
          variant: 'h5',
          fontSize: '1rem',
          color: theme.palette.primary.main,
        }}
      />
      <AudioPlayer audioSrc={src} title={title || 'nieznany'} />
    </PodcastCard>
  );
}
