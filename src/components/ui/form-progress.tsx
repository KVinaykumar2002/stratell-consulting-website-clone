'use client';

import { motion } from 'framer-motion';

interface FormProgressProps {
  completed: number;
  total: number;
}

export const FormProgress = ({ completed, total }: FormProgressProps) => {
  const percentage = (completed / total) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-zinc-400">Form Progress</span>
        <span className="text-sm font-medium text-[#FFD700]">{completed}/{total}</span>
      </div>
      <div className="h-2 bg-zinc-800/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-[#FFD700] via-[#E5B800] to-[#FFD700] rounded-full relative overflow-hidden"
        >
          <motion.div
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
};
