import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BackLink from '../BackLink';
import HtmlDisplay from '../HtmlDisplay';
import { GuideNavigationProps, GuidePageProps } from './GuideNavigation';
import MobileNav from './MobileNav';
import PreviousNext from './PreviousNext';

export default function MobileGuideNavigation({
  guidePages,
  selectedPageId,
  backLinkHref,
  backLinkLabel,
  selectedPage,
}: GuideNavigationProps & { selectedPage: GuidePageProps }) {
  return (
    <Stack spacing={2}>
      <MobileNav items={guidePages} currentItemId={selectedPageId} />

      <BackLink href={backLinkHref}>{backLinkLabel}</BackLink>
      <Typography variant="h1">{selectedPage.pageTitle}</Typography>
      <HtmlDisplay htmlString={selectedPage.pageContent} />

      <PreviousNext currentItemId={selectedPageId} items={guidePages} />
    </Stack>
  );
}
