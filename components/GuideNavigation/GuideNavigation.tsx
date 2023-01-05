import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import BackLink from '../BackLink/BackLink';
import MarkdownDisplay from '../MarkdownDisplay';
import LeftNav from './LeftNav';
import MobileGuideNavigation from './MobileGuideNavigation';
import PreviousNext from './PreviousNext';

export type GuidePageProps = {
  pageId: string;
  pageTitle: string;
  pageContent: string;
};

export type GuidePages = { guidePages: GuidePageProps[] };

export type GuideNavigationProps = GuidePages & {
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
}: GuideNavigationProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const fallbackPage: GuidePageProps = {
    pageId: '404',
    pageTitle: '404: not found',
    pageContent: `<p>Cannot find page <code>${selectedPageId}</code></p>`,
  };
  const selectedPage =
    guidePages.find((page) => page.pageId === selectedPageId) || fallbackPage;

  if (!isLargeScreen) {
    return (
      <MobileGuideNavigation
        backLinkHref={backLinkHref}
        backLinkLabel={backLinkLabel}
        guidePages={guidePages}
        selectedPage={selectedPage}
        selectedPageId={selectedPageId}
      />
    );
  }

  return (
    <Grid container spacing={2} sx={{ height: '100vh' }}>
      <Grid sx={{ overflowY: 'scroll', height: '100%' }} sm={3}>
        <LeftNav items={guidePages} currentItemId={selectedPageId} />
      </Grid>
      <Grid sx={{ overflowY: 'scroll', height: '100%' }} sm={9}>
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
