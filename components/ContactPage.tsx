import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Hosts from './HomePage/Hosts';
import PageContainer from './Layout/PageContainer';
import CopyToClipboardButton from './CopyToClipboardButton';
import Link from '@mui/material/Link';

const contactEmail = process.env.CONTACT_EMAIL || 'email missing';

export default function ContactPage() {
  return (
    <PageContainer>
      <Typography variant="h1">Kontakt</Typography>
      <Typography>
        Od kilku lat zajmujemy się zawodowo dokumentacją do oprogramowania.
        Właściwie od samego początku, techniczna strona tworzenia dokumentacji
        była dla nas najbardziej interesująca. Dlatego uwielbiamy pisać skrypty,
        konfigurować narzędzia i automatyzować. Szukamy rozwiązań, które pozwolą
        Tech Writerom skupić się na tym co ważne.
      </Typography>
      <Typography>
        Na co dzień zastanawiamy się jak świat dokumentacji może czerpać
        korzyści z technologii, których używa się w świecie IT.
      </Typography>
      <Hosts />
      <Typography variant="h2">Skontaktuj się z nami!</Typography>
      <Typography>
        Chcesz nam coś przekazać? Masz pytanie lub sugestię? Może masz pomysł na
        odcinek podcastu albo chcesz być gościem naszej audycji? Po prostu
        napisz do nas.
      </Typography>
      <Typography variant="h2">E-mail</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>
        <CopyToClipboardButton
          title="skopiuj e-mail do schowka"
          textToCopy={contactEmail}
        />
      </Stack>
    </PageContainer>
  );
}
