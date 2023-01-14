import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ActionButtonLink from '../ActionButtonLink';
import HomeCard from './HomeCard';

export default function ContactUs() {
  return (
    <HomeCard>
      <Stack
        sx={{
          alignItems: 'center',
          padding: '2rem',
        }}
        spacing={2}
      >
        <Typography variant="h2">
          Masz pomysł na odcinek? Chcesz być naszym gościem?
        </Typography>
        <ActionButtonLink href="/contact">
          Skontaktuj się z nami
        </ActionButtonLink>
      </Stack>
    </HomeCard>
  );
}
