import { motion } from 'framer-motion';

export default function RomanticIllustration({ mood = 'hello' }) {
  const isProposal = mood === 'proposal';

  return (
    <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-zinc-950 via-purple-950 to-pink-950 p-4 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(216,180,254,0.34),transparent_31%),radial-gradient(circle_at_20%_82%,rgba(255,125,188,0.28),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.18),transparent_22%)]" />
      <div className="absolute inset-3 rounded-[1.35rem] border border-white/15" />

      <motion.div
        className="absolute left-5 top-5 text-3xl"
        animate={{ y: [0, -10, 0], rotate: [-8, 7, -8] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        💌
      </motion.div>
      <motion.div
        className="absolute right-6 top-7 text-2xl"
        animate={{ scale: [1, 1.28, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute right-8 bottom-[31%] text-3xl"
        animate={{ rotate: [10, -10, 10], y: [0, -7, 0] }}
        transition={{ duration: 2.9, repeat: Infinity, delay: 0.3 }}
      >
        {isProposal ? '💜' : '🎀'}
      </motion.div>
      <motion.div
        className="absolute bottom-[30%] left-7 text-3xl"
        animate={{ rotate: [-12, 12, -12], y: [0, -6, 0] }}
        transition={{ duration: 2.7, repeat: Infinity }}
      >
        🖤
      </motion.div>

      <div className="absolute inset-x-9 bottom-8 h-14 rounded-[50%] bg-black/55 blur-xl" />

      <motion.div
        className="absolute inset-x-8 bottom-9 top-12 flex items-center justify-center"
        animate={{ y: [0, -8, 0], rotate: isProposal ? [0, -1, 1, 0] : [0, 1.2, -1.2, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/assets/images/kuromi.gif"
          alt="Cute Kuromi animation"
          className="h-full max-h-[260px] w-full object-contain drop-shadow-[0_26px_34px_rgba(0,0,0,0.42)]"
        />
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-8 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-100 shadow-lg backdrop-blur-md"
        animate={{ opacity: [0.72, 1, 0.72], scale: [1, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {isProposal ? 'my melody who?' : 'kuromi mode'}
      </motion.div>
    </div>
  );
}
