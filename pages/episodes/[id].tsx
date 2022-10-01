import Layout from "../../components/Layout/Layout";
import { getAllEpisodeIds, getEpisodeData } from "../../lib/episodes";

export async function getStaticProps({ params }: { params: any }) {
  const episodeData = getEpisodeData(params.id);
  return {
    props: {
      episodeData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllEpisodeIds();
  return {
    paths,
    fallback: false,
  };
}

export type FrontMatterProps = {
  title: string;
  episodeId: string;
  date: string;
};

type EpisodeProps = {
  episodeData: FrontMatterProps;
};

export default function Episode({ episodeData }: EpisodeProps) {
  const { episodeId, title, date } = episodeData;
  const readableDate = Intl.DateTimeFormat("pl-PL", {
    dateStyle: "full",
  }).format(new Date(date));
  return (
    <Layout title={title} description={title}>
      <h1>{title}</h1>
      <div>{readableDate}</div>
    </Layout>
  );
}
