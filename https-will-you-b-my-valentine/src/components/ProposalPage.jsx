import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import RomanticIllustration from './RomanticIllustration.jsx';
import { useRunawayButton } from '../hooks/useRunawayButton.js';

const teasingMessages = [
  'Are you sureee? 🥺',
  'Please? ❤️',
  "I'll keep trying 😭",
  'You know you want to 💕',
];

export default function ProposalPage({ onYes }) {
  const yesRef = useRef(null);
  const [noAttempts, setNoAttempts] = useState(0);
  const [popHearts, setPopHearts] = useState([]);
  const { buttonRef, position, runAway } = useRunawayButton();

  const yesScale = useMemo(() => Math.min(1 + noAttempts * 0.08, 1.65), [noAttempts]);
  const message = noAttempts >= 8 ? teasingMessages[noAttempts % teasingMessages.length] : '';

  const burstAroundYes = () => {
    if (!yesRef.current) return;
    const rect = yesRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const hearts = Array.from({ length: 10 }, (_, index) => ({
      id: `${Date.now()}-${index}`,
      x: centerX,
      y: centerY,
      dx: (Math.random() - 0.5) * 150,
      dy: -40 - Math.random() * 120,
      rotate: Math.random() * 80 - 40,
    }));

    setPopHearts((current) => [...current, ...hearts]);
    window.setTimeout(() => {
      setPopHearts((current) => current.filter((heart) => !hearts.some((item) => item.id === heart.id)));
    }, 950);
  };

  const handleNo = (event) => {
    event.preventDefault();
    runAway(event);
    setNoAttempts((count) => count + 1);
    burstAroundYes();
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] px-4 py-7 text-center sm:px-10 sm:py-10">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        <motion.h1
          className="font-script text-5xl text-pink-500 sm:text-7xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          Maha...
        </motion.h1>

        <motion.div
          className="mx-auto mt-5 flex w-24 justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.25, delay: 0.4 }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-3 w-3 rounded-full bg-pink-300"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: dot * 0.12 }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.25 }}
          className="mx-auto mt-3 grid max-w-4xl items-center gap-7 md:grid-cols-[1.05fr_0.95fr] md:text-left"
        >
          <div>
            <p className="mx-auto mt-3 max-w-2xl whitespace-pre-line text-base font-semibold leading-8 text-rose-700 sm:text-lg md:mx-0">
              {`You once said falling in love feels dangerous.

Maybe it is.

But if there's anyone I'd happily take that risk with...

it's you.

From random smiles across MIST to our little dates, you've quietly become my favorite part of the week.

So here's me taking my own risk...

Will you be my girlfriend? ❤️`}
            </p>
          </div>

          <div className="mx-auto w-full max-w-xs">
            <RomanticIllustration mood="proposal" />
          </div>
        </motion.div>

        <div className="relative mt-8 min-h-[148px]">
          <AnimatePresence>
            {message && (
              <motion.p
                key={message}
                initial={{ opacity: 0, y: 10, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                className="mb-5 text-lg font-bold text-pink-600"
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>

          <div className="relative mx-auto flex min-h-[92px] w-full max-w-md items-center justify-center gap-4">
            <motion.button
              ref={yesRef}
              type="button"
              onClick={onYes}
              className="tap-target rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-400 to-rose-400 px-8 py-4 text-lg font-extrabold text-white shadow-button outline-none ring-pink-200 transition focus-visible:ring-4"
              animate={{
                scale: yesScale,
                filter: `brightness(${1 + noAttempts * 0.035}) saturate(${1 + noAttempts * 0.06})`,
                boxShadow: `0 18px ${34 + noAttempts * 4}px rgba(248, 79, 152, ${
                  0.38 + noAttempts * 0.025
                })`,
              }}
              whileHover={{ scale: yesScale + 0.06 }}
              whileTap={{ scale: yesScale - 0.04 }}
            >
              💖 YES
            </motion.button>
          </div>
        </div>
      </div>

      <motion.button
        ref={buttonRef}
        type="button"
        onMouseMove={runAway}
        onMouseEnter={runAway}
        onFocus={runAway}
        onClick={handleNo}
        className="tap-target fixed z-50 rounded-full border border-white/80 bg-white/80 px-7 py-4 text-base font-bold text-rose-500 shadow-lg backdrop-blur-md outline-none ring-pink-200 focus-visible:ring-4"
        animate={{ left: position.x, top: position.y }}
        initial={false}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      >
        🙈 NO
      </motion.button>

      <div className="pointer-events-none fixed inset-0 z-40">
        <AnimatePresence>
          {popHearts.map((heart) => (
            <motion.span
              key={heart.id}
              className="absolute text-2xl"
              style={{ left: heart.x, top: heart.y }}
              initial={{ opacity: 0, scale: 0.4, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.6, 1.35, 0.9],
                x: heart.dx,
                y: heart.dy,
                rotate: heart.rotate,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            >
              ❤️
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
