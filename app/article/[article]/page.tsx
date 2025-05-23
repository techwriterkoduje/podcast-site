import { join } from 'path';
import type { Metadata } from 'next';
import MarkdownArticle from '../../../components/MarkdownArticle'; // Adjusted path
import { getMarkdownFiles } from '../../../lib/article'; // Adjusted path
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps, // Assuming this contains metadata fields or can be augmented
} from '../../../lib/markdown'; // Adjusted path

type ArticlePageProps = {
  params: { article: string };
};

// Replaces getStaticPaths
export async function generateStaticParams() {
  const markdownFiles = await getMarkdownFiles();
  return markdownFiles.map((filename) => ({
    article: filename,
  }));
}

// Fetches data for the page
async function getArticleData(articleSlug: string): Promise<MarkdownProps | null> {
  const markdownFilePath = join(markdownDir, 'articles', `${articleSlug}.md`);
  try {
    const markdownContent = await getMarkdownContent(markdownFilePath);
    return markdownContent;
  } catch (error) {
    // console.error(`Failed to get article data for ${articleSlug}:`, error); // Optional: log error
    return null; // Next.js will trigger notFound() if null is returned by the page component
  }
}

// Generates metadata for the page
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const articleData = await getArticleData(params.article);

  if (!articleData || !articleData.data) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
  // Assuming articleData.data contains title and a short description/excerpt
  return {
    title: articleData.data.title || 'Untitled Article',
    description: articleData.data.description || 'No description available.', // Adjust field as needed
  };
}

// Page component
export default async function ArticlePage({ params }: ArticlePageProps) {
  const articleData = await getArticleData(params.article);

  if (!articleData) {
    // If articleData is null (error or not found), trigger a 404
    // This can be done by calling notFound() from next/navigation
    // For simplicity here, we'll rely on the page rendering nothing or an error message
    // A more robust solution would involve calling notFound()
    return <p>Article not found.</p>; // Or call notFound()
  }

  return <MarkdownArticle {...articleData} />;
}
