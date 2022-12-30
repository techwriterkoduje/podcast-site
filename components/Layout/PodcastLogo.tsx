import Image from '../Image';

export default function PodcastLogo() {
  return (
    <Image
      src="/logo.png"
      style={{
        maxWidth: '450px',
        maxHeight: '450px',
      }}
      alt="Logo podcastu Tech Writer koduje"
    />
  );
}
