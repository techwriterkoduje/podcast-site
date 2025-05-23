import type { Metadata } from 'next';
import ReadPage from '../../components/ReadPage'; // Adjusted path

export const metadata: Metadata = {
  title: 'Czytelnia',
  description: 'Artykuły, poradniki i inne teksty w służbie technical writingu',
};

export default function Read() {
  return <ReadPage />;
}
