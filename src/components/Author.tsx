import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

type AuthorProps = {
  children: ReactNode;
};

export default function Author({ children }: AuthorProps) {
  return (
    <Typography
      className="exclude-from-index"
      variant="h6"
      component="div"
      sx={{ fontSize: 15 }}
    >
      {children}
    </Typography>
  );
}
