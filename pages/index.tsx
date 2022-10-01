import type { NextPage } from "next";
import Image from "next/image";
import AnchorEmbed from "../components/AnchorEmbed/AnchorEmbed";
import Layout from "../components/Layout/Layout";
import { getAllEpisodeIds, getEpisodeData } from "../lib/episodes";
import styles from "../styles/Home.module.css";

const podcastTitle = process.env.podcastTitle;

export async function getStaticProps() {
  const ids = getAllEpisodeIds();
  const latestId = ids[0].params.id;
  const episodeData = await getEpisodeData(latestId);
  return {
    props: {
      episodeId: episodeData.episodeId,
    },
  };
}

type HomePageProps = {
  episodeId: string;
};

const Home: NextPage<HomePageProps> = ({ episodeId }) => {
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
      <AnchorEmbed episodeId={episodeId} />
    </Layout>
  );
};

export default Home;
