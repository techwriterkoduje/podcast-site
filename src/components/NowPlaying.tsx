import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import CardHeader from '@mui/material/CardHeader';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useAudio } from '../context/AudioContext';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import PodcastCard from './PodcastCard';
import PodcastIconButton from './PodcastIconButton';

export default function NowPlaying() {
  const [isMinimized, setIsMinimized] = useState(false);
  const { audio, closeAudio } = useAudio();
  const { src, title: rawTitle } = audio;
  const theme = useTheme();

  const decodedTitle = rawTitle ? decodeURIComponent(rawTitle) : 'Odtwarzanie';
  const maxLength = 50;
  const displayTitle =
    decodedTitle.length > maxLength
      ? `${decodedTitle.slice(0, maxLength)}...`
      : decodedTitle;

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
        title={`słuchaj dalej odcinka ${displayTitle || 'nieznany'}`}
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
        title={displayTitle || 'Odtwarzanie'}
        slotProps={{
          title: {
            variant: 'h5',
            fontSize: '1rem',
            color: theme.palette.primary.main,
          },
        }}
      />
      <AudioPlayer audioSrc={src} title={displayTitle || 'nieznany'} />
    </PodcastCard>
  );
}
