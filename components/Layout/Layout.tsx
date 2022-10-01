import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.css";

const podcastTitle = process.env.podcastTitle;

type LayoutProps = {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
  isHome?: boolean;
};

export default function Layout({
  title,
  description,
  isHome,
  children,
}: LayoutProps) {
  const processedTitle: string = `${title}${
    !isHome ? " | " + podcastTitle : ""
  }`;
  return (
    <>
      <Head>
        <title>{processedTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header showLogo={!isHome} />

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div>
          Copyright © {new Date().getFullYear()} {podcastTitle}
        </div>
        <div>Logo stworzone przez rad89</div>
      </footer>
    </>
  );
}
