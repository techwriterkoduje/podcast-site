import Stack from '@mui/material/Stack';
import { StackProps } from '@mui/system';

export default function SectionStack({ children, ...otherProps }: StackProps) {
  return (
    <Stack spacing={4} padding={4} alignItems="center" {...otherProps}>
      {children}
    </Stack>
  );
}
