import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import TimeDisplay from './TimeDisplay';
import PodcastIconButton from '../PodcastIconButton';
import { useEffect, useState } from 'react';
import { useAudio } from '../../context/AudioContext';

const speeds = [1, 1.5, 1.75, 2];

type AudioPlayerProps = {
  audioSrc: string;
  title: string;
};

export default function AudioPlayer({ audioSrc, title }: AudioPlayerProps) {
  const { audio, startAudio, togglePlay, changeSpeed, skipTo } = useAudio();
  const { src, isPlaying, progress, speed, duration } = audio;
  const [isCurrent, setIsCurrent] = useState(false);

  useEffect(() => {
    setIsCurrent(src === audioSrc);
  }, [src, audioSrc]);

  function handleTogglePlay() {
    if (src !== audioSrc) {
      startAudio(audioSrc, title);
      return;
    }

    if (src === audioSrc) {
      togglePlay();
      return;
    }
  }

  function handleSeek(event: Event, newValue: number | number[]) {
    skipTo(Array.isArray(newValue) ? newValue[0] : newValue);
  }

  function getNextSpeed() {
    const index = speeds.indexOf(speed || 1);

    if (index === speeds.length - 1) {
      return speeds[0];
    }

    return speeds[index + 1];
  }

  function handleSpeedChange() {
    changeSpeed(getNextSpeed());
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
        title={isPlaying ? 'pauza' : 'play'}
      >
        {isCurrent && isPlaying ? (
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
        value={isCurrent && progress ? progress : 0}
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
