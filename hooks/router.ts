import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function useCurrentRoute() {
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

  return { currentRoute };
}
