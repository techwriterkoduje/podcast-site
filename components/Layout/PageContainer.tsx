import Container, { ContainerProps } from '@mui/material/Container';
import Stack, { StackProps } from '@mui/material/Stack';

type PageContainerProps = {
  children: React.ReactNode;
  centered?: boolean;
  containerSx?: ContainerProps['sx'];
  stackSx?: StackProps['sx'];
  stackSpacing?: StackProps['spacing'];
};

export default function PageContainer({
  children,
  centered,
  containerSx,
  stackSx,
  stackSpacing,
}: PageContainerProps) {
  return (
    <Container
      sx={{
        padding: '3rem 1rem',
        minHeight: '100vh',
        ...containerSx,
      }}
    >
      <Stack
        spacing={stackSpacing ?? 6}
        sx={{
          alignItems: centered ? 'center' : 'flex-start',
          justifyContent: centered ? 'center' : 'flex-start',
          ...stackSx,
        }}
      >
        {children}
      </Stack>
    </Container>
  );
}
