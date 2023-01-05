import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ActionButtonLink from './ActionButtonLink/ActionButtonLink';

export type YoutubeEmbedProps = {
  title: string;
  description: React.ReactElement;
  embedId: string;
  links?: {
    label: string;
    href: string;
  }[];
};

export default function YoutubeEmbed({
  embedId,
  title,
  description,
  links,
}: YoutubeEmbedProps) {
  return (
    <Card sx={{ height: '100%' }} variant="outlined">
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${embedId}`}
        allowFullScreen
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      {links && (
        <CardActions>
          {links.map(({ href, label }, idx) => (
            <ActionButtonLink key={idx} to={href}>
              {label}
            </ActionButtonLink>
          ))}
        </CardActions>
      )}
    </Card>
  );
}
