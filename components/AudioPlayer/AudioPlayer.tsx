import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import TimeDisplay from './TimeDisplay';
import { useAudio } from './useAudio';
import PodcastIconButton from '../PodcastIconButton';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

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
    <Stack
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
        {isPLaying ? <PauseIcon /> : <PlayArrowIcon />}
      </PodcastIconButton>
      <TimeDisplay currentTime={progress} duration={audio?.duration || 0} />
      <Slider
        aria-label="Volume"
        value={progress}
        onChange={handleSeek}
        min={0}
        max={audio?.duration || 0}
        step={1}
        size="small"
      />
      <PodcastIconButton
        title="ustaw prędkość odtwarzania"
        sx={{ textTransform: 'none' }}
        onClick={handleSpeedChange}
        size="small"
        color="primary"
      >
        x{speed}
      </PodcastIconButton>
    </Stack>
  );
}
