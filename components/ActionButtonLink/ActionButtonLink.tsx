import Button from '@mui/material/Button';
import Link from 'next/link';

export type ActionButtonLinkProps = {
  to: string;
  label: JSX.Element | JSX.Element[] | string;
};

export default function ActionButtonLink({ to, label }: ActionButtonLinkProps) {
  if (to.startsWith('http')) {
    return (
      <Link href={to}>
        <Button>{label}</Button>
      </Link>
    );
  }

  return <Button href={to}>{label}</Button>;
}
