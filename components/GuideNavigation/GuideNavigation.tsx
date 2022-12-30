import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import BackLink from '../BackLink/BackLink';
import MarkdownDisplay from '../MarkdownDisplay';
import LeftNav from './LeftNav';
import PreviousNext from './PreviousNext';

export type GuidePageProps = {
  pageTitle: string;
  pageContent: string;
};

export type GuidePagesProps = { guidePages: GuidePageProps[] };

type DocumentNavigationProps = GuidePagesProps & {
  backLinkHref: string;
  backLinkLabel: string;
};

export default function GuideNavigation({
  backLinkHref,
  backLinkLabel,
  guidePages,
}: DocumentNavigationProps) {
  const [selectedPage, setSelectedPage] = useState(guidePages[0]);
  const titles = guidePages.map(({ pageTitle }) => pageTitle);

  useEffect(
    function () {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [selectedPage]
  );

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
    <Grid container spacing={2}>
      <Grid>
        <LeftNav
          items={titles}
          changeSelectedItem={handleMenuChange}
          selectedItem={selectedPage.pageTitle}
        />
      </Grid>
      <Grid>
        <Stack spacing="1rem">
          <BackLink href={backLinkHref}>{backLinkLabel}</BackLink>
          <Typography variant="h1">{selectedPage.pageTitle}</Typography>
          <MarkdownDisplay htmlString={selectedPage.pageContent} />
        </Stack>
        <PreviousNext
          currentItem={selectedPage.pageTitle}
          items={titles}
          changeSelectedItem={handleMenuChange}
        />
      </Grid>
    </Grid>
  );
}
