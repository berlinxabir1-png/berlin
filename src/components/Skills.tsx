import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Globe, Cpu, Database, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  const skills = [
    { name: 'Frontend Dev', icon: <Layout size={24} />, level: 90, color: 'text-neon-emerald', bgColor: 'bg-neon-emerald/10' },
    { name: 'UI/UX Design', icon: <Palette size={24} />, level: 85, color: 'text-neon-purple', bgColor: 'bg-neon-purple/10' },
    { name: 'Backend Logic', icon: <Database size={24} />, level: 80, color: 'text-neon-blue', bgColor: 'bg-neon-blue/10' },
    { name: 'Web Performance', icon: <Globe size={24} />, level: 88, color: 'text-neon-cyan', bgColor: 'bg-neon-cyan/10' },
    { name: 'Clean Code', icon: <Code2 size={24} />, level: 95, color: 'text-neon-emerald', bgColor: 'bg-neon-emerald/10' },
    { name: 'System Architecture', icon: <Cpu size={24} />, level: 75, color: 'text-neon-purple', bgColor: 'bg-neon-purple/10' },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-neon-emerald mb-4">Expertise</h2>
            <h3 className="text-5xl font-bold tracking-tighter">My Technical <span className="text-neon-emerald">Arsenal.</span></h3>
          </div>
          <p className="text-white/40 max-w-md text-sm leading-relaxed">
            I specialize in building high-performance web applications with a focus on user experience and clean, maintainable code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2.5rem] group hover:bg-white/5 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${skill.bgColor} ${skill.color} group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <div className="font-bold text-lg">{skill.name}</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r from-neon-emerald to-neon-blue`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
