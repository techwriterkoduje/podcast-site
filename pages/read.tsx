import Layout from '../components/Layout/Layout';
import ReadPage from '../components/ReadPage';

export default function Read() {
  return (
    <Layout
      title="Czytelnia"
      description="Artykuły, poradniki i inne teksty w służbie technical writingu"
    >
      <ReadPage />
    </Layout>
  );
}
