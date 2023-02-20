import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import ContactInfo from './ContactInfo';
import Heading1 from '../Heading1';

export default function ContactPage() {
  return (
    <Container sx={{ padding: '4rem 6px' }}>
      <Grid container spacing={2}>
        <Grid md={12} justifyContent="center">
          <Heading1>Kontakt</Heading1>
        </Grid>
        <ContactInfo />
      </Grid>
    </Container>
  );
}
