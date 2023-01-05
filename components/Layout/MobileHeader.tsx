import Stack from '@mui/material/Stack';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import LogoLink from './LogoLink';
import Nav from './Nav';
import ModeSwitcher from './ModeSwitcher';

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
        color="primary"
      >
        <MenuIcon />
      </IconButton>
      <ModeSwitcher />
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => {
          toggleNav(false);
        }}
      >
        <Stack spacing={2} sx={{ padding: '1rem' }}>
          <Nav />
        </Stack>
      </Drawer>
    </Stack>
  );
}
