import HomeIcon from '@mui/icons-material/Home';
import NavLink from './NavLink';

export default function LogoLink() {
  return (
    <NavLink href="/" sx={{ width: '24px', height: '24px' }}>
      <HomeIcon />
    </NavLink>
  );
}
