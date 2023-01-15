import IconButton from '@mui/material/IconButton';
import { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

type PodcastIconButtonProps = ButtonProps & {
  title: string;
};

export default function PodcastIconButton(props: PodcastIconButtonProps) {
  return (
    <IconButton LinkComponent={Link} aria-label={props.title} {...props}>
      {props.children}
    </IconButton>
  );
}
