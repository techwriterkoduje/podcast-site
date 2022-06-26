import { GetStaticProps } from 'next/types';
import EpisodeEmbed from '../components/episodeEmbed';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SubscribeButtons from '../components/subscribeButtons';
import { getSortedPosts } from '../lib/blog';
import { AllPosts } from '../types';

export default function Home({ allPosts }: AllPosts) {
  return (
    <Layout
      title="Witaj na stronie podcastu"
      description="Strona startowa podcastu, na której znajdziesz linki do odcinków, artykułów, filmików i dużo więcej"
    >
      <Hero />
      <SubscribeButtons />
        {allPosts && <EpisodeEmbed episodeId={allPosts[0].episodeId} />}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getSortedPosts();
  return {
    props: {
      allPosts,
    },
  };
};
