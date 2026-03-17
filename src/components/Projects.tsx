import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Study Tracker',
    category: 'Private Concept',
    image: 'https://picsum.photos/seed/study/800/600',
    tags: ['React', 'Local Storage', 'Motion'],
    link: '#',
    github: '#'
  },
  {
    title: 'Automation Scripts',
    category: 'Productivity Tool',
    image: 'https://picsum.photos/seed/automation/800/600',
    tags: ['Python', 'Shell', 'Automation'],
    link: '#',
    github: '#'
  },
  {
    title: 'Case Management System',
    category: 'Enterprise Solution',
    image: 'https://picsum.photos/seed/case/800/600',
    tags: ['Next.js', 'MySQL', 'Prisma'],
    link: '#',
    github: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-neon-blue mb-4">Portfolio</h2>
            <h3 className="text-5xl font-bold tracking-tighter">Selected Works</h3>
          </div>
          <p className="text-white/40 max-w-sm text-right">
            A collection of projects where I've pushed the boundaries of web development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-[2.5rem] overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-neon-blue mb-2">{project.category}</div>
                    <h4 className="text-3xl font-bold mb-4">{project.title}</h4>
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-white/10 border border-white/10 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-white hover:text-black transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-white hover:text-black transition-all">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Static Info for Mobile */}
              <div className="p-8 md:hidden">
                <div className="text-xs font-bold uppercase tracking-widest text-neon-blue mb-2">{project.category}</div>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
