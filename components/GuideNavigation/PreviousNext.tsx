import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type PreviousNextProps = {
  items: string[];
  currentItem: string;
  changeSelectedItem: (item: string) => void;
};

export default function PreviousNext({
  items,
  currentItem,
  changeSelectedItem,
}: PreviousNextProps) {
  const currentIndex = items.findIndex((item) => item === currentItem);
  function getOffsetItem(offsetNumber: number) {
    if (currentIndex + offsetNumber >= 0) {
      return items[currentIndex + offsetNumber];
    }
  }
  const previous = getOffsetItem(-1);
  const next = getOffsetItem(1);

  function handleClick(item: string) {
    changeSelectedItem(item);
  }

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid>
        {previous && (
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => handleClick(previous)}
          >
            {previous}
          </Button>
        )}
      </Grid>
      <Grid>
        {next && (
          <Button
            endIcon={<ArrowForwardIcon />}
            onClick={() => handleClick(next)}
          >
            {next}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
