import Link from 'next/link';
import Button from './button';
import CenteredSection from './centeredSection';

const subscribeLinks = [
  {
    to: 'https://anchor.fm/docdeveloper/',
    label: 'Anchor.fm',
  },
  {
    to: 'https://open.spotify.com/show/2jhQ1Z1nAOY686RVok7O9I',
    label: 'Spotify',
  },
  {
    to: 'https://player.fm/series/tech-writer-koduje',
    label: 'Player.fm',
  },
  {
    to: 'https://podcasts.apple.com/us/podcast/tech-writer-koduje/id1463669718?uo=4',
    label: 'Apple Podcasts',
  },
  {
    to: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84YWZiYTljL3BvZGNhc3QvcnNz',
    label: 'Google Podcasts',
  },
  {
    to: 'https://overcast.fm/itunes1463669718/tech-writer-koduje',
    label: 'Overcast',
  },
  {
    to: 'https://pca.st/H7El',
    label: 'Pocket Casts',
  },
  {
    to: 'https://radiopublic.com/tech-writer-koduje-6nM7mE',
    label: 'RadioPublic',
  },
  {
    to: 'https://anchor.fm/s/8afba9c/podcast/rss',
    label: 'RSS',
  },
];

export default function SubscribeButtons() {
  return (
    <CenteredSection additionalStyles="flex flex-wrap justify-center gap-4 py-6">
      {subscribeLinks.map(({ to, label }) => (
        <Link href={to} key={label}>
          <Button>{label}</Button>
        </Link>
      ))}
    </CenteredSection>
  );
}
