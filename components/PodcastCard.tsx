import Card from '@mui/material/Card';

type PodcastCardProps = {
  children: React.ReactElement | React.ReactElement[];
};

export default function PodcastCard({ children }: PodcastCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{ padding: '4px', width: '100%', height: '100%' }}
    >
      {children}
    </Card>
  );
}
