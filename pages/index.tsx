import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import AnchorEmbed from "../components/AnchorEmbed/AnchorEmbed";
import Layout from "../components/Layout/Layout";
import SubscribeButtons from "../components/SubscribeButtons/SubscribeButtons";
import { getAllEpisodeMetadata, getEpisodeData } from "../lib/episodes";
import styles from "../styles/Home.module.css";

const podcastTitle = process.env.podcastTitle;
const email = process.env.contactEmail;

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
          style={{ backgroundColor: "black" }}
        />
      </h1>
      <h2>Najnowszy odcinek</h2>
      <AnchorEmbed episodeId={episodeId} />
      <Link href="/episode-list">
        <a
          style={{
            display: "block",
            textAlign: "center",
            margin: "1rem auto",
          }}
        >
          Lista odcinków
        </a>
      </Link>
      <h2>Znajdż nas</h2>
      <SubscribeButtons />
      <h2>Masz pomysł na odcinek? Chcesz być gościem?</h2>
      <Button variant="contained" href={`mailto:${email}`}>
        Napisz do nas: {email}
      </Button>
    </Layout>
  );
};

export default Home;
