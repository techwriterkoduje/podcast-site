import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const podcastTitle = process.env.PODCAST_TITLE;

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactElement | React.ReactElement[] | string;
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
    <>
      <Head>
        <title>{processedTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ paddingBottom: '1rem', ...mainStyle }}>{children}</main>
      <Footer />
    </>
  );
}
