import AudioPlayer from './AudioPlayer/AudioPlayer';
import { useAudio } from '../context/AudioContext';
import PodcastCard from './PodcastCard';
import CardHeader from '@mui/material/CardHeader';
import CloseIcon from '@mui/icons-material/Close';
import PodcastIconButton from './PodcastIconButton';

export default function NowPlaying() {
  const { audio, closeAudio } = useAudio();
  const { src } = audio;

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
        padding: '1rem',
        width: '400px',
        maxWidth: '100%',
        zIndex: '999',
      }}
    >
      <CardHeader
        action={
          <PodcastIconButton title="zamknij" onClick={handleClose}>
            <CloseIcon />
          </PodcastIconButton>
        }
        title="Odtwarzanie"
      />
      <AudioPlayer audioSrc={src} />
    </PodcastCard>
  );
}
