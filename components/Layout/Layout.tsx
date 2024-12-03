import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NowPlaying from '../NowPlaying';
import Box from '@mui/material/Box';
import PrismLoader from '../PrismLoader';

const podcastTitle = process.env.PODCAST_TITLE;

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
  title?: string;
  description?: string;
  isHome?: boolean;
  mainStyle?: React.CSSProperties;
};

export default function Layout({
  title,
  description,
  mainStyle,
  isHome,
  children,
}: LayoutProps) {
  const processedTitle: string = `${title}${
    !isHome ? ' | ' + podcastTitle : ''
  }`;
  return (
    <Box sx={{ position: 'relative' }}>
      <NowPlaying />
      <Head>
        <title>{processedTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ paddingBottom: '1rem', ...mainStyle }}>{children}</main>
      <Footer />
      <PrismLoader />
    </Box>
  );
}
