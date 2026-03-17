import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ThumbsUp, Star, Trophy } from 'lucide-react';

export const Vote: React.FC = () => {
  const [voted, setVoted] = useState(false);
  const [count, setCount] = useState(1248);

  const handleVote = () => {
    if (!voted) {
      setCount(prev => prev + 1);
      setVoted(true);
    }
  };

  return (
    <section id="vote" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-emerald/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[4rem] relative"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-3xl bg-neon-emerald flex items-center justify-center text-black shadow-[0_0_50px_rgba(16,185,129,0.4)]">
            <Trophy size={40} />
          </div>

          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-neon-emerald mb-6 mt-4">Community</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Support My <span className="text-neon-emerald">Journey.</span></h3>
          
          <p className="text-white/60 mb-12 leading-relaxed">
            If you like my work and want to see more innovative projects, show some love by casting a vote! Your support fuels my passion for building extraordinary digital experiences.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-neon-emerald fill-neon-emerald" size={20} />
              <span className="text-3xl font-bold tracking-tighter">{count.toLocaleString()}</span>
              <span className="text-white/30 uppercase tracking-widest text-[10px]">Total Votes</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVote}
              disabled={voted}
              className={`px-12 py-5 rounded-full font-bold flex items-center gap-3 transition-all duration-500 ${
                voted 
                ? 'bg-white/10 text-white/40 cursor-default' 
                : 'bg-white text-black hover:bg-neon-emerald hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]'
              }`}
            >
              <ThumbsUp size={20} />
              {voted ? 'Thanks for Voting!' : 'Cast Your Vote'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
