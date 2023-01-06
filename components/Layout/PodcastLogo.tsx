import Image from '../Image';

export default function PodcastLogo() {
  return (
    <Image
      src="logo.png"
      width={450}
      height={450}
      style={{
        maxWidth: '100%',
        aspectRatio: 1,
        backgroundColor: 'black',
      }}
      alt="Logo podcastu Tech Writer koduje"
    />
  );
}
