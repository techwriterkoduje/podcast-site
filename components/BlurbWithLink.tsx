import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

type BlurbWithLinkProps = {
  blurb: string;
  link: string;
};

export default function BlurbWithLink({ blurb, link }: BlurbWithLinkProps) {
  return (
    <Typography>
      {blurb}...
      <Typography
        sx={{ textDecoration: 'underline', color: 'pink' }}
        component="span"
      >
        <Link href={link}>
          <Button endIcon={<ArrowRightAltIcon />}>pełny opis</Button>
        </Link>
      </Typography>
    </Typography>
  );
}
