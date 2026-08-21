import { useEffect, useRef, useState } from 'react';


export default function useCountUp(target, { duration = 1600, start = 0 } = {}) {
  const [value, setValue] = useState(start);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setValue(target);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const prefersReduced = window.matchMedia?.(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReduced) {
          setValue(target);
          observer.disconnect();
          return;
        }

        const startTime = performance.now();

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - (1 - progress) ** 3; // ease-out-cubic
          setValue(Math.round(start + (target - start) * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, start]);

  return [value, ref];
}