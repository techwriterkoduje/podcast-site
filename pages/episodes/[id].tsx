import { NextPage } from "next";
import AnchorEmbed from "../../components/AnchorEmbed/AnchorEmbed";
import DateDisplay from "../../components/DateDisplay/DateDisplay";
import Layout from "../../components/Layout/Layout";
import { getAllEpisodeMetadata, getEpisodeData } from "../../lib/episodes";
import styles from "./Episode.module.css";

export async function getStaticProps({ params }: { params: any }) {
  const episodeData = await getEpisodeData(params.id);
  return {
    props: {
      episodeData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllEpisodeMetadata();
  return {
    paths,
    fallback: false,
  };
}

export type MarkdownProps = {
  id: string;
  title: string;
  episodeId: string;
  date: string;
  contentHtml: string;
};

type EpisodeProps = {
  episodeData: MarkdownProps;
};

const Episode: NextPage<EpisodeProps> = ({ episodeData }: EpisodeProps) => {
  const { episodeId, title, date, contentHtml } = episodeData;
  return (
    <Layout title={title} description={title}>
      <div className={styles.episodePage}>
        <h1>{title}</h1>
        <div>
          <DateDisplay dateString={date} />
        </div>
        <AnchorEmbed episodeId={episodeId} style={{ margin: "3rem auto" }} />
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className={styles.episodeContents}
        />
      </div>
    </Layout>
  );
};

export default Episode;
