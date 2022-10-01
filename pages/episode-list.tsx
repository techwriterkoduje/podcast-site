import { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const EpisodeList: NextPage = () => {
  return (
    <Layout
      title="Lista odcinków"
      description="Wybierz odcinek podcastu do posłuchania"
    >
      <h1>Lista odcinków</h1>
    </Layout>
  );
};

export default EpisodeList;
