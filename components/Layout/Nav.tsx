import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ActionButtonLink from '../ActionButtonLink/ActionButtonLink';
import { navLinks } from './SiteLinks';

type NavProps = {
  hideIcons?: boolean;
};

export default function Nav({ hideIcons }: NavProps) {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(
    function () {
      if (router) {
        setCurrentRoute(router.asPath);
      }
    },
    [router]
  );
  return (
    <>
      {navLinks.map(({ href, label, icon }) => (
        <ActionButtonLink
          startIcon={!hideIcons && icon}
          sx={{ color: 'white' }}
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
