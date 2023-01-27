import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Hosts from './HomePage/Hosts';
import CopyToClipboardButton from './CopyToClipboardButton';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Unstable_Grid2';
import PodcastCard from './PodcastCard';
import Container from '@mui/material/Container';
import PodcastButton from './PodcastButton';

const contactEmail = process.env.CONTACT_EMAIL || 'email missing';

export default function ContactPage() {
  return (
    <Container sx={{ padding: '4rem 6px' }}>
      <Grid container spacing={2}>
        <Grid md={12} justifyContent="center">
          <Typography variant="h1">Kontakt</Typography>
        </Grid>
        <Grid md={7} sx={12}>
          <PodcastCard>
            <Stack spacing={4} padding={4}>
              <Typography variant="h2">O podcaście</Typography>
              <Typography>
                Od kilku lat zajmujemy się zawodowo dokumentacją do
                oprogramowania. Właściwie od samego początku, techniczna strona
                tworzenia dokumentacji była dla nas najbardziej interesująca.
                Dlatego uwielbiamy pisać skrypty, konfigurować narzędzia i
                automatyzować. Szukamy rozwiązań, które pozwolą Tech Writerom
                skupić się na tym co ważne.
              </Typography>
              <Typography>
                Na co dzień zastanawiamy się jak świat dokumentacji może czerpać
                korzyści z technologii, których używa się w świecie IT.
              </Typography>
            </Stack>
          </PodcastCard>
        </Grid>
        <Grid md={5} xs={12}>
          <Hosts />
        </Grid>
        <Grid md={12}>
          <PodcastCard>
            <Grid container alignItems="center" spacing={4} padding={4}>
              <Grid md={6}>
                <Stack spacing={4}>
                  <Typography variant="h2">Skontaktuj się z nami!</Typography>
                  <Typography>
                    Chcesz nam coś przekazać? Masz pytanie lub sugestię? Może
                    masz pomysł na odcinek podcastu albo chcesz być gościem
                    naszej audycji? Po prostu napisz do nas.
                  </Typography>
                </Stack>
              </Grid>
              <Grid md={6}>
                <Stack spacing={4}>
                  <PodcastButton
                    startIcon={<EmailIcon />}
                    href={`mailto:${contactEmail}`}
                  >
                    Napisz na {contactEmail}
                  </PodcastButton>
                  <CopyToClipboardButton
                    textToCopy={contactEmail}
                    variant="outlined"
                  >
                    skopiuj e-mail do schowka
                  </CopyToClipboardButton>
                </Stack>
              </Grid>
            </Grid>
          </PodcastCard>
        </Grid>
      </Grid>
    </Container>
  );
}
