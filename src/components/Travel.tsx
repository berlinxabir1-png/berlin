import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, Sparkles } from 'lucide-react';

export const Travel: React.FC = () => {
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
    <section id="travel" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-neon-blue mb-4">Travel Journal</h2>
            <h3 className="text-5xl font-bold tracking-tighter">Wanderlust</h3>
          </div>
          <p className="text-white/40 max-w-sm text-right">
            Exploring new horizons and capturing moments across the globe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Travel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[4rem] flex flex-col items-center justify-center text-center group"
          >
            <div className="text-xs uppercase tracking-[0.4em] text-neon-blue mb-4 flex items-center gap-2">
              <MapPin size={14} /> Recent Travel
            </div>
            <h3 className="text-4xl font-bold mb-6 tracking-tighter">{recentTravel.location}</h3>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-6">
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
          </motion.div>

          {/* Next Destination */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[4rem] flex flex-col items-center justify-center text-center group"
          >
            <div className="text-xs uppercase tracking-[0.4em] text-neon-pink mb-4 flex items-center gap-2">
              <Sparkles size={14} /> Next Destination
            </div>
            <h3 className="text-4xl font-bold mb-6 tracking-tighter">{nextTravel.location}</h3>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-6">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
