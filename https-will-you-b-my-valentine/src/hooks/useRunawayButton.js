import { useCallback, useEffect, useRef, useState } from 'react';

const margin = 18;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const getInitialPosition = () => {
  if (typeof window === 'undefined') return { x: 240, y: 420 };

  return {
    x: clamp(window.innerWidth * 0.58, margin, window.innerWidth - 132 - margin),
    y: clamp(window.innerHeight * 0.68, margin, window.innerHeight - 58 - margin),
  };
};

export function useRunawayButton() {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState(getInitialPosition);

  useEffect(() => {
    const keepVisible = () => {
      const width = buttonRef.current?.offsetWidth || 132;
      const height = buttonRef.current?.offsetHeight || 58;

      setPosition((current) => ({
        x: clamp(current.x, margin, window.innerWidth - width - margin),
        y: clamp(current.y, margin, window.innerHeight - height - margin),
      }));
    };

    keepVisible();
    window.addEventListener('resize', keepVisible);
    return () => window.removeEventListener('resize', keepVisible);
  }, []);

  const choosePosition = useCallback((event) => {
    const width = buttonRef.current?.offsetWidth || 132;
    const height = buttonRef.current?.offsetHeight || 58;
    const maxX = window.innerWidth - width - margin;
    const maxY = window.innerHeight - height - margin;
    const pointerX = event?.clientX ?? window.innerWidth / 2;
    const pointerY = event?.clientY ?? window.innerHeight / 2;

    for (let attempt = 0; attempt < 20; attempt += 1) {
      const x = margin + Math.random() * Math.max(1, maxX - margin);
      const y = margin + Math.random() * Math.max(1, maxY - margin);
      const centerX = x + width / 2;
      const centerY = y + height / 2;

      if (Math.hypot(centerX - pointerX, centerY - pointerY) > 150) {
        return { x, y };
      }
    }

    return {
      x: clamp(window.innerWidth - pointerX, margin, maxX),
      y: clamp(window.innerHeight - pointerY, margin, maxY),
    };
  }, []);

  const runAway = useCallback(
    (event) => {
      if (event?.pointerType === 'touch' && event.type !== 'click') return;
      setPosition(choosePosition(event));
    },
    [choosePosition],
  );

  return { buttonRef, position, runAway };
}
