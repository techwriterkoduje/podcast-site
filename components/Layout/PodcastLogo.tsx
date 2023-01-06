import Image from '../Image';

export default function PodcastLogo() {
  return (
    <Image
      src="logo.png"
      fill
      style={{
        maxWidth: '100%',
        aspectRatio: 1,
        backgroundColor: 'black',
      }}
      alt="Logo podcastu Tech Writer koduje"
    />
  );
}
