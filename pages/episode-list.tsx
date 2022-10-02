import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import DateDisplay from "../components/DateDisplay/DateDisplay";
import Layout from "../components/Layout/Layout";
import { EpisodeMetadata, getAllEpisodeMetadata } from "../lib/episodes";

export const getStaticProps: GetStaticProps = async () => {
  const allEpisodeMetadata = getAllEpisodeMetadata();
  return {
    props: {
      allEpisodeMetadata,
    },
  };
};

type EpisodeListProps = {
  allEpisodeMetadata: EpisodeMetadata[];
};

const EpisodeList: NextPage<EpisodeListProps> = ({ allEpisodeMetadata }) => {
  return (
    <Layout
      title="Lista odcinków"
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <h1>Lista odcinków</h1>
      <ol>
        {allEpisodeMetadata.map((episode) => {
          const { id, date, title } = episode.params;
          return (
            <li key={id}>
              <Link href={`/episodes/${id}`}>
                <a>{title}</a>
              </Link>
              <div>
                <DateDisplay dateString={date} />
              </div>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default EpisodeList;
