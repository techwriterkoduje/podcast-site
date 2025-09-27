import Stack from '@mui/material/Stack';
import { MarkdownProps } from '../lib/markdown';
import Author from './Author';
import BackLink from './BackLink';
import Heading1 from './Heading1';
import HtmlDisplay from './HtmlDisplay';
import Layout from './Layout/Layout';
import PageContainer from './Layout/PageContainer';

export default function MarkdownArticle({
  title,
  description,
  contentHtml,
  author,
}: MarkdownProps) {
  return (
    <Layout title={title} description={description || ''}>
      <PageContainer>
        <BackLink href="/read">więcej artykułów</BackLink>
        <Stack gap={1}>
          <Heading1>{title}</Heading1>
          {author && <Author>{author}</Author>}
        </Stack>
        <HtmlDisplay htmlString={contentHtml} />
      </PageContainer>
    </Layout>
  );
}
