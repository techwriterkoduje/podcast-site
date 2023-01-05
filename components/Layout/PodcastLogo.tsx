import Image from '../Image';

export default function PodcastLogo() {
  return (
    <Image
      src="/logo.png"
      style={{
        width: '450px',
        maxWidth: '100%',
        backgroundColor: 'black'
      }}
      alt="Logo podcastu Tech Writer koduje"
    />
  );
}
