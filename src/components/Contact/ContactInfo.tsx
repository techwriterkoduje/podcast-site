import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CopyToClipboardButton from '../CopyToClipboardButton';
import PodcastButton from '../PodcastButton';
import { CONTACT_EMAIL } from '@site/src/lib/constants';

const contactEmail = CONTACT_EMAIL || 'email missing';

export default function ContactInfo() {
  return (
    <Grid container>
      <Grid container alignItems="center" spacing={4} padding={4}>
        <Grid size={{ sm: 12, md: 6 }}>
          <Stack spacing={4}>
            <Typography>
              Chcesz nam coś przekazać? Masz pytanie lub sugestię? Może masz
              pomysł na odcinek podcastu albo chcesz być gościem naszej audycji?
              Po prostu napisz do nas.
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Stack spacing={4} sx={{ textAlign: 'center' }}>
            <PodcastButton
              startIcon={<EmailIcon />}
              href={`mailto:${contactEmail}`}
            >
              Napisz maila
            </PodcastButton>
            <CopyToClipboardButton
              textToCopy={contactEmail}
              variant="outlined"
              href=""
            >
              skopiuj adres do schowka
            </CopyToClipboardButton>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
