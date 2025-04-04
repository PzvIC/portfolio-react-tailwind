import { useEffect, useState } from 'react';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handler = (e) => setIsDesktop(e.matches);
    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDesktop;
}

export { useIsDesktop };
