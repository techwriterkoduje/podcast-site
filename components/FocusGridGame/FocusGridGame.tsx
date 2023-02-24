import React, { SyntheticEvent, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import styles from './FocusGridGame.module.css';
import { availableSizes } from './SizeSelector';
import TileButton, { TileButtonProps } from './TileButton';
import Victory from './Victory';
import Reset from './Reset';
import StopWatch from './StopWatch';
import { useStopwatch } from 'react-timer-hook';
import BestTime from './BestTime';
import StartScreen from './StartScreen';
import Container from '@mui/material/Container';

export function getTimeInSeconds(
  seconds: number,
  minutes: number,
  hours: number
): number {
  return seconds + minutes * 60 + hours * 60 * 60;
}

function sortRange() {
  return 0.5 - Math.random();
}

function createTiles(size: number): TileButtonProps[] {
  const rangeOfNumbers = Array.from(Array(size + 1).keys()).slice(1);
  rangeOfNumbers.sort(sortRange);
  rangeOfNumbers.sort(sortRange);
  const range = rangeOfNumbers.map((i) => ({
    id: i,
    label: `${i}`,
    done: false,
    fontSize: `${i < 100 ? 180 / Math.sqrt(size) : 130 / Math.sqrt(size)}px`,
  }));

  return range;
}

const storageItems = {
  score: 'score',
  gridSize: 'gridSize',
  difficultyLevel: 'difficultyLevel',
  bestTime: 'bestTime-',
};

export default function FocusGridGame() {
  const [numberToClick, setNumberToClick] = useState<number>(1);
  const [gameIsWon, setGameIsWon] = useState(false);
  const [gridSize, setGridSize] = useState<number>();
  const [tiles, setTiles] = useState<TileButtonProps[]>([]);
  const [bestTime, setBestTime] = useState<number | undefined>(undefined);
  const [gameStarted, setGameStarted] = useState(false);
  const [resetDisabled, setResetDisabled] = useState(false);
  const stopwatch = useStopwatch({ autoStart: true });

  useEffect(function () {
    const initialGridSize =
      Number(localStorage.getItem(storageItems.gridSize)) || availableSizes[0];
    setGridSize(initialGridSize);
    setBestTime(
      Number(
        localStorage.getItem(`${storageItems.bestTime}${initialGridSize}`)
      ) || undefined
    );
  }, []);

  useEffect(
    function () {
      if (gameStarted) {
        stopwatch.start();
        setResetDisabled(false);
      }
    },
    [gameStarted]
  );

  useEffect(
    function () {
      if (gridSize) {
        localStorage.setItem(storageItems.gridSize, `${gridSize}`);
        setTiles(createTiles(gridSize));
        setNumberToClick(1);
        setBestTime(
          Number(localStorage.getItem(`${storageItems.bestTime}${gridSize}`)) ||
            undefined
        );
      }
    },
    [gridSize]
  );

  function resetBoard(backToHomeScreen: boolean) {
    if (gridSize) {
      setResetDisabled(false);
      setNumberToClick(1);
      setGameIsWon(false);
      setTiles(createTiles(gridSize));
      stopwatch.reset();
      if (backToHomeScreen) {
        setGameStarted(false);
      }
    }
  }

  function saveBestTime() {
    const timeInSeconds = getTimeInSeconds(
      stopwatch.seconds,
      stopwatch.minutes,
      stopwatch.hours
    );
    if (!bestTime || timeInSeconds < bestTime) {
      setBestTime(timeInSeconds);
      localStorage.setItem(
        `${storageItems.bestTime}${gridSize}`,
        timeInSeconds.toString()
      );
    }
  }

  function markAsDone(event: SyntheticEvent) {
    const tileNumber = Number(event.currentTarget.id);
    if (numberToClick === tileNumber) {
      const matchingTile = tiles.find((t) => t.id === tileNumber);
      if (matchingTile) {
        matchingTile.done = true;
      }
      if (tileNumber === gridSize) {
        // GAME WON!!!
        stopwatch.pause();
        setResetDisabled(true);
        saveBestTime();
        setTimeout(() => {
          setGameIsWon(true);
        }, 1000);
        return;
      }
      setNumberToClick(numberToClick + 1);
    } else {
      event.currentTarget.animate(
        [
          { transform: 'rotate(10deg)' },
          { transform: 'rotate(-10deg)' },
          { transform: 'rotate(0)' },
        ],
        { duration: 100, iterations: 1 }
      );
    }
  }

  if (!gameStarted && gridSize) {
    return (
      <StartScreen
        currentSize={gridSize}
        setSize={setGridSize}
        handleStart={setGameStarted}
      />
    );
  }

  return (
    <Container className="exclude-from-index" maxWidth="sm">
      <div className={styles.toolbar}>
        {gridSize && (
          <TextField
            disabled
            id="outlined"
            label="Rozmiar"
            defaultValue={`${Math.sqrt(gridSize)}x${Math.sqrt(gridSize)}`}
            size="small"
            style={{ width: '100px' }}
          />
        )}
        <StopWatch stopwatch={stopwatch} />
      </div>
      {gridSize && (
        <Grid
          container
          spacing={1 / Math.sqrt(gridSize)}
          columns={Math.sqrt(gridSize)}
          width="100%"
          alignItems="center"
          justifyContent="center"
          maxWidth={1200}
          overflow="hidden"
          margin="auto"
        >
          {tiles.map((props) => (
            <Grid item key={props.id} xs={1} xl={1} lg={1} sm={1} md={1}>
              <TileButton {...props} markAsDone={markAsDone} />
            </Grid>
          ))}
        </Grid>
      )}
      <div className={styles.toolbar}>
        <Reset handleReset={() => resetBoard(true)} disabled={resetDisabled} />
      </div>

      {bestTime && (
        <div className={styles.toolbar}>
          <BestTime time={bestTime} />
        </div>
      )}
      <Victory
        startNewGame={() => resetBoard(false)}
        open={gameIsWon}
        seconds={stopwatch.seconds}
        minutes={stopwatch.minutes}
        hours={stopwatch.hours}
        bestTime={bestTime}
      />
    </Container>
  );
}
