import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On every route change: jump to a #hash if present (e.g. /#gallery),
// otherwise scroll to the top of the new page.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // wait a tick so the new page has rendered before measuring position
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}
