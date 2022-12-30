import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

type LeftNavProps = {
  items: string[];
  selectedItem: string;
  changeSelectedItem: (item: string) => void;
};

export default function LeftNav({
  items,
  selectedItem,
  changeSelectedItem,
}: LeftNavProps) {
  function handleClick(itemClicked: string) {
    changeSelectedItem(itemClicked);
  }
  return (
    <List>
      {items.map((item) => (
        <ListItemButton
          key={item}
          selected={item === selectedItem}
          onClick={() => handleClick(item)}
          sx={{ width: '200px' }}
        >
          {item}
        </ListItemButton>
      ))}
    </List>
  );
}
