import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

type PageContainerProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <Container sx={{ padding: '3rem 1rem' }}>
      <Stack spacing={2}>{children}</Stack>
    </Container>
  );
}
