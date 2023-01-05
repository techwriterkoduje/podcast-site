import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavControlProps } from './GuideNavigation';

export default function PreviousNext({
  items,
  currentItemId,
}: NavControlProps) {
  const currentIndex = items.findIndex((item) => item.pageId === currentItemId);
  function getOffsetItem(offsetNumber: number) {
    if (currentIndex + offsetNumber >= 0) {
      return items[currentIndex + offsetNumber];
    }
  }
  const previous = getOffsetItem(-1);
  const next = getOffsetItem(1);

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Grid>
        {previous && (
          <Button
            startIcon={<ArrowBackIcon />}
            href={previous.pageId}
            variant="outlined"
          >
            {previous.pageTitle}
          </Button>
        )}
      </Grid>
      <Grid>
        {next && (
          <Button
            endIcon={<ArrowForwardIcon />}
            href={next.pageId}
            variant="outlined"
          >
            {next.pageTitle}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
