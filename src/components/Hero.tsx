import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Cake } from 'lucide-react';

export const Hero: React.FC = () => {
  const [daysToBirthday, setDaysToBirthday] = useState<number>(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const today = new Date();
      const currentYear = today.getFullYear();
      let nextBirthday = new Date(currentYear, 9, 6); // October is 9 (0-indexed)

      if (today > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, 9, 6);
      }

      const diffTime = Math.abs(nextBirthday.getTime() - today.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysToBirthday(diffDays);
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000 * 60 * 60); // Update every hour
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} />
            Available for new projects
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-6">
            Berlin <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan">
              Ahmed Naim
            </span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-lg mb-4 leading-relaxed font-display italic">
            "My brain runs faster than a computer"
          </p>

          <div className="flex items-center gap-4 mb-10">
            <div className="glass px-4 py-2 rounded-xl flex items-center gap-2">
              <Cake size={16} className="text-neon-pink" />
              <span className="text-sm font-mono text-white/60">06/10/2007</span>
            </div>
            <div className="glass px-4 py-2 rounded-xl flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-white/40">Next B-Day:</span>
              <span className="text-sm font-bold text-neon-purple">{daysToBirthday} Days</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-neon-purple hover:text-white transition-colors"
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass font-bold rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center"
        >
          {/* Animated Profile Frame */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-[3rem] border-2 border-dashed border-neon-purple/30"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-[2.5rem] border-2 border-dashed border-neon-blue/30"
            />
            <div className="absolute inset-8 rounded-[2rem] overflow-hidden glass glow-box">
              <img 
                src="https://scontent.fdac139-1.fna.fbcdn.net/v/t39.30808-6/646967235_1246426377625688_7621067675087767867_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=pCHti5dDuicQ7kNvwG2Np7Y&_nc_oc=AdmUzYJXmZvUpAWvsEFKxT_OXj_J3zdv6dDG4fS--c75EpwweudYq1JD-Z5V-TbnuAQ&_nc_zt=23&_nc_ht=scontent.fdac139-1.fna&_nc_gid=uhrK1f89MmTUx9xPyQjoUw&_nc_ss=8&oh=00_AfwWKxc8ZUp8pdqtIL0HEJdtzVuA5zu9Pbxeb7bpKBHJ3w&oe=69BF63DE" 
                alt="Berlin Ahmed Naim" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl"
            >
              <div className="text-neon-purple font-bold text-xl">5+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">Years Exp</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl"
            >
              <div className="text-neon-blue font-bold text-xl">50+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50">Projects</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>
    </section>
  );
};
