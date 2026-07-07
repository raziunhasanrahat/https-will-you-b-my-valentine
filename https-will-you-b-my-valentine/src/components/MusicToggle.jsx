import { motion } from 'framer-motion';
import { useMusic } from '../hooks/useMusic.js';

export default function MusicToggle() {
  const { enabled, toggle } = useMusic();

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={enabled ? 'Pause music' : 'Play music'}
      className="fixed right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/60 text-xl shadow-lg backdrop-blur-md outline-none ring-pink-200 transition hover:bg-white/80 focus-visible:ring-4 sm:right-6 sm:top-6"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.94 }}
    >
      {enabled ? '♪' : '♫'}
    </motion.button>
  );
}
