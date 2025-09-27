import { useCurrentRoute } from '../../hooks/router';
import PodcastButton from '../PodcastButton';
import { navLinks } from './SiteLinks';

type NavProps = {
  hideIcons?: boolean;
};

export default function Nav({ hideIcons }: NavProps) {
  const { currentRoute } = useCurrentRoute();

  return (
    <>
      {navLinks.map(({ href, label, icon }) => (
        <PodcastButton
          startIcon={!hideIcons && icon}
          key={href}
          href={href}
          variant="text"
          disabled={href === currentRoute}
        >
          {label}
        </PodcastButton>
      ))}
    </>
  );
}
