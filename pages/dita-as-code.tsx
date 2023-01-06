import Typography from '@mui/material/Typography';
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
        <Typography variant="h1">{title}</Typography>
        <HtmlDisplay htmlString={contentHtml} />
      </PageContainer>
    </Layout>
  );
};

export default DitaAsCode;
