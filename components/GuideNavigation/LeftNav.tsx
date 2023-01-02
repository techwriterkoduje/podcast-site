import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { NavControlProps } from './GuideNavigation';

export default function LeftNav({ items, currentItemId }: NavControlProps) {
  return (
    <List>
      {items.map((item) => (
        <ListItemButton
          key={item.pageId}
          selected={item.pageId === currentItemId}
          href={item.pageId}
          sx={{ width: '200px' }}
        >
          {item.pageTitle}
        </ListItemButton>
      ))}
    </List>
  );
}
