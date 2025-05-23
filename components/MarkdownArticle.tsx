import Stack from '@mui/material/Stack';
import { MarkdownProps } from '../lib/markdown';
import Author from './Author';
import BackLink from './BackLink';
import Heading1 from './Heading1';
import HtmlDisplay from './HtmlDisplay';
// import Layout from './Layout/Layout'; // Removed Layout
import PageContainer from './Layout/PageContainer';

export default function MarkdownArticle({
  title,
  // description, // No longer needed here, handled by metadata
  contentHtml,
  author,
}: MarkdownProps) { // Removed description from destructured props
  return (
    // <Layout title={title} description={description || ''}> // Removed Layout wrapper
    <PageContainer>
      <BackLink href="/read">więcej artykułów</BackLink>
      <Stack gap={1}>
        <Heading1>{title}</Heading1>
        {author && <Author>{author}</Author>}
      </Stack>
      <HtmlDisplay htmlString={contentHtml} />
    </PageContainer>
    // </Layout> // Removed Layout wrapper
  );
}
