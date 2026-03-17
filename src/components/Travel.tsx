import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Plane, Compass } from 'lucide-react';

export const Travel: React.FC = () => {
  const travelCards = [
    {
      type: 'RECENT TRAVEL',
      location: "Cox's Bazar, Bangladesh",
      desc: "World's longest sea beach",
      image: "https://picsum.photos/seed/coxsbazar1/800/500",
      icon: <Plane size={18} />,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan/10'
    },
    {
      type: 'NEXT DESTINATION',
      location: "Cox's Bazar, Bangladesh",
      desc: "The world's longest natural sea beach",
      image: "https://picsum.photos/seed/coxsbazar2/800/500",
      icon: <MapPin size={18} />,
      color: 'text-neon-emerald',
      bgColor: 'bg-neon-emerald/10'
    },
    {
      type: 'NEXT DESTINATION',
      location: "Bandarban, Bangladesh",
      desc: "The queen of hills",
      image: "https://picsum.photos/seed/bandarban/800/500",
      icon: <Compass size={18} />,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {travelCards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-[2.5rem] group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.bgColor} ${card.color}`}>
                  {card.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-0.5">{card.type}</div>
                  <div className="font-bold text-sm">{card.location}</div>
                </div>
              </div>
              
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.location}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <p className="text-white text-[10px] font-bold uppercase tracking-wider">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
