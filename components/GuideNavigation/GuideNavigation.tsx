import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import BackLink from '../BackLink/BackLink';
import MarkdownDisplay from '../MarkdownDisplay';
import LeftNav from './LeftNav';
import PreviousNext from './PreviousNext';

export type GuidePageProps = {
  pageId: string;
  pageTitle: string;
  pageContent: string;
};

export type GuidePagesProps = { guidePages: GuidePageProps[] };

type DocumentNavigationProps = GuidePagesProps & {
  backLinkHref: string;
  backLinkLabel: string;
  selectedPageId: string;
};

export type NavControlProps = {
  items: GuidePageProps[];
  currentItemId: string;
};

export default function GuideNavigation({
  backLinkHref,
  backLinkLabel,
  guidePages,
  selectedPageId,
}: DocumentNavigationProps) {
  const fallbackPage: GuidePageProps = {
    pageId: '404',
    pageTitle: '404: not found',
    pageContent: `<p>Cannot find page <code>${selectedPageId}</code></p>`,
  };
  const selectedPage =
    guidePages.find((page) => page.pageId === selectedPageId) || fallbackPage;

  return (
    <Grid container spacing={2}>
      <Grid>
        <LeftNav items={guidePages} currentItemId={selectedPageId} />
      </Grid>
      <Grid>
        <Stack spacing="1rem">
          <BackLink href={backLinkHref}>{backLinkLabel}</BackLink>
          <Typography variant="h1">{selectedPage.pageTitle}</Typography>
          <MarkdownDisplay htmlString={selectedPage.pageContent} />
        </Stack>
        <PreviousNext currentItemId={selectedPageId} items={guidePages} />
      </Grid>
    </Grid>
  );
}
