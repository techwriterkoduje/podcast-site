import Button from '@mui/material/Button';
import Link from 'next/link';

export type ActionButtonLinkProps = {
  to: string;
  label: JSX.Element | JSX.Element[] | string;
};

export default function ActionButtonLink({ to, label }: ActionButtonLinkProps) {
  if (to.startsWith('http')) {
    return (
      <Button href={to} target="_blank" LinkComponent={Link}>
        {label}
      </Button>
    );
  }

  return <Button href={to}>{label}</Button>;
}
