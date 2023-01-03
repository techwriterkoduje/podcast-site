import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button from '@mui/material/Button';
import Link from 'next/link';

export type ActionButtonLinkProps = {
  to: string;
  children: React.ReactElement | string;
};

export default function ActionButtonLink({
  to,
  children,
}: ActionButtonLinkProps) {
  if (to.startsWith('http')) {
    return (
      <Button
        href={to}
        target="_blank"
        variant="outlined"
        endIcon={<ArrowOutwardIcon />}
      >
        {children}
      </Button>
    );
  }

  return (
    <Link href={to}>
      <Button variant="contained">{children}</Button>
    </Link>
  );
}
