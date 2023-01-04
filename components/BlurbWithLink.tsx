import Typography from '@mui/material/Typography';
import Link from 'next/link';

type BlurbWithLinkProps = {
  blurb: string;
  link: string;
};

export default function BlurbWithLink({ blurb, link }: BlurbWithLinkProps) {
  return (
    <Typography>
      {blurb}
      <Typography
        sx={{ textDecoration: 'underline', color: 'pink' }}
        component="span"
      >
        <Link href={link}> ...czytaj dalej</Link>
      </Typography>
    </Typography>
  );
}
