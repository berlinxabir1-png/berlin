import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Music, Film, Coffee, Heart, Star, Code2, Sparkles } from 'lucide-react';

export const FunMode: React.FC = () => {
  const [isFunMode, setIsFunMode] = useState(false);

  const hobbies = [
    { name: 'Coding', icon: <Code2 />, color: 'bg-neon-purple', desc: 'Building the future' },
    { name: 'Reading', icon: <Coffee />, color: 'bg-neon-blue', desc: 'Expanding horizons' },
    { name: 'Politics', icon: <Star />, color: 'bg-neon-pink', desc: 'Global dynamics' },
    { name: 'History', icon: <Film />, color: 'bg-neon-cyan', desc: 'Patterns of the past' },
  ];

  const favoriteMovies = [
    { title: 'Money Heist', year: '2017', rating: '9.0' },
    { title: 'Lucky Bhaskar', year: '2024', rating: '8.5' },
    { title: 'Dirty', year: '2023', rating: '8.2' },
  ];

  const recentTravel = {
    location: "Cox's Bazar",
    desc: "Exploring the world's longest natural sea beach.",
    image: "https://images.unsplash.com/photo-1580137197581-df2bb346a786?q=80&w=1000&auto=format&fit=crop"
  };

  const nextTravel = {
    location: "Bandarban",
    desc: "Chasing clouds and mountains in the hill tracts.",
    image: "https://images.unsplash.com/photo-1623939012339-59345f65977a?q=80&w=1000&auto=format&fit=crop"
  };

  return (
    <section id="fun" className={`py-32 transition-all duration-1000 relative overflow-hidden ${isFunMode ? 'bg-neon-purple/20' : ''}`}>
      {/* Background elements for fun mode */}
      <AnimatePresence>
        {isFunMode && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: '110%', x: Math.random() * 100 + '%' }}
                  animate={{ y: '-10%', rotate: 360 }}
                  transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
                  className="absolute text-neon-purple/20"
                >
                  <Star size={Math.random() * 40 + 20} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.button
            onClick={() => setIsFunMode(!isFunMode)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-full font-bold flex items-center gap-3 mx-auto transition-all duration-500 ${
              isFunMode 
                ? 'bg-white text-black shadow-[0_0_50px_rgba(255,255,255,0.5)]' 
                : 'glass hover:bg-neon-purple'
            }`}
          >
            {isFunMode ? 'Disable Fun Mode' : 'Activate Fun Mode'} 🎮
          </motion.button>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass p-10 rounded-[3rem] text-center group cursor-default transition-all duration-500 ${
                isFunMode ? `${hobby.color}/20 border-${hobby.color}/40` : ''
              }`}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                isFunMode ? hobby.color : 'bg-white/5'
              } group-hover:scale-110 group-hover:rotate-6`}>
                {hobby.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{hobby.name}</h4>
              <p className="text-sm text-white/40">
                {hobby.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isFunMode && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="mt-20 space-y-8"
            >
              <div className="glass p-12 rounded-[4rem] text-center">
                <Heart className="text-neon-pink mx-auto mb-6 animate-pulse" size={48} fill="currentColor" />
                <h3 className="text-4xl font-bold mb-8 tracking-tighter">Favorite Watchlist</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {favoriteMovies.map((movie) => (
                    <div key={movie.title} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="text-neon-cyan font-mono text-xs mb-2">{movie.year}</div>
                      <div className="font-bold text-lg mb-2">{movie.title}</div>
                      <div className="flex items-center justify-center gap-1 text-xs text-white/40">
                        <Star size={12} className="text-yellow-500" fill="currentColor" />
                        {movie.rating} / 10
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Travel */}
                <div className="glass p-12 rounded-[4rem] flex flex-col items-center justify-center text-center">
                  <div className="text-xs uppercase tracking-[0.4em] text-neon-blue mb-4">Recent Travel</div>
                  <h3 className="text-4xl font-bold mb-6 tracking-tighter">{recentTravel.location}</h3>
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-6 group">
                    <img 
                      src={recentTravel.image} 
                      alt={recentTravel.location}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white text-sm font-medium">{recentTravel.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                    <Star size={14} className="text-neon-blue" />
                    Memorable Experience
                  </div>
                </div>

                {/* Next Destination */}
                <div className="glass p-12 rounded-[4rem] flex flex-col items-center justify-center text-center">
                  <div className="text-xs uppercase tracking-[0.4em] text-neon-pink mb-4">Next Destination</div>
                  <h3 className="text-4xl font-bold mb-6 tracking-tighter">{nextTravel.location}</h3>
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-6 group">
                    <img 
                      src={nextTravel.image} 
                      alt={nextTravel.location}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p className="text-white text-sm font-medium">{nextTravel.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                    <Sparkles size={14} className="text-neon-pink" />
                    Adventure Awaits
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
