
import IconButton from '@mui/material/IconButton';
import { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

export default function PodcastIconButton(props: ButtonProps) {
  const isExternal = props.href?.startsWith('http');

  return (
    <IconButton LinkComponent={Link} color="primary" {...props}>
      {props.children}
    </IconButton>
  );
}
