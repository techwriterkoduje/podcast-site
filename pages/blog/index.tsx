import { useRouter } from 'next/router';
import { GetStaticProps } from 'next/types';
import { useEffect } from 'react';
import Layout from '../../components/layout';
import { getSortedPosts } from '../../lib/blog';
import { AllPosts } from '../../types';

export default function Blog({ allPosts }: AllPosts) {
  const router = useRouter();
  const latestPostId = allPosts[0]?.id;

  useEffect(
    function () {
      router.push(`/blog/${latestPostId}`);
    },
    [latestPostId, router]
  );

  return (
    <Layout
      title="Przekierowywanie..."
      description="To strona przekierowania, nie ma tu nic ciekawego"
    >
      Przekierowywanie...
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
