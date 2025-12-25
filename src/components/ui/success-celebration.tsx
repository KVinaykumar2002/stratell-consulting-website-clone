'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SuccessCelebrationProps {
  show: boolean;
  onComplete?: () => void;
}

export const SuccessCelebration = ({ show, onComplete }: SuccessCelebrationProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (show) {
      // Generate confetti particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: -10,
      }));
      setParticles(newParticles);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Confetti particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            rotate: 0,
            scale: 1,
          }}
          animate={{
            y: '110vh',
            rotate: 360,
            scale: [1, 1.2, 0.8, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            ease: 'easeOut',
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#14B8A6', '#14B8A6', '#1E3A5F', '#14B8A6'][
              Math.floor(Math.random() * 4)
            ],
          }}
        />
      ))}

      {/* Success message */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="relative bg-gradient-to-br from-[#1A2B42] to-[#0A0A10] rounded-3xl p-8 md:p-12 border border-[#14B8A6]/30 shadow-2xl backdrop-blur-xl"
        onAnimationComplete={onComplete}
      >
        {/* Sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0, 1, 0], rotate: 360 }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
            }}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-[#14B8A6]" />
          </motion.div>
        ))}

        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#14B8A6] flex items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.5)]">
              <CheckCircle2 className="w-12 h-12 text-[#1E3A5F]" />
            </div>
          </motion.div>

          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-2"
          >
            Message Sent!
          </motion.h3>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-300 text-center max-w-md"
          >
            We've received your message and will get back to you within 24 hours.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};
