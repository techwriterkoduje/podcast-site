import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { getTimeDisplayFromNumber } from './BestTime';
import { getTimeInSeconds } from './FocusGridGame';
import styles from './FocusGridGame.module.css';

type VictoryProps = {
  open: boolean;
  startNewGame: () => void;
  seconds: number;
  minutes: number;
  hours: number;
  bestTime: number | undefined;
};

export default function Victory({
  startNewGame,
  open,
  seconds,
  minutes,
  hours,
  bestTime,
}: VictoryProps) {
  const resultInSeconds = getTimeInSeconds(seconds, minutes, hours);
  return (
    <Dialog open={open}>
      <div className={styles.victory}>
        <h1 className={styles.victoryHeading}>
          Wynik: {getTimeDisplayFromNumber(resultInSeconds)}
        </h1>
        {bestTime && (
          <p>
            Twój najlepszy czas dla planszy o tym rozmiarze to{' '}
            {getTimeDisplayFromNumber(bestTime)}
          </p>
        )}
        <p>Spróbuj swoich sił z innym rozmiarem planszy.</p>
        <Button onClick={startNewGame} variant="contained">
          Graj dalej
        </Button>
      </div>
    </Dialog>
  );
}
