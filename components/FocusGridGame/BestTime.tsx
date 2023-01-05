import React from 'react';
import Chip from '@mui/material/Chip';

type BestTimeProps = {
  time: number;
};

export function getTimeDisplayFromNumber(seconds: number): string {
  return seconds
    ? new Date(seconds * 1000).toISOString().slice(11, 19)
    : 'brak';
}

export default function BestTime({ time }: BestTimeProps) {
  return (
    <Chip
      style={{ fontSize: '1.2rem', margin: '1rem auto' }}
      label={`Najlepszy czas: ${getTimeDisplayFromNumber(time)}`}
    />
  );
}
