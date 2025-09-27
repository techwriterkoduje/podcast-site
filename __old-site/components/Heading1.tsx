import { TypographyProps } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';

export default function Heading1({ children, ...otherProps }: TypographyProps) {
  return (
    <Typography className="exclude-from-index" variant="h1" {...otherProps}>
      {children}
    </Typography>
  );
}
