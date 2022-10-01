import type { NextPage } from "next";
import Image from "next/image";
import AnchorEmbed from "../components/AnchorEmbed/AnchorEmbed";
import Layout from "../components/Layout/Layout";
import { getAllEpisodeMetadata, getEpisodeData } from "../lib/episodes";
import styles from "../styles/Home.module.css";

const podcastTitle = process.env.podcastTitle;

export async function getStaticProps() {
  const allEpisodeMetadata = getAllEpisodeMetadata();
  const latestId = allEpisodeMetadata[0].params.id;
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
      <section>
        <h2>Najnowszy odcinek</h2>
        <AnchorEmbed episodeId={episodeId} />
      </section>
    </Layout>
  );
};

export default Home;
