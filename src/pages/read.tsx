import Layout from '@theme/Layout';
import type { JSX } from 'react';
import ReadPage from '../components/ReadPage';

export default function Read(): JSX.Element {
  return (
    <Layout
      title="Czytelnia"
      description="Artykuły, poradniki i inne teksty w służbie technical writingu"
    >
      <ReadPage />
    </Layout>
  );
}
