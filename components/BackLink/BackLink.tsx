import NorthWestIcon from '@mui/icons-material/NorthWest';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';

type BackLinkProps = {
  href: string;
  children: React.ReactElement | string;
};

export default function BackLink({ href, children }: BackLinkProps) {
  return (
    <ActionButtonLink
      href={href}
      startIcon={<NorthWestIcon fontSize="small" />}
      variant="text"
    >
      {children}
    </ActionButtonLink>
  );
}
