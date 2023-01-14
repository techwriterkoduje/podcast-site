import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();

  return (
    <Typography
      component="div"
      paddingRight="6px"
      color={theme.palette.primary.main}
    >
      <Stack direction="row" spacing={1}>
        <div>{formatDuration(currentTime)}</div>
        <div>/</div>
        <div>{formatDuration(duration)}</div>
      </Stack>
    </Typography>
  );
}
