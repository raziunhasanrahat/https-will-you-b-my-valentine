import { motion } from 'framer-motion';

const successMessage = `Well...

Thank you, my babygirl.

Thank you for trusting me. I promise I'll protect that trust against the whole wide world and never take it for granted.

I love you, darling. Thank you for choosing me. :3`;

export default function SuccessPage() {
  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      <motion.div
        className="glass-panel rounded-[2rem] px-5 py-10 sm:px-12 sm:py-14"
        initial={{ scale: 0.94 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 90, damping: 14 }}
      >
        <motion.div
          className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full bg-white/60 text-6xl shadow-glow"
          animate={{ scale: [1, 1.08, 1], rotate: [0, -3, 3, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          ❤️
        </motion.div>

        <motion.p
          className="mx-auto max-w-xl whitespace-pre-line text-xl font-semibold leading-9 text-rose-700 sm:text-2xl sm:leading-10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {successMessage}
        </motion.p>
      </motion.div>
    </div>
  );
}
