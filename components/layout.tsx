import Head from 'next/head';
import Header from './header';

type LayoutProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <div className="h-screen">
      <Head>
        <title>{`${title} | Tech Writer koduje`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto flex flex-col shrink-0 items-center bg-white h-full">
        {children}
      </main>
    </div>
  );
}
