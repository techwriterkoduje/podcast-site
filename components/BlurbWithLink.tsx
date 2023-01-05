import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ActionButtonLink from './ActionButtonLink/ActionButtonLink';

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
      <ActionButtonLink
        href={link}
        endIcon={<ArrowRightAltIcon />}
        variant="text"
      >
        pełny opis
      </ActionButtonLink>
    </Typography>
  );
}
