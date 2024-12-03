import { ReactNode } from 'react';
import Layout from '../components/Layout/Layout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
