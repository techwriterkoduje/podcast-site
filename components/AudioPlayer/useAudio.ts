import { useEffect, useRef, useState } from 'react';

const speeds = [1, 1.5, 1.75, 2];

export function useAudio(audioSrc: string) {
  const [isPLaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  const [speed, setSpeed] = useState(speeds[0]);
  const intervalRef = useRef<number | null>(null);

  useEffect(function () {
    setAudio(new Audio(audioSrc));
  }, []);

  function startTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(function () {
      setProgress(audio?.currentTime || 0);
    }, 1000);
  }

  useEffect(
    function () {
      if (isPLaying) {
        audio?.play();
        startTimer();
      } else {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
        }
        audio?.pause();
      }
    },
    [isPLaying]
  );

  useEffect(
    function () {
      if (audio) {
        audio.playbackRate = speed;
      }
    },
    [speed]
  );

  return {
    isPLaying,
    setIsPlaying,
    progress,
    setProgress,
    audio,
    speed,
    setSpeed,
    speeds,
  };
}
