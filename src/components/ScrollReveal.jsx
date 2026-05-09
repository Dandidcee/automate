import { useRef, useState, useEffect } from 'react';

const transforms = {
  up:    'translateY(40px)',
  down:  'translateY(-40px)',
  left:  'translateX(-40px)',
  right: 'translateX(40px)',
  scale: 'scale(0.85)',
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  threshold = 0.1,
  as: Tag = 'div',
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction] || transforms.up,
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  );
}
