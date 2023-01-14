import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from '../Image';
import PodcastCard from '../PodcastCard';

const subscribeLinks = [
  {
    href: 'https://anchor.fm/docdeveloper/',
    label: 'Anchor.fm',
    icon: 'anchor-fm-icon.png',
  },
  {
    href: 'https://open.spotify.com/show/2jhQ1Z1nAOY686RVok7O9I',
    label: 'Spotify',
    icon: 'spotify-icon.png',
  },
  {
    href: 'https://player.fm/series/tech-writer-koduje',
    label: 'Player.fm',
    icon: 'player-fm-icon.png',
  },
  {
    href: 'https://podcasts.apple.com/us/podcast/tech-writer-koduje/id1463669718?uo=4',
    label: 'Apple Podcasts',
    icon: 'apple-podcasts-icon.png',
  },
  {
    href: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy84YWZiYTljL3BvZGNhc3QvcnNz',
    label: 'Google Podcasts',
    icon: 'google-podcasts-icon.png',
  },
  {
    href: 'https://pca.st/H7El',
    label: 'Pocket Casts',
    icon: 'pocket-casts-icon.png',
  },
  {
    href: 'https://anchor.fm/s/8afba9c/podcast/rss',
    label: 'RSS',
    icon: 'rss-icon.png',
  },
];

export default function SubscribeButtons() {
  return (
    <PodcastCard
      sx={{
        background:
          'linear-gradient(rgba(237, 117, 103, 0.3), rgba(237, 117, 103, 0.3))',
        margin: '0 -200% 1rem',
        padding: '.5rem 0',
        width: '500%',
      }}
    >
      <Stack
        direction="row"
        sx={{
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.75rem',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        {subscribeLinks.map((l) => (
          <Button
            startIcon={<Image width={20} height={20} src={l.icon} alt="" />}
            href={l.href}
            target="_blank"
            key={l.label}
            variant="contained"
            size="small"
            color="info"
            sx={{ padding: '8px 15px', boxShadow: 0 }}
          >
            {l.label}
          </Button>
        ))}
      </Stack>
    </PodcastCard>
  );
}
