import type { Metadata } from 'next';
import WatchPage from '../../components/WatchPage'; // Adjusted path

export const metadata: Metadata = {
  title: 'Filmiki',
  description: 'Wystąpienia, screencasty, webinary i inne przydatne filmiki dla Tech Writerów',
};

export default function Watch() {
  return <WatchPage />;
}
