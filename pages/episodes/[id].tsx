import { NextPage } from "next";
import AnchorEmbed from "../../components/AnchorEmbed/AnchorEmbed";
import BackLink from "../../components/BackLink/BackLink";
import DateDisplay from "../../components/DateDisplay/DateDisplay";
import Layout from "../../components/Layout/Layout";
import { getAllEpisodeMetadata, getEpisodeData } from "../../lib/episodes";
import { MarkdownProps } from "../../lib/markdown";
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

type EpisodeProps = {
  episodeData: MarkdownProps;
};

const Episode: NextPage<EpisodeProps> = ({ episodeData }: EpisodeProps) => {
  const { episodeId, title, date, contentHtml } = episodeData;
  return (
    <Layout title={title} description={title}>
      <section className={styles.episodePage}>
        <BackLink href="/episode-list">lista odcinków</BackLink>
        <h1 className={styles.episodeTitle}>{title}</h1>
        <div>{date && <DateDisplay dateString={date} />}</div>
        <div style={{ margin: "3rem auto" }}>
          <AnchorEmbed episodeId={episodeId} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className={styles.episodeContents}
        />
      </section>
    </Layout>
  );
};

export default Episode;
