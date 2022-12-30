import Stack from '@mui/material/Stack';

type SimplePageProps = {
  children: React.ReactElement;
};

export default function SimplePage({ children }: SimplePageProps) {
  return <Stack sx={{ width: '45ch', maxWidth: '100%' }}>{children}</Stack>;
}
