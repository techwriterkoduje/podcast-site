import Card, { CardProps } from '@mui/material/Card';

export default function PodcastCard(props: CardProps) {
  return (
    <Card
      sx={{
        padding: '4px',
        width: '100%',
        height: '100%',
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
}
