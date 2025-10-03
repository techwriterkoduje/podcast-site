import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PODCAST_TITLE } from '@site/src/lib/constants';

export default function Footer() {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        borderTop: '1px solid #ed6e5f',
      }}
    >
      <Typography>
        Copyright © {new Date().getFullYear()} {PODCAST_TITLE}
      </Typography>
      <Typography>Logo stworzone przez rad89</Typography>
    </Stack>
  );
}
