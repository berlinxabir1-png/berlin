import React from 'react';
import { motion } from 'motion/react';
import { MapPin, GraduationCap, Heart, Baby } from 'lucide-react';

export const About: React.FC = () => {
  const infoCards = [
    { 
      label: 'CURRENT CITY', 
      value: 'Bhola, Bangladesh', 
      icon: <MapPin size={20} />, 
      color: 'text-neon-emerald',
      bgColor: 'bg-neon-emerald/10'
    },
    { 
      label: 'CURRENT COLLEGE', 
      value: 'Naziur Rahman College, Bhola (12th Grade)', 
      icon: <GraduationCap size={20} />, 
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10'
    },
    { 
      label: 'BORN PLACE', 
      value: 'Bhola, Bangladesh', 
      icon: <Baby size={20} />, 
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10'
    },
    { 
      label: 'RELATION STATUS', 
      value: 'Taken', 
      icon: <Heart size={20} />, 
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10'
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-4xl">
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            find immense satisfaction in dissecting complex problems and refining my technical craft every single day.
          </p>
          <p className="text-lg text-white/60 mb-12 leading-relaxed">
            Beyond the terminal, I am a keen observer of history and politics, always seeking to understand the intricate systems and narratives that shape our modern world. This analytical mindset fuels both my personal growth and my professional approach to development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl flex items-center gap-6 group hover:bg-white/5 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.bgColor} ${card.color} group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">{card.label}</div>
                <div className="font-bold text-lg">{card.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
