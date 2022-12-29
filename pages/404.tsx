import { NextPage } from 'next';
import Layout from '../components/Layout/Layout';

const Custom404: NextPage = () => {
  return (
    <Layout
      title="404: strona nie istnieje"
      description="Błąd, nie udało się znaleźć strony"
    >
      <section style={{ textAlign: 'center' }}>
        <h1>Mamy tu mały problem</h1>
        <div style={{ margin: '3rem auto' }}>
          <img src="/taken.svg" alt="" width={400} height={400} />
        </div>
        <p>404: nie udało się znaleźć strony</p>
      </section>
    </Layout>
  );
};

export default Custom404;
