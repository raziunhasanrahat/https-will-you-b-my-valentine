import { useCallback, useEffect, useRef, useState } from 'react';

const musicPath = '/assets/music/background.mp3';

export function useMusic() {
  const [enabled, setEnabled] = useState(false);
  const audioRef = useRef(null);
  const synthRef = useRef(null);

  const stopSynth = useCallback(() => {
    if (!synthRef.current) return;
    synthRef.current.timers.forEach((timer) => window.clearTimeout(timer));
    synthRef.current.nodes.forEach((node) => {
      try {
        node.stop?.();
        node.disconnect?.();
      } catch {
        node.disconnect?.();
      }
    });
    synthRef.current.context.close();
    synthRef.current = null;
  }, []);

  const playSynthLoop = useCallback(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext || synthRef.current) return;

    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 0.035;
    master.connect(context.destination);

    const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 783.99];
    const nodes = [];
    const timers = [];

    const playNote = (frequency, delay) => {
      const timer = window.setTimeout(() => {
        if (context.state === 'closed') return;
        const osc = context.createOscillator();
        const gain = context.createGain();
        osc.type = 'sine';
        osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0, context.currentTime);
        gain.gain.linearRampToValueAtTime(0.95, context.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(master);
        osc.start();
        osc.stop(context.currentTime + 0.9);
        nodes.push(osc, gain);
      }, delay);
      timers.push(timer);
    };

    const schedule = () => {
      notes.forEach((note, index) => playNote(note, index * 520));
      const timer = window.setTimeout(schedule, notes.length * 520);
      timers.push(timer);
    };

    schedule();
    synthRef.current = { context, nodes, timers };
  }, []);

  useEffect(() => {
    audioRef.current = new Audio(musicPath);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.42;

    return () => {
      audioRef.current?.pause();
      stopSynth();
    };
  }, [stopSynth]);

  const toggle = useCallback(async () => {
    if (enabled) {
      audioRef.current?.pause();
      stopSynth();
      setEnabled(false);
      return;
    }

    try {
      await audioRef.current?.play();
    } catch {
      playSynthLoop();
    }

    setEnabled(true);
  }, [enabled, playSynthLoop, stopSynth]);

  return { enabled, toggle };
}
