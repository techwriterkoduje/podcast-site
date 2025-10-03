import Grid, { GridProps } from '@mui/material/Grid';

export default function HomeGridContainer({
  children,
  ...otherProps
}: GridProps) {
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
