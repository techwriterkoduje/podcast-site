import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import MarkdownArticle from '../components/MarkdownArticle';
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../lib/markdown';

export const getStaticProps: GetStaticProps = async () => {
  const markdownContent = await getMarkdownContent(
    join(markdownDir, 'articles', 'dita-as-code.md')
  );
  return {
    props: {
      ...markdownContent,
    },
  };
};

const DitaAsCode: NextPage<MarkdownProps> = (props) => {
  return <MarkdownArticle {...props} />;
};

export default DitaAsCode;
