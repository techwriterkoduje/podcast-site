import { useCurrentRoute } from '../../hooks/router';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';
import { navLinks } from './SiteLinks';

type NavProps = {
  hideIcons?: boolean;
};

export default function Nav({ hideIcons }: NavProps) {
  const { currentRoute } = useCurrentRoute();

  return (
    <>
      {navLinks.map(({ href, label, icon }) => (
        <ActionButtonLink
          startIcon={!hideIcons && icon}
          key={href}
          href={href}
          variant="text"
          disabled={href === currentRoute}
        >
          {label}
        </ActionButtonLink>
      ))}
    </>
  );
}
