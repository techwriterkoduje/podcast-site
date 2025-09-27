import Stack from '@mui/material/Stack';
import BackLink from '../BackLink';
import Heading1 from '../Heading1';
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
      <Heading1>{selectedPage.pageTitle}</Heading1>
      <HtmlDisplay htmlString={selectedPage.pageContent} />

      <PreviousNext currentItemId={selectedPageId} items={guidePages} />
    </Stack>
  );
}
