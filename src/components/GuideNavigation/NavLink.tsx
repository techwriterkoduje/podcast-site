import MuiLink, { LinkProps } from '@mui/material/Link';
import NextLink from '@docusaurus/Link';

export default function NavLink(props: LinkProps<'a'>) {
  return <MuiLink component={NextLink} {...props} />;
}
