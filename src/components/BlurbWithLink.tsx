import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PodcastButton from './PodcastButton';
import HtmlDisplay from './HtmlDisplay';

type BlurbWithLinkProps = {
  blurb: string;
  link: string;
  fontSize?: 'small' | 'large';
};

export default function BlurbWithLink({
  blurb,
  link,
  fontSize,
}: BlurbWithLinkProps) {
  return (
    <Typography component="div" fontSize={fontSize}>
      <HtmlDisplay htmlString={blurb + '...'} />
      <PodcastButton href={link} endIcon={<ArrowRightAltIcon />} variant="text">
        pełny opis
      </PodcastButton>
    </Typography>
  );
}
