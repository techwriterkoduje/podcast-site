import { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const Custom404: NextPage = () => {
  return (
    <Layout
      title="404: strona nie istnieje"
      description="Błąd, nie udało się znaleźć strony"
    >
      <h1>Mamy tu mały problem</h1>
      <p>404: nie udało się znaleźć strony</p>
    </Layout>
  );
};

export default Custom404;
