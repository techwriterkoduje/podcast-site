import MuiLink, { LinkProps } from '@mui/material/Link';
import NextLink from 'next/link';

export default function NavLink(props: LinkProps<'a'>) {
  return <MuiLink component={NextLink} {...props} />;
}
