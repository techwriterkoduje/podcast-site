import Stack from '@mui/material/Stack';
import { navLinks } from './SiteLinks';
import NavLink from './NavLink';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoLink from './LogoLink';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav(toValue: boolean) {
    setIsOpen(toValue);
  }

  return (
    <Stack alignItems="center" direction="row">
      <LogoLink />
      <IconButton
        aria-label="Otwórz listę podstron"
        onClick={() => {
          toggleNav(true);
        }}
        size="large"
      >
        <MenuIcon htmlColor="white" />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => {
          toggleNav(false);
        }}
      >
        <List>
          {navLinks.map(({ href, label, icon }) => (
            <ListItem key={label}>
              <NavLink
                href={href}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.5rem 1rem',
                  fontSize: '1.5rem',
                  lineHeight: '1.5',
                }}
              >
                <div>{icon}</div>
                <div>{label}</div>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Stack>
  );
}
