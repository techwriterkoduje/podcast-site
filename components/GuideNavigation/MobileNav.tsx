import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import NavLink from './NavLink';
import { NavControlProps } from './GuideNavigation';
import TocIcon from '@mui/icons-material/Toc';

export default function MobileNav({ items, currentItemId }: NavControlProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick} startIcon={<TocIcon />} variant="outlined">
        Spis treści
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {items.map((item) => (
          <NavLink href={item.pageId} key={item.pageId}>
            <MenuItem
              selected={currentItemId === item.pageId}
              onClick={handleClose}
            >
              {item.pageTitle}
            </MenuItem>
          </NavLink>
        ))}
      </Menu>
    </>
  );
}
