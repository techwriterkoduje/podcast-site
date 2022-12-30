import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import { useState } from 'react';
import BackLink from '../components/BackLink/BackLink';
import Layout from '../components/Layout/Layout';
import PageContainer from '../components/Layout/PageContainer';
import LeftNav from '../components/GuideNavigation/LeftNav';
import MarkdownDisplay from '../components/MarkdownDisplay';
import PreviousNext from '../components/GuideNavigation/PreviousNext';
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../lib/markdown';
import GuideNavigation, {
  GuidePageProps,
  GuidePagesProps,
} from '../components/GuideNavigation/GuideNavigation';

const guideIds = ['teoria', 'praktyka', 'co-dalej', 'podziekowania'];

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
    ({ title, contentHtml }): GuidePageProps => ({
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

const Python: NextPage<GuidePagesProps> = ({ guidePages }) => {
  return (
    <Layout
      title="Tech Writer koduje w Pythonie. Przewodnik szybkiego startu."
      description="Jako Tech Writer, możesz zrobić bardzo dużo przy użyciu odrobiny programowania. Nie musisz być ekspertem, wystarczy, że umiesz użyć Pythona jako narzędzia. A zacząć jest bardzo łatwo. Udostępniamy darmowy przewodnik szybkiego startu."
    >
      <PageContainer wide>
        <GuideNavigation
          backLinkHref="/read"
          backLinkLabel="więcej artykułów"
          guidePages={guidePages}
        />
      </PageContainer>
    </Layout>
  );
};

export default Python;
