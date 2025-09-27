import IconButton from '@mui/material/IconButton';
import { ButtonProps } from '@mui/material/Button';
import Link from 'next/link';

type PodcastIconButtonProps = ButtonProps & {
  title: string;
};

export default function PodcastIconButton({
  children,
  title,
  ...otherProps
}: PodcastIconButtonProps) {
  return (
    <IconButton LinkComponent={Link} aria-label={title} {...otherProps}>
      {children}
    </IconButton>
  );
}
