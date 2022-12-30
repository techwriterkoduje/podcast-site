import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const podcastTitle = process.env.podcastTitle;

type LayoutProps = {
  title: string;
  description: string;
  children: React.ReactElement;
  isHome?: boolean;
  mainStyle?: React.CSSProperties;
};

export default function Layout({
  title,
  description,
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
        <link rel="icon" href={`${process.env.repo}favicon.ico`} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
