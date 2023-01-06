import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

export default function ActionButtonLink(props: ButtonProps) {
  const isExternal = props.href?.startsWith('http');
  return (
    <Button
      variant={isExternal ? 'outlined' : 'contained'}
      {...props}
      LinkComponent={Link}
      endIcon={isExternal && <ArrowOutwardIcon />}
    >
      {props.children}
    </Button>
  );
}
