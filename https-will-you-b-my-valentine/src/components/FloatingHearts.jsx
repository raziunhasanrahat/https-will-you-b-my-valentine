import { motion } from 'framer-motion';
import { useMemo } from 'react';

const colors = ['#ff77b2', '#ff9ec7', '#f84f98', '#ffffff', '#ffd1e6'];

export default function FloatingHearts({ intense = false }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: intense ? 42 : 26 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        size: 12 + Math.random() * 22,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 10,
        color: colors[index % colors.length],
        drift: Math.random() * 90 - 45,
        opacity: 0.28 + Math.random() * 0.42,
      })),
    [intense],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="heart-shape absolute bottom-[-64px]"
          style={{
            left: `${heart.left}%`,
            width: heart.size,
            height: heart.size,
            color: heart.color,
            opacity: heart.opacity,
          }}
          animate={{
            y: ['0vh', '-118vh'],
            x: [0, heart.drift, -heart.drift * 0.4, heart.drift * 0.7],
            rotate: [-45, -18, -65, -38],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
