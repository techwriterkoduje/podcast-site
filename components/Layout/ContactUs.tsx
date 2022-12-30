import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import NavLink from './NavLink';

export default function ContactUs() {
  return (
    <Stack
      sx={{
        width: '1200px',
        alignItems: 'center',
        gap: '2rem',
        margin: 'auto',
      }}
    >
      <Typography variant="h2">
        Masz pomysł na odcinek? Chcesz być naszym gościem?
      </Typography>
      <NavLink href="/contact">
        <Button variant="contained">Skontaktuj się z nami</Button>
      </NavLink>
    </Stack>
  );
}
