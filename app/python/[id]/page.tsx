import type { Metadata } from 'next';
import { join } from 'path';
import PageContainer from '../../../../components/Layout/PageContainer'; // Adjusted path
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../../../../lib/markdown'; // Adjusted path
import GuideNavigation, {
  GuidePageProps,
} from '../../../../components/GuideNavigation/GuideNavigation'; // Adjusted path
import { guideIds } from '../../../../docs/python/guideIds'; // Adjusted path
import { notFound } from 'next/navigation';

type PythonGuidePageProps = {
  params: { id: string };
};

// Replaces getStaticPaths
export async function generateStaticParams() {
  return guideIds.map((id) => ({
    id: id,
  }));
}

// Fetches all guide page data
async function getAllGuidePagesData(): Promise<GuidePageProps[]> {
  const guideContents = await Promise.all(
    guideIds.map(async (pageId: string): Promise<MarkdownProps> => {
      const loadedMarkdown = await getMarkdownContent(
        join(markdownDir, 'python', `${pageId}.md`)
      );
      return loadedMarkdown; // Assuming MarkdownProps has id, title, contentHtml
    })
  );

  const guidePages = guideContents.map(
    ({ id, data, contentHtml }): GuidePageProps => ({ // Assuming data.title and id exist
      pageId: id,
      pageTitle: data?.title || 'Untitled Guide', // Handle potential undefined title
      pageContent: contentHtml,
    })
  );
  return guidePages;
}

// Generates metadata for the page
export async function generateMetadata({ params }: PythonGuidePageProps): Promise<Metadata> {
  const allGuidePages = await getAllGuidePagesData(); // Fetch all to find the current one
  const currentPageData = allGuidePages.find(page => page.pageId === params.id);

  if (!currentPageData) {
    return {
      title: 'Python Guide Not Found',
      description: 'The requested Python guide page could not be found.',
    };
  }
  return {
    title: currentPageData.pageTitle,
    description: "Przewodnik szybkiego startu: Tech Writer koduje w Pythonie.", // Generic description for all python guides
  };
}

// Page component
export default async function PythonGuidePage({ params }: PythonGuidePageProps) {
  const { id } = params;
  const guidePages = await getAllGuidePagesData();
  const selectedPage = guidePages.find(page => page.pageId === id);

  if (!selectedPage) {
    notFound(); // Triggers the not-found UI
  }

  return (
    <PageContainer> {/* This PageContainer is fine as it's presentational */}
      <GuideNavigation
        selectedPageId={id}
        backLinkHref="/read" // Or a more relevant link like /projects or /
        backLinkLabel="więcej artykułów"
        guidePages={guidePages}
      />
    </PageContainer>
  );
}
