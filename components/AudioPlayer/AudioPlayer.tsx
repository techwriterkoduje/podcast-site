import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import TimeDisplay from './TimeDisplay';
import PodcastIconButton from '../PodcastIconButton';
import { useContext, useEffect, useState } from 'react';
import {
  AUDIO_ACTION,
  AudioContext,
  AudioDispatchContext,
} from '../../context/AudioContext';

const speeds = [1, 1.5, 1.75, 2];

type AudioPlayerProps = {
  audioSrc: string;
};

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const audioDispatch = useContext(AudioDispatchContext) as any;
  const audioContext = useContext(AudioContext);
  const { src, isPLaying, progress, speed, duration } = audioContext;
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    setIsCurrent(src === audioSrc);
  }, [src, audioSrc]);

  function handleTogglePlay() {
    if (src !== audioSrc) {
      audioDispatch({
        type: AUDIO_ACTION.START_AUDIO,
        payload: { src: audioSrc },
      });
      return;
    }

    if (src === audioSrc) {
      audioDispatch({
        type: AUDIO_ACTION.TOGGLE_PLAY,
      });
      return;
    }
  }

  function handleSeek(event: Event, newValue: number | number[]) {
    audioDispatch({
      type: AUDIO_ACTION.SKIP_TO,
      payload: { requestedSkip: newValue },
    });
  }

  function getNextSpeed() {
    const index = speeds.indexOf(speed || 1);

    if (index === speeds.length - 1) {
      return speeds[0];
    }

    return speeds[index + 1];
  }

  function handleSpeedChange() {
    audioDispatch({
      type: AUDIO_ACTION.SET_SPEED,
      payload: { speed: getNextSpeed() },
    });
  }

  return (
    <Stack
      className="exclude-from-index"
      direction="row"
      alignItems="center"
      spacing={1}
      width="100%"
    >
      <PodcastIconButton
        onClick={handleTogglePlay}
        color="primary"
        title={isPLaying ? 'pauza' : 'play'}
      >
        {isCurrent && isPLaying ? (
          <PauseIcon fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </PodcastIconButton>
      <TimeDisplay
        currentTime={isCurrent && progress ? progress : 0}
        duration={isCurrent && duration ? duration : 0}
      />
      <Slider
        aria-label="Volume"
        value={progress}
        onChange={handleSeek}
        min={0}
        max={duration || 0}
        step={1}
        size="small"
        sx={{ color: 'white' }}
      />
      <PodcastIconButton
        title="ustaw prędkość odtwarzania"
        sx={{ textTransform: 'none' }}
        onClick={handleSpeedChange}
        size="small"
      >
        x{isCurrent ? speed : 1}
      </PodcastIconButton>
    </Stack>
  );
}
