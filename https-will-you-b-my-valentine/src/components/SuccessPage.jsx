import { motion } from 'framer-motion';

const successMessage = `Well...

I guess I don't have to ask if you're single anymore. 😌

Thank you for taking this risk with me.

Looks like I get to call you my girlfriend now.

I love you darling <3`;

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

        <motion.p
          className="mt-8 whitespace-pre-line font-script text-4xl leading-relaxed text-pink-500"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75 }}
        >
          {`Love,
Rakin ❤️`}
        </motion.p>
      </motion.div>
    </div>
  );
}
