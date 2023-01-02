import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const podcastTitle = process.env.podcastTitle;

export default function Footer() {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        borderTop: '2px solid #ed6e5f',
      }}
    >
      <Typography>
        Copyright © {new Date().getFullYear()} {podcastTitle}
      </Typography>
      <Typography>Logo stworzone przez rad89</Typography>
    </Stack>
  );
}
