import type { NextPage } from "next";
import Image from "next/image";
import AnchorEmbed from "../components/AnchorEmbed/AnchorEmbed";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

const podcastTitle = process.env.podcastTitle;

const Home: NextPage = () => {
  const cellSize = 300;
  return (
    <Layout
      title={`Podcast ${podcastTitle}`}
      description="Podcast dla tech writerów, którzy kodują i nie tylko"
      isHome
    >
      <h1 className={styles.header} style={{ width: cellSize }}>
        <div>Podcast</div>
        <Image
          src="/logo.png"
          alt={podcastTitle}
          layout="responsive"
          width={cellSize}
          height={cellSize}
        />
      </h1>
      <AnchorEmbed episodeId="46-Zosta-hakerem-w-subie-pokoju--czyli-o-Hack-for-Peace-sw-kilka-e1noug3" />
    </Layout>
  );
};

export default Home;
