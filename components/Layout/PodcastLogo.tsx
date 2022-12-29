import Image from 'next/image';
import Container from '@mui/material/Container';

export default function PodcastLogo() {
  return (
    <Image
      src="/logo.png"
      width="400px"
      height="400px"
      alt="Logo podcastu Tech Writer koduje"
    />
  );
}
