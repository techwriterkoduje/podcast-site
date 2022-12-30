import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import NavLink from './NavLink';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function LatestEpisodes() {
  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      <Grid
        container
        lg={12}
        alignItems="center"
        justifyContent="center"
        sx={{ gap: '1rem' }}
      >
        <Typography variant="h2">Posłuchaj ostatnich odcinków</Typography>
        <Card sx={{ width: '100%', margin: 'auto' }}>
          <iframe
            src="https://anchor.fm/docdeveloper/embed/episodes/49-Tech-Writer-testuje-narzdzia-do-mierzenia-indeksu-czytelnoci-e1sgepc"
            width="100%"
            height="100%"
            scrolling="no"
          ></iframe>
        </Card>
      </Grid>
      <Grid
        container
        spacing="1rem"
        lg={12}
        alignItems="center"
        justifyContent="center"
      >
        <Grid md={6}>
          <iframe
            src="https://anchor.fm/docdeveloper/embed/episodes/48-Tech-Writer-uczy-si-frontendu--czyli-jak-wykorzysta-technologie-webowe-w-dokumentacji-e1qhrkc/a-a8sg6jg"
            height="100%"
            width="100%"
            scrolling="no"
          ></iframe>
        </Grid>
        <Grid md={6}>
          <iframe
            src="https://anchor.fm/docdeveloper/embed/episodes/47-Tech-Writer-zgbia-tajniki-dostpnoci-cyfrowej--czyli-jak-tworzy-dokumentacj-dla-wszystkich-e1p1kbg/a-a8m9dlf"
            height="100%"
            width="100%"
            scrolling="no"
          ></iframe>
        </Grid>
      </Grid>
      <Grid container>
        <NavLink href="/episode-list">
          <Button variant="contained">Wszystkie odcinki</Button>
        </NavLink>
      </Grid>
    </Grid>
  );
}
