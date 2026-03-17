import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Terminal, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: 'Frontend', value: '95%', icon: <Code2 size={20} /> },
    { label: 'UI Design', value: '88%', icon: <Palette size={20} /> },
    { label: 'Backend', value: '75%', icon: <Terminal size={20} /> },
    { label: 'Performance', value: '92%', icon: <Zap size={20} /> },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-neon-purple mb-4">The Developer</h2>
            <h3 className="text-5xl font-bold tracking-tighter mb-8">
              Driven by logic, <span className="italic serif text-white/40">inspired by history.</span>
            </h3>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              I am a developer who thrives at the intersection of logic and creativity. My passion for coding is matched only by my drive to solve complex problems and continuously evolve my technical repertoire.
            </p>
            <p className="text-lg text-white/60 mb-12 leading-relaxed">
              Beyond the screen, I am a keen observer of history and politics, finding inspiration in the patterns of the past and the complexities of the present. I believe that understanding our world is just as important as building the tools that power it.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass p-6 rounded-3xl">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Born in</div>
                <div className="font-bold text-neon-pink">Dhaka</div>
              </div>
              <div className="glass p-6 rounded-3xl">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Current City</div>
                <div className="font-bold">Bhola</div>
              </div>
              <div className="glass p-6 rounded-3xl">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Relationship</div>
                <div className="font-bold text-neon-purple">Taken</div>
              </div>
              <div className="glass p-6 rounded-3xl col-span-2">
                <div className="text-xs uppercase tracking-widest text-white/40 mb-2">Dream University</div>
                <div className="font-bold text-neon-cyan">Dhaka University</div>
              </div>
            </div>
          </motion.div>

          <div id="skills" className="grid gap-6">
            {[
              { label: 'React', value: '95%', icon: <Code2 size={20} /> },
              { label: 'JavaScript', value: '92%', icon: <Zap size={20} /> },
              { label: 'Python', value: '85%', icon: <Terminal size={20} /> },
              { label: 'MySQL', value: '80%', icon: <Terminal size={20} /> },
              { label: 'HTML', value: '98%', icon: <Code2 size={20} /> },
              { label: 'CSS', value: '90%', icon: <Palette size={20} /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-3xl group hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 text-neon-purple group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="font-bold text-lg">{stat.label}</span>
                  </div>
                  <span className="font-mono text-neon-purple text-sm">{stat.value}</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-blue"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
