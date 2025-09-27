import AudioPlayer from './AudioPlayer/AudioPlayer';
import { useAudio } from '../context/AudioContext';
import PodcastCard from './PodcastCard';
import CardHeader from '@mui/material/CardHeader';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PodcastIconButton from './PodcastIconButton';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

export default function NowPlaying() {
  const [isMinimized, setIsMinimized] = useState(false);
  const { audio, closeAudio } = useAudio();
  const { src, title } = audio;
  const theme = useTheme();

  const positionProps = {
    position: 'fixed',
    bottom: 10,
    right: 10,
  };

  if (!src) {
    return null;
  }

  function handleClose() {
    closeAudio();
  }

  if (isMinimized) {
    return (
      <PodcastIconButton
        title={`słuchaj dalej odcinka ${audio.title}`}
        onClick={() => setIsMinimized(false)}
        sx={{ ...positionProps }}
      >
        <AudiotrackIcon />
      </PodcastIconButton>
    );
  }

  return (
    <PodcastCard
      sx={{
        ...positionProps,
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
          <>
            <PodcastIconButton
              title="minimalizuj"
              onClick={() => setIsMinimized(true)}
            >
              <MinimizeIcon fontSize="small" />
            </PodcastIconButton>
            <PodcastIconButton title="zamknij" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </PodcastIconButton>
          </>
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
