import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { SiteLinkProps } from './SiteLinks';
import NavLink from './NavLink';
import styles from './LeftNav.module.css';

export default function LeftNav({ navLinks }: { navLinks: SiteLinkProps[] }) {
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
              <NavLink href={href} className={styles.link}>
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
