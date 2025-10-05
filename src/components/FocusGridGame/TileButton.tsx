import React from 'react';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';
import styles from './FocusGridGame.module.css';

export type TileButtonProps = {
  id: number;
  label: string;
  done: boolean;
  markAsDone?: MouseEventHandler<HTMLButtonElement>;
  fontSize: string;
};

export default function TileButton({
  id,
  label,
  done,
  markAsDone,
  fontSize,
}: TileButtonProps) {
  return (
    <div className={styles.square}>
      <button
        key={id}
        id={id.toString()}
        onClick={markAsDone}
        className={clsx(
          styles.tileButton,
          done && styles.done,
          done && id === 8 && styles.infinity
        )}
        style={{ fontSize, lineHeight: fontSize }}
      >
        {label}
      </button>
    </div>
  );
}
