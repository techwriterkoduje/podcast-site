import Stack from '@mui/material/Stack';
import LogoLink from './LogoLink';
import Nav from './Nav';

export default function DesktopHeader() {
  return (
    <Stack
      direction="row"
      sx={{
        color: '#ed6e5f',
        borderBottom: '1px solid #ed6e5f',
        alignItems: 'center',
        height: '50px',
        padding: '0 1rem',
      }}
      spacing={2}
    >
      <LogoLink />
      <Nav hideIcons />
    </Stack>
  );
}
