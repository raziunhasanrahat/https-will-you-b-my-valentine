import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CursorHearts() {
  const [hearts, setHearts] = useState([]);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const now = Date.now();
      if (now - lastSpawn.current < 85) return;
      lastSpawn.current = now;

      const id = `${now}-${Math.random()}`;
      setHearts((current) => [
        ...current.slice(-18),
        {
          id,
          x: event.clientX,
          y: event.clientY,
          drift: Math.random() * 36 - 18,
          size: 14 + Math.random() * 12,
        },
      ]);

      window.setTimeout(() => {
        setHearts((current) => current.filter((heart) => heart.id !== id));
      }, 850);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50" aria-hidden="true">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="absolute select-none"
            style={{ left: heart.x, top: heart.y, fontSize: heart.size }}
            initial={{ opacity: 0, scale: 0.3, x: -8, y: -8 }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.8], x: heart.drift, y: -42 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            💗
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
