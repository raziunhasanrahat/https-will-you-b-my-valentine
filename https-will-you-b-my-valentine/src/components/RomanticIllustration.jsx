import { motion } from 'framer-motion';

export default function RomanticIllustration({ mood = 'hello' }) {
  const isProposal = mood === 'proposal';

  return (
    <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-zinc-950 via-stone-900 to-pink-950 p-4 shadow-glow">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,214,90,0.28),transparent_30%),radial-gradient(circle_at_18%_82%,rgba(255,95,162,0.24),transparent_28%)]" />

      <motion.div
        className="absolute left-1/2 top-7 h-20 w-20 -translate-x-1/2 rounded-full bg-amber-200/90 shadow-[0_0_48px_rgba(255,216,96,0.65)]"
        animate={{ opacity: [0.82, 1, 0.82], scale: [1, 1.04, 1] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute left-1/2 top-1/2 h-5 w-12 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-zinc-950" />
        <div className="absolute left-[18px] top-[30px] h-5 w-5 rotate-45 bg-zinc-950" />
        <div className="absolute right-[18px] top-[30px] h-5 w-5 rotate-45 bg-zinc-950" />
        <div className="absolute left-[35px] top-[22px] h-4 w-3 -rotate-12 bg-zinc-950" />
        <div className="absolute right-[35px] top-[22px] h-4 w-3 rotate-12 bg-zinc-950" />
      </motion.div>

      <motion.div
        className="absolute left-6 top-7 text-3xl"
        animate={{ y: [0, -10, 0], rotate: [-8, 7, -8] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        💌
      </motion.div>
      <motion.div
        className="absolute right-6 top-8 text-2xl"
        animate={{ scale: [1, 1.28, 1], rotate: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✨
      </motion.div>

      <div className="absolute inset-x-8 bottom-7 h-12 rounded-[50%] bg-black/50 blur-md" />

      <motion.div
        className="absolute left-1/2 top-[57%] h-40 w-44 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute left-1/2 top-8 h-32 w-36 -translate-x-1/2 rounded-t-[42%] rounded-b-[46%] bg-zinc-950 shadow-2xl" />
        <div className="absolute left-[28px] top-1 h-16 w-12 rotate-[-16deg] rounded-tl-full bg-zinc-950 [clip-path:polygon(48%_0,100%_100%,0_100%)]" />
        <div className="absolute right-[28px] top-1 h-16 w-12 rotate-[16deg] rounded-tr-full bg-zinc-950 [clip-path:polygon(52%_0,100%_100%,0_100%)]" />
        <div className="absolute left-1/2 top-[58px] h-8 w-24 -translate-x-1/2 rounded-b-[50%] bg-rose-100" />
        <div className="absolute left-[48px] top-[58px] h-2 w-7 -rotate-6 rounded-full bg-amber-200 shadow-[0_0_18px_rgba(255,216,96,0.9)]" />
        <div className="absolute right-[48px] top-[58px] h-2 w-7 rotate-6 rounded-full bg-amber-200 shadow-[0_0_18px_rgba(255,216,96,0.9)]" />
        <motion.div
          className="absolute left-1/2 top-[94px] h-5 w-12 -translate-x-1/2 rounded-b-full border-b-4 border-rose-900"
          animate={{ scaleX: isProposal ? [1, 1.18, 1] : [1, 1.08, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <div className="absolute left-0 top-[98px] h-16 w-24 rounded-bl-full bg-zinc-950 [clip-path:polygon(0_8%,100%_0,72%_100%,18%_76%)]" />
        <div className="absolute right-0 top-[98px] h-16 w-24 rounded-br-full bg-zinc-950 [clip-path:polygon(0_0,100%_8%,82%_76%,28%_100%)]" />
        <div className="absolute left-1/2 top-[113px] h-10 w-20 -translate-x-1/2 rounded-t-2xl bg-zinc-900" />
        <div className="absolute left-1/2 top-[126px] h-6 w-10 -translate-x-1/2 rounded bg-amber-300 shadow-[0_0_22px_rgba(255,216,96,0.55)]">
          <span className="absolute left-1/2 top-1/2 h-2 w-6 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-zinc-950" />
        </div>
        <motion.div
          className="absolute -right-8 -top-4 text-5xl"
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {isProposal ? '💖' : '💕'}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-[31%] left-[13%] text-3xl"
        animate={{ rotate: [-12, 12, -12], y: [0, -6, 0] }}
        transition={{ duration: 2.7, repeat: Infinity }}
      >
        🌹
      </motion.div>

      <motion.div
        className="absolute bottom-[27%] right-[13%] text-3xl"
        animate={{ rotate: [10, -10, 10], y: [0, -7, 0] }}
        transition={{ duration: 2.9, repeat: Infinity, delay: 0.3 }}
      >
        {isProposal ? '🦇' : '🎀'}
      </motion.div>
    </div>
  );
}
