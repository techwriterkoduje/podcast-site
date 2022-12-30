import Button from '@mui/material/Button';
import Link from 'next/link';

export type ActionButtonLinkProps = {
  to: string;
  label: React.ReactElement | string;
};

export default function ActionButtonLink({ to, label }: ActionButtonLinkProps) {
  if (to.startsWith('http')) {
    return (
      <Button href={to} target="_blank">
        {label}
      </Button>
    );
  }

  return (
    <Link href={to}>
      <Button>{label}</Button>
    </Link>
  );
}
