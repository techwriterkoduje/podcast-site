import Stack from '@mui/material/Stack';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

export default function LatestEpisodes() {
  return (
    <Stack
      sx={{
        justifyContent: 'center',
        margin: 'auto',
        gap: '2rem',
        width: '1200px',
      }}
    >
      <Card sx={{ width: '100%', margin: 'auto' }}>
        <iframe
          src="https://anchor.fm/docdeveloper/embed/episodes/49-Tech-Writer-testuje-narzdzia-do-mierzenia-indeksu-czytelnoci-e1sgepc"
          width="100%"
          height="100%"
          scrolling="no"
        ></iframe>
      </Card>
      <Stack
        direction="row"
        sx={{ gap: '1rem', margin: 'auto', width: '100%' }}
      >
        <Card sx={{ width: '100%' }}>
          <iframe
            src="https://anchor.fm/docdeveloper/embed/episodes/48-Tech-Writer-uczy-si-frontendu--czyli-jak-wykorzysta-technologie-webowe-w-dokumentacji-e1qhrkc/a-a8sg6jg"
            height="100%"
            width="100%"
            scrolling="no"
          ></iframe>
        </Card>
        <Card sx={{ width: '100%' }}>
          <iframe
            src="https://anchor.fm/docdeveloper/embed/episodes/47-Tech-Writer-zgbia-tajniki-dostpnoci-cyfrowej--czyli-jak-tworzy-dokumentacj-dla-wszystkich-e1p1kbg/a-a8m9dlf"
            height="100%"
            width="100%"
            scrolling="no"
          ></iframe>
        </Card>
      </Stack>
      <Link href="/episode-list">
        <Button variant="contained" sx={{ width: '50%', margin: 'auto' }}>
          Wszystkie odcinki
        </Button>
      </Link>
    </Stack>
  );
}
