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
      <h2>Najnowszy odcinek podcastu</h2>
      <AnchorEmbed episodeId={episodeId} />

      <Button
        href="/episode-list"
        color="secondary"
        size="large"
        variant="outlined"
        sx={{ margin: "2rem 0" }}
      >
        Lista odcinków
      </Button>

      <h2>Znajdź nas</h2>
      <SubscribeButtons />
      <h2>Masz pomysł na odcinek? Chcesz być gościem?</h2>
      <Button variant="contained" href={`mailto:${email}`}>
        Napisz do nas: {email}
      </Button>
    </Layout>
  );
};

export default Home;
