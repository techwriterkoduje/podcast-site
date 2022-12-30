import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { GetStaticProps, NextPage } from 'next';
import { join } from 'path';
import { useState } from 'react';
import BackLink from '../components/BackLink/BackLink';
import Layout from '../components/Layout/Layout';
import PageContainer from '../components/Layout/PageContainer';
import LeftNav from '../components/LeftNav/LeftNav';
import MarkdownDisplay from '../components/MarkdownDisplay';
import {
  getMarkdownContent,
  markdownDir,
  MarkdownProps,
} from '../lib/markdown';

const guideIds = ['teoria', 'praktyka', 'co-dalej', 'podziekowania'];

type GuidePageProps = {
  pageTitle: string;
  pageContent: string;
};

type PythonGuideProps = { guidePages: GuidePageProps[] };

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

const Python: NextPage<PythonGuideProps> = ({ guidePages }) => {
  const [selectedPage, setSelectedPage] = useState(guidePages[0]);

  function handleMenuChange(title: string) {
    setSelectedPage((currentlySelected) => {
      if (title === currentlySelected.pageTitle) {
        return currentlySelected;
      }

      const matchingPage = guidePages.find((page) => page.pageTitle === title);

      return matchingPage || currentlySelected;
    });
  }

  return (
    <Layout
      title="Tech Writer koduje w Pythonie. Przewodnik szybkiego startu."
      description="Jako Tech Writer, możesz zrobić bardzo dużo przy użyciu odrobiny programowania. Nie musisz być ekspertem, wystarczy, że umiesz użyć Pythona jako narzędzia. A zacząć jest bardzo łatwo. Udostępniamy darmowy przewodnik szybkiego startu."
    >
      <PageContainer wide>
        <Grid container spacing={2}>
          <Grid>
            <LeftNav
              items={guidePages.map(({ pageTitle }) => pageTitle)}
              changeSelectedItem={handleMenuChange}
            />
          </Grid>
          <Grid>
            <Stack spacing="1rem">
              <BackLink href="/read">więcej artykułów</BackLink>
              <Typography variant="h1">{selectedPage.pageTitle}</Typography>
              <MarkdownDisplay htmlString={selectedPage.pageContent} />
            </Stack>
          </Grid>
        </Grid>
      </PageContainer>
    </Layout>
  );
};

export default Python;
