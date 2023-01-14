import Card from '@mui/material/Card';

type HomeCardProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function HomeCard({ children }: HomeCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{ padding: '4px', width: '100%', height: '100%' }}
    >
      {children}
    </Card>
  );
}
