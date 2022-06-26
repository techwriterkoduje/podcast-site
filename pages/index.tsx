import Hero from '../components/hero';
import Layout from '../components/layout';
import SubscribeButtons from '../components/subscribeButtons';

export default function Home() {
  return (
    <Layout
      title="Witaj na stronie podcastu"
      description="Strona startowa podcastu, na której znajdziesz linki do odcinków, artykułów, filmików i dużo więcej"
    >
      <Hero />
      <SubscribeButtons />
    </Layout>
  );
}
