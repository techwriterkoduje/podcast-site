import Layout from '@theme/Layout';
import FocusGridGame from '../components/FocusGridGame/FocusGridGame';
import Container from '@mui/material/Container';

export default function FocusGrid() {
  return (
    <Layout
      title="Focus Grid"
      description="Aplikacja do ćwiczenia koncentracji"
    >
      <Container sx={{ mt: 6 }}>
        <FocusGridGame />
      </Container>
    </Layout>
  );
}
