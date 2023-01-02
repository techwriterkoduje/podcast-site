import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import Layout from '../../components/Layout/Layout';
import PageContainer from '../../components/Layout/PageContainer';
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../../lib/markdown';
import GuideNavigation, {
  GuidePageProps,
  GuidePagesProps,
} from '../../components/GuideNavigation/GuideNavigation';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

export const guideIds = [
  'teoria',
  'praktyka',
  'praktyka-przygotowanie',
  'praktyka-1',
  'praktyka-2',
  'praktyka-3',
  'praktyka-4',
  'praktyka-5',
  'praktyka-6',
  'praktyka-7',
  'praktyka-8',
  'praktyka-9',
  'praktyka-10',
  'gotowa-aplikacja',
  'praktyka-run',
  'co-dalej',
  'podziekowania',
];

export const getStaticProps: GetStaticProps = async () => {
  const guideContents = await Promise.all(
    guideIds.map(async (pageId: string): Promise<MarkdownProps> => {
      const loadedMarkdown = await getMarkdownContent(
        join(markdownDir, 'python', `${pageId}.md`)
      );

      return loadedMarkdown;
    })
  );

  const guidePages = guideContents.map(
    ({ title, contentHtml, id }): GuidePageProps => ({
      pageId: id,
      pageTitle: title,
      pageContent: contentHtml,
    })
  );

  return {
    props: {
      guidePages,
    },
  };
};

type PythonPagePaths = {
  params: {
    id: string;
  };
}[];

export async function getStaticPaths() {
  const paths: PythonPagePaths = guideIds.map((id) => ({
    params: {
      id: id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

function getIdFromQuery(query: ParsedUrlQuery): string {
  const id = query.id;
  if (typeof id === 'string') {
    return id;
  }

  if (Array.isArray(id)) {
    return id[0];
  }

  return '404';
}

const Python: NextPage<GuidePagesProps> = ({ guidePages }) => {
  const router = useRouter();
  const id = getIdFromQuery(router.query);

  return (
    <Layout
      title="Tech Writer koduje w Pythonie. Przewodnik szybkiego startu."
      description="Jako Tech Writer, możesz zrobić bardzo dużo przy użyciu odrobiny programowania. Nie musisz być ekspertem, wystarczy, że umiesz użyć Pythona jako narzędzia. A zacząć jest bardzo łatwo. Udostępniamy darmowy przewodnik szybkiego startu."
    >
      <PageContainer wide>
        <GuideNavigation
          selectedPageId={id}
          backLinkHref="/read"
          backLinkLabel="więcej artykułów"
          guidePages={guidePages}
        />
      </PageContainer>
    </Layout>
  );
};

export default Python;