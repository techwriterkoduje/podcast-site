import Button from '@mui/material/Button';
import React from 'react';

type ResetProps = {
  handleReset(): void;
  disabled: boolean;
};

export default function Reset({ handleReset, disabled }: ResetProps) {
  return (
    <Button fullWidth onClick={handleReset} disabled={disabled}>
      Resetuj grę
    </Button>
  );
}
