import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type SizeSelectorProps = {
  currentSize: number;
  setSize: Dispatch<SetStateAction<number | undefined>>;
  disabled?: boolean;
};

export const availableSizes: number[] = [
  Math.pow(4, 2),
  Math.pow(5, 2),
  Math.pow(6, 2),
  Math.pow(7, 2),
  Math.pow(8, 2),
  Math.pow(9, 2),
  Math.pow(10, 2),
];

export default function SizeSelector({
  currentSize,
  setSize,
  disabled,
}: SizeSelectorProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setSize(Number(event.target.value));
  };

  return (
    <FormControl variant="outlined">
      <InputLabel id="grid-size-select-label">Rozmiar</InputLabel>
      <Select
        labelId="grid-size-select-label"
        id="grid-size-select"
        value={`${currentSize}`}
        label="Rozmiar"
        onChange={handleChange}
        style={{ width: '100px' }}
        disabled={disabled}
      >
        {availableSizes.map((size) => (
          <MenuItem key={size} value={size}>
            {Math.sqrt(size)}x{Math.sqrt(size)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
