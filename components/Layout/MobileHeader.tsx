import Stack from '@mui/material/Stack';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import LogoLink from './LogoLink';
import Nav from './Nav';
import PodcastIconButton from '../PodcastIconButton';
import { useTheme } from '@mui/material/styles';
import SearchBox from '../Search/SearchBox';

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  function toggleNav(toValue: boolean) {
    setIsOpen(toValue);
  }

  return (
    <Stack
      alignItems="center"
      direction="row"
      borderBottom={`1px solid ${theme.palette.primary.main}`}
      padding={1}
    >
      <LogoLink />
      <PodcastIconButton
        title="Otwórz listę podstron"
        onClick={() => {
          toggleNav(true);
        }}
        size="large"
      >
        <MenuIcon />
      </PodcastIconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => {
          toggleNav(false);
        }}
      >
        <Stack spacing={2} sx={{ padding: '1rem' }}>
          <SearchBox />
          <Nav />
        </Stack>
      </Drawer>
    </Stack>
  );
}
