import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, isVisible] — triggers once when element enters viewport.
 * Add className `reveal` or `reveal-left` etc. and toggle based on isVisible.
 */
export function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}
