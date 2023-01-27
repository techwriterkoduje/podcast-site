import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

type PageContainerProps = {
  children: React.ReactNode;
  centered?: boolean;
  wide?: boolean;
};

export default function PageContainer({
  children,
  centered,
  wide,
}: PageContainerProps) {
  return (
    <Container
      sx={{
        padding: '3rem 1rem',
        minHeight: '100vh',
      }}
    >
      <Stack
        spacing={6}
        sx={{
          alignItems: centered ? 'center' : 'flex-start',
          justifyContent: centered ? 'center' : 'flex-start',
        }}
      >
        {children}
      </Stack>
    </Container>
  );
}
