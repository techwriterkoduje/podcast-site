import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type TimeDisplayProps = {
  currentTime: number;
  duration: number;
};

function twoDigits(value: number): string {
  return value > 9 ? `${value}` : `0${value}`;
}

function formatDuration(seconds: number): string {
  const asDate = new Date(seconds * 1000);
  const hh = asDate.getHours() - 1;
  const mm = asDate.getMinutes();
  const ss = asDate.getSeconds();
  return `${hh > 0 ? `${twoDigits(hh)}:` : ``}${twoDigits(mm)}:${twoDigits(
    ss
  )}`;
}

export default function TimeDisplay({
  currentTime,
  duration,
}: TimeDisplayProps) {
  return (
    <Typography
      component="div"
      paddingRight="6px"
      color="white"
      sx={{ fontSize: '18px' }}
    >
      <Stack direction="row" spacing={1}>
        <Box sx={{ minWidth: 45 }}>{formatDuration(currentTime)}</Box>
        <Box>/</Box>
        <Box sx={{ minWidth: 45 }}>{formatDuration(duration)}</Box>
      </Stack>
    </Typography>
  );
}
