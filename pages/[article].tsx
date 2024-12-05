import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import MarkdownArticle from '../components/MarkdownArticle';
import { getMarkdownFiles } from '../lib/article';
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../lib/markdown';

export const getStaticPaths: GetStaticPaths = async () => {
  const markdownFiles = await getMarkdownFiles();

  const paths = markdownFiles.map((filename) => ({
    params: { article: filename },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.article) {
    return { notFound: true };
  }

  const markdownFilePath = join(
    markdownDir,
    'articles',
    `${params.article}.md`
  );

  try {
    const markdownContent = await getMarkdownContent(markdownFilePath);
    return {
      props: {
        ...markdownContent,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};

// Page component
const MarkdownPage: NextPage<MarkdownProps> = (props) => {
  return <MarkdownArticle {...props} />;
};

export default MarkdownPage;
