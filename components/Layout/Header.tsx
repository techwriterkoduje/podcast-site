import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import { navLinks, SiteLinkProps } from './SiteLinks';
import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function HorizontalNav() {
  return (
    <Stack
      direction="row"
      sx={{
        color: '#ed6e5f',
        borderBottom: '2px solid #ed6e5f',
        alignItems: 'center',
        height: '50px',
        padding: '0 1rem',
        gap: '1rem',
      }}
    >
      <NavLink href="/" sx={{ width: '24px', height: '24px' }}>
        <HomeIcon />
      </NavLink>
      {navLinks.map(({ href, label }) => (
        <NavLink href={href} key={label} sx={{ fontSize: '1.1rem' }}>
          {label}
        </NavLink>
      ))}
    </Stack>
  );
}

function LeftNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav(toValue: boolean) {
    setIsOpen(toValue);
  }

  return (
    <>
      <IconButton
        aria-label="Otwórz listę podstron"
        onClick={() => {
          toggleNav(true);
        }}
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
    </>
  );
}

export default function Header() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  if (isLargeScreen) {
    return <HorizontalNav />;
  }
  return <LeftNav />;
}
