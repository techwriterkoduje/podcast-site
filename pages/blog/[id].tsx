import { GetStaticPaths, GetStaticProps } from 'next/types';
import EpisodeEmbed from '../../components/episodeEmbed';
import Layout from '../../components/layout';
import LeftNav from '../../components/leftNav';
import { getAllPostIds, getPostData, getSortedPosts } from '../../lib/blog';
import { AllPosts, Post } from '../../types';

type BlogPostProps = {
  postData: Post;
  sortedPosts: Post[];
};

export default function BlogPost({ postData, sortedPosts }: BlogPostProps) {
  const { date, episodeId, id, title, contents } = postData;
  return (
    <Layout title={title} description={contents?.substring(0, 100)}>
      <div className="flex gap-10">
        <div className="w-[40ch]">
          <LeftNav items={sortedPosts} selectedItemId={id} />
        </div>
        <div className="w-[120ch] max-w-full">
          <h1 className="text-lg font-semibold mb-4">{title}</h1>
          <p>{date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: contents }}
            className="px-6 py-10 flex flex-col gap-3"
          />
          <EpisodeEmbed episodeId={episodeId} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const sortedPosts = getSortedPosts();
  const postData = await getPostData(params.id as string);

  return {
    props: {
      sortedPosts,
      postData,
    },
  };
};
