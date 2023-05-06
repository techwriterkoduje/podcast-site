import Typography from '@mui/material/Typography';
import AudioPlayer from './AudioPlayer/AudioPlayer';
import { useContext } from 'react';
import { AudioContext, AudioDispatchContext } from '../context/AudioContext';
import PodcastCard from './PodcastCard';
import CardHeader from '@mui/material/CardHeader';
import CloseIcon from '@mui/icons-material/Close';
import PodcastIconButton from './PodcastIconButton';

export default function NowPlaying() {
  const audioContext = useContext(AudioContext);
  const audioDispatch = useContext(AudioDispatchContext) as any;
  const { src } = audioContext;

  if (!src) {
    return null;
  }

  function handleClose() {
    audioDispatch({ type: 'CLOSE_AUDIO' });
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
