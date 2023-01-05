import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

export default function LogoLink() {
  return (
    <IconButton
      LinkComponent={Link}
      href="/"
      sx={{ width: '24px', height: '24px' }}
    >
      <HomeIcon />
    </IconButton>
  );
}
