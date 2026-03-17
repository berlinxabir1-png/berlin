import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-[#0a0a0f] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl font-bold tracking-tighter mb-8"
          >
            Berlin Ahmed Naim<span className="text-neon-emerald">.</span>
          </motion.div>
          
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-neon-emerald to-neon-blue"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30"
          >
            Initializing Experience {progress}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
