import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

type LeftNavProps = {
  items: string[];
  changeSelectedItem: (item: string) => void;
};

export default function LeftNav({ items, changeSelectedItem }: LeftNavProps) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  function handleClick(itemClicked: string) {
    changeSelectedItem(itemClicked);
    setSelectedItem(itemClicked);
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
