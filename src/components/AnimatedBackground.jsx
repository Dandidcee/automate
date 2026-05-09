import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const cursorGlowRef = useRef(null);
  const pos = useRef({ x: -1000, y: -1000 });
  const current = useRef({ x: -1000, y: -1000 });
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onLeave = () => {
      pos.current = { x: -1000, y: -1000 };
    };

    // Smooth lerp animation loop
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.07);
      current.current.y = lerp(current.current.y, pos.current.y, 0.07);

      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform =
          `translate(${current.current.x - 300}px, ${current.current.y - 300}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-20] pointer-events-none w-full h-full overflow-hidden">
      {/* Matrix rain */}
      <div className="rain-container" />

      {/* Cursor glow blob — follows mouse with smooth lag */}
      <div
        ref={cursorGlowRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(78,222,163,0.07) 0%, rgba(76,215,246,0.04) 40%, transparent 70%)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
