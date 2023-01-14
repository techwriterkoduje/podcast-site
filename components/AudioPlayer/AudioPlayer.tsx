import { useEffect, useRef, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TimeDisplay from './TimeDisplay';
import { useAudio } from './useAudio';

type AudioPlayerProps = {
  audioSrc: string;
};

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const {
    isPLaying,
    setIsPlaying,
    progress,
    setProgress,
    audio,
    speed,
    setSpeed,
    speeds,
  } = useAudio(audioSrc);

  function handleTogglePlay() {
    setIsPlaying(!isPLaying);
  }

  function handleSeek(event: Event, newValue: number | number[]) {
    if (audio) {
      audio.currentTime = newValue as number;
    }
  }

  function handleSpeedChange() {
    setSpeed(getNextSpeed());
  }

  function getNextSpeed() {
    const index = speeds.indexOf(speed);

    if (index === speeds.length - 1) {
      return speeds[0];
    }

    return speeds[index + 1];
  }

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton onClick={handleTogglePlay}>
        {isPLaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <TimeDisplay currentTime={progress} duration={audio?.duration || 0} />
      <Slider
        aria-label="Volume"
        value={progress}
        onChange={handleSeek}
        min={0}
        max={audio?.duration || 0}
        step={1}
      />
      <Button
        title="ustaw prędkość odtwarzania"
        sx={{ textTransform: 'none' }}
        onClick={handleSpeedChange}
      >
        x{speed}
      </Button>
    </Stack>
  );
}
