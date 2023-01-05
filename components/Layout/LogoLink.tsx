import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { useCurrentRoute } from '../../hooks/router';

export default function LogoLink() {
  const { currentRoute } = useCurrentRoute();
  return (
    <IconButton
      LinkComponent={Link}
      href="/"
      sx={{ width: '24px', height: '24px' }}
      color="primary"
      disabled={currentRoute === '/'}
    >
      <HomeIcon />
    </IconButton>
  );
}
