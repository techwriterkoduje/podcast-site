import Button from '@mui/material/Button';

export type ActionButtonLinkProps = {
  to: string;
  label: JSX.Element | JSX.Element[] | string;
};

export default function ActionButtonLink({ to, label }: ActionButtonLinkProps) {
  if (to.startsWith('http')) {
    return (
      <Button href={to} target="_blank">
        {label}
      </Button>
    );
  }

  return <Button href={to}>{label}</Button>;
}
