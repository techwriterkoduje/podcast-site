import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

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
      {blurb}...
      <Link href={link}>
        <Button endIcon={<ArrowRightAltIcon />}>pełny opis</Button>
      </Link>
    </Typography>
  );
}
