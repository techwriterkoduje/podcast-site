import Layout from '@theme/Layout';
import type { JSX } from 'react';
import ReadPage from '../components/ReadPage';

export default function Read(): JSX.Element {
  return (
    <Layout title="Artykuły" description="Materiały do poczytania">
      <ReadPage />
    </Layout>
  );
}
