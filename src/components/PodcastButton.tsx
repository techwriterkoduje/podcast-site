import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button, { ButtonProps } from '@mui/material/Button';
import Link from '@docusaurus/Link';

export type PodcastButtonProps = {
  href: string;
  children: ButtonProps['children'];
  className?: string;
  startIcon?: ButtonProps['startIcon'];
  endIcon?: ButtonProps['endIcon'];
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
  style?: ButtonProps['style'];
  disabled?: ButtonProps['disabled'];
};

export default function PodcastButton(props: PodcastButtonProps) {
  const isExternal = props.href.startsWith('http');

  return (
    <Button
      variant={isExternal ? 'outlined' : 'contained'}
      target={isExternal ? '_blank' : undefined}
      {...props}
      LinkComponent={Link}
      endIcon={isExternal && <ArrowOutwardIcon />}
    >
      {props.children}
    </Button>
  );
}
