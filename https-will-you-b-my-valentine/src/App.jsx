import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useCallback, useState } from 'react';
import FloatingHearts from './components/FloatingHearts.jsx';
import MusicToggle from './components/MusicToggle.jsx';
import CursorHearts from './components/CursorHearts.jsx';
import LandingPage from './components/LandingPage.jsx';
import ProposalPage from './components/ProposalPage.jsx';
import SuccessPage from './components/SuccessPage.jsx';

const pages = {
  landing: LandingPage,
  proposal: ProposalPage,
  success: SuccessPage,
};

export default function App() {
  const [page, setPage] = useState('landing');
  const ActivePage = pages[page];

  const celebrate = useCallback(() => {
    const end = Date.now() + 1800;
    const colors = ['#ff4f98', '#ff9ec7', '#ffd1e6', '#fff0aa', '#ffffff'];

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 74,
        origin: { x: 0, y: 0.78 },
        colors,
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 74,
        origin: { x: 1, y: 0.78 },
        colors,
      });
      confetti({
        particleCount: 5,
        startVelocity: 36,
        spread: 360,
        ticks: 90,
        origin: { x: Math.random(), y: Math.random() * 0.45 },
        colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  }, []);

  const handleYes = useCallback(() => {
    celebrate();
    window.setTimeout(() => setPage('success'), 1050);
  }, [celebrate]);

  return (
    <main className="proposal-bg relative min-h-screen overflow-hidden px-4 py-5 font-sans text-rose-950 sm:px-6 lg:px-8">
      <FloatingHearts intense={page === 'success'} />
      <CursorHearts />
      <MusicToggle />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.span
          className="sparkle left-[12%] top-[18%]"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.6, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        />
        <motion.span
          className="sparkle right-[18%] top-[25%]"
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.4, 1.4, 0.4] }}
          transition={{ duration: 3.4, repeat: Infinity, delay: 0.7 }}
        />
        <motion.span
          className="sparkle bottom-[18%] left-[22%]"
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.5, 0.6] }}
          transition={{ duration: 3.1, repeat: Infinity, delay: 1.2 }}
        />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-5xl items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="w-full"
          >
            <ActivePage onContinue={() => setPage('proposal')} onYes={handleYes} />
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
