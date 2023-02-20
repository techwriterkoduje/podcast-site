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

const DitaAsCode: NextPage<MarkdownProps> = ({
  contentHtml,
  title,
  description,
}) => {
  return (
    <Layout title={title} description={description || ''}>
      <PageContainer>
        <BackLink href="/read">więcej artykułów</BackLink>
        <Heading1>{title}</Heading1>
        <HtmlDisplay htmlString={contentHtml} />
      </PageContainer>
    </Layout>
  );
};

export default DitaAsCode;
