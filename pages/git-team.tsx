import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import BackLink from '../components/BackLink';
import Layout from '../components/Layout/Layout';
import PageContainer from '../components/Layout/PageContainer';
import HtmlDisplay from '../components/HtmlDisplay';
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../lib/markdown';
import Heading1 from '../components/Heading1';
import MarkdownArticle from '../components/MarkdownArticle';

export const getStaticProps: GetStaticProps = async () => {
  const markdownContent = await getMarkdownContent(
    join(markdownDir, 'articles', 'git-team.md')
  );
  return {
    props: {
      ...markdownContent,
    },
  };
};

const GitTeam: NextPage<MarkdownProps> = (props) => {
  return <MarkdownArticle {...props} />;
};

export default GitTeam;
