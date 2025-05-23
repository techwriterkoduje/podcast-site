import type { Metadata } from 'next';
import FocusGridGame from '../../components/FocusGridGame/FocusGridGame'; // Adjusted path
import PageContainer from '../../components/Layout/PageContainer'; // Adjusted path

export const metadata: Metadata = {
  title: 'Focus Grid',
  description: 'Aplikacja do ćwiczenia koncentracji',
};

export default function FocusGridPage() {
  return (
    <PageContainer centered>
      <FocusGridGame />
    </PageContainer>
  );
}
