import PodcastCard from '../PodcastCard';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PodcastButton from '../PodcastButton';
import CopyToClipboardButton from '../CopyToClipboardButton';
import EmailIcon from '@mui/icons-material/Email';

const contactEmail = process.env.CONTACT_EMAIL || 'email missing';

export default function ContactInfo() {
  return (
    <Grid md={12}>
      <PodcastCard>
        <Grid container alignItems="center" spacing={4} padding={4}>
          <Grid md={6}>
            <Stack spacing={4}>
              <Typography>
                Chcesz nam coś przekazać? Masz pytanie lub sugestię? Może masz
                pomysł na odcinek podcastu albo chcesz być gościem naszej
                audycji? Po prostu napisz do nas.
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
  );
}
