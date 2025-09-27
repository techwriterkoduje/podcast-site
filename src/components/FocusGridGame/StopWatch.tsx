import React from 'react';
import Chip from '@mui/material/Chip';
import { StopwatchResult } from 'react-timer-hook';

function format(input: number) {
  return input.toLocaleString('en-US', { minimumIntegerDigits: 2 });
}

type StopWatchProps = {
  stopwatch: StopwatchResult;
};

export default function StopWatch({ stopwatch }: StopWatchProps) {
  const { seconds, minutes, hours } = stopwatch;

  return (
    <Chip
      style={{ fontSize: '1rem' }}
      label={`${format(hours)}:${format(minutes)}:${format(seconds)}`}
    />
  );
}
