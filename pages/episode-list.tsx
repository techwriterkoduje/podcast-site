import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { getAllEpisodeMetadata } from "../lib/episodes";

export async function getStaticProps() {
  const allEpisodeMetadata = getAllEpisodeMetadata();
  return {
    props: {
      allIds: allEpisodeMetadata.map((episode) => episode.params.id),
    },
  };
}

type EpisodeListProps = {
  allIds: string[];
};

const EpisodeList: NextPage<EpisodeListProps> = ({ allIds }) => {
  return (
    <Layout
      title="Lista odcinków"
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <h1>Lista odcinków</h1>
      <ol>
        {allIds.map((id) => (
          <li key={id}>
            <Link href={`/episodes/${id}`}>
              <a>{id}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default EpisodeList;
