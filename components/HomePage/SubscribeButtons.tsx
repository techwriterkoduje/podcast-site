import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Image from '../Image';
import PodcastCard from '../PodcastCard';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

const subscribeLinks = [
  {
    href: 'https://creators.spotify.com/pod/show/docdeveloper',
    label: 'Spotify for Creators',
    icon: 'spotify-for-creators.webp',
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
    <Grid md={12}>
      <PodcastCard elevation={0}>
        <Stack
          direction="row"
          gap={3}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {subscribeLinks.map((l) => (
            <Button
              startIcon={<Image width={20} height={20} src={l.icon} alt="" />}
              href={l.href}
              target="_blank"
              key={l.label}
              variant="text"
              size="small"
              sx={{ padding: '8px 15px', boxShadow: 0, color: 'white' }}
            >
              {l.label}
            </Button>
          ))}
        </Stack>
      </PodcastCard>
      <Divider sx={{ borderWidth: 2, marginTop: 3 }} />
    </Grid>
  );
}
