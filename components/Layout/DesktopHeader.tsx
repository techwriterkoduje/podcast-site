import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LogoLink from './LogoLink';
import ModeSwitcher from './ModeSwitcher';
import Nav from './Nav';

export default function DesktopHeader() {
  return (
    <Stack
      direction="row"
      sx={{
        color: '#ed6e5f',
        borderBottom: '1px solid #ed6e5f',
        alignItems: 'center',
        padding: '4px 1rem',
      }}
      spacing={2}
    >
      <LogoLink />
      <Nav hideIcons />
      <ModeSwitcher />
    </Stack>
  );
}
