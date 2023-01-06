import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ActionButtonLink from '../ActionButtonLink';

export default function ContactUs() {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <Typography variant="h2">
        Masz pomysł na odcinek? Chcesz być naszym gościem?
      </Typography>
      <ActionButtonLink href="/contact">Skontaktuj się z nami</ActionButtonLink>
    </Stack>
  );
}
