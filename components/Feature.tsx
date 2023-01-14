import Typography from '@mui/material/Typography';
import PodcastButton from './PodcastButton';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PodcastCard from './PodcastCard';

export type FeatureProps = {
  title: string;
  description: React.ReactElement | string;
  imageUrl?: string;
  embedId?: string;
  actionLinks: {
    to: string;
    label: string;
  }[];
};

export default function Feature({
  title,
  description,
  actionLinks,
  imageUrl,
  embedId,
}: FeatureProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const contentPadding = isLargeScreen ? '1rem 3rem' : undefined;
  const cardMediaCommonStyles = {
    height: isLargeScreen ? '350px' : '160px',
  };

  return (
    <PodcastCard>
      {imageUrl && (
        <CardMedia
          image={`${process.env.REPO}${imageUrl}`}
          sx={{ ...cardMediaCommonStyles }}
        />
      )}
      {embedId && (
        <CardMedia
          component="iframe"
          src={`https://www.youtube.com/embed/${embedId}`}
          allowFullScreen
          sx={{ border: 'none', ...cardMediaCommonStyles }}
        />
      )}
      <CardContent sx={{ padding: contentPadding }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography component="div">{description}</Typography>
      </CardContent>
      <CardActions sx={{ padding: contentPadding }}>
        {actionLinks.map(({ to, label }, idx) => (
          <PodcastButton key={idx} href={to}>
            {label}
          </PodcastButton>
        ))}
      </CardActions>
    </PodcastCard>
  );
}
