import { motion } from 'framer-motion';
import RomanticIllustration from './RomanticIllustration.jsx';

export default function LandingPage({ onContinue }) {
  return (
    <div className="mx-auto grid w-full max-w-4xl items-center gap-7 text-center">
      <motion.div
        className="glass-panel mx-auto w-full max-w-3xl rounded-[2rem] px-5 py-8 sm:px-10 sm:py-12"
        initial={{ rotate: -1 }}
        animate={{ rotate: 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 16 }}
      >
        <motion.p
          className="mb-3 font-script text-5xl leading-tight text-pink-500 sm:text-7xl"
          animate={{ scale: [1, 1.035, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Hi Fariha ❤️
        </motion.p>
        <p className="mx-auto max-w-xl text-base font-medium leading-7 text-rose-700 sm:text-xl">
          I&apos;ve been wanting to ask you something...
        </p>

        <div className="mx-auto mt-8 max-w-sm">
          <RomanticIllustration mood="hello" />
        </div>

        <motion.button
          type="button"
          onClick={onContinue}
          className="tap-target mt-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-400 px-9 py-4 text-base font-bold text-white shadow-button outline-none ring-pink-200 transition hover:brightness-110 focus-visible:ring-4"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          Continue
        </motion.button>
      </motion.div>
    </div>
  );
}
