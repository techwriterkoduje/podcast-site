import Image from '../Image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function PodcastLogo() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const imageSize = isLargeScreen ? 350 : 250;
  return (
    <Image
      src={`logo-${isLargeScreen ? 350 : 250}.png`}
      width={imageSize}
      height={imageSize}
      style={{
        backgroundColor: 'black',
      }}
      alt="Logo podcastu Tech Writer koduje"
    />
  );
}
