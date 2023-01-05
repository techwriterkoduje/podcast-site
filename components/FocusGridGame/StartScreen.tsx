import React, { Dispatch, SetStateAction } from 'react';
import SizeSelector, { SizeSelectorProps } from './SizeSelector';
import styles from './FocusGridGame.module.css';
import Button from '@mui/material/Button';
import Image from '../Image';

type StartScreenProps = SizeSelectorProps & {
  handleStart: Dispatch<SetStateAction<boolean>>;
};

export default function StartScreen({
  currentSize,
  setSize,
  handleStart,
}: StartScreenProps) {
  return (
    <div className={styles.startScreen}>
      <Image
        src="/focus-grid.png"
        alt=""
        className={styles.startScreenBackgroundImage}
      />
      <div className={styles.gameDescription}>
        <h1 className={styles.gameTitle}>Focus Grid</h1>
        <p>
          Ćwicz koncentrację! Wybierz rozmiar tablicy i odsłoń kolejne liczby
          jak najszybciej.
        </p>
        <SizeSelector currentSize={currentSize} setSize={setSize} />
        <Button
          variant="contained"
          size="large"
          onClick={() => handleStart(true)}
        >
          Start
        </Button>
      </div>
    </div>
  );
}
