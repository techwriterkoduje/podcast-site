import Grid, { Grid2Props } from '@mui/material/Unstable_Grid2';

export default function HomeGridContainer({
  children,
  ...otherProps
}: Grid2Props) {
  return (
    <Grid
      container
      gap="1rem"
      alignItems="center"
      justifyContent="space-between"
      sx={{ paddingTop: '75px' }}
      {...otherProps}
    >
      {children}
    </Grid>
  );
}
