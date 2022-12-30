import { LinkProps, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';

export default function NavLink(props: LinkProps<'a'>) {
  return <MuiLink component={NextLink} {...props} />;
}
