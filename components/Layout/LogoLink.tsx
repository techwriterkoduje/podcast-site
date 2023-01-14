import HomeIcon from '@mui/icons-material/Home';
import { useCurrentRoute } from '../../hooks/router';
import PodcastIconButton from '../PodcastIconButton';

export default function LogoLink() {
  const { currentRoute } = useCurrentRoute();
  return (
    <PodcastIconButton
      href="/"
      sx={{ width: '24px', height: '24px' }}
      color="primary"
      disabled={currentRoute === '/'}
    >
      <HomeIcon />
    </PodcastIconButton>
  );
}
