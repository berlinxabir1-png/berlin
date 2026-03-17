import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Travel } from './components/Travel';
import { FunMode } from './components/FunMode';
import { Skills } from './components/Skills';
import { Vote } from './components/Vote';
import { Contact } from './components/Contact';
import { Background } from './components/Background';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Travel />
        <Vote />
        <FunMode />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter">
            Berlin Ahmed Naim<span className="text-neon-emerald">.</span>
          </div>
          <div className="text-white/30 text-xs uppercase tracking-widest">
            © 2026 Berlin Ahmed Naim. Built with passion & motion.
          </div>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/nayyembinsaikat" className="text-white/30 hover:text-neon-purple transition-colors text-xs uppercase tracking-widest">Facebook</a>
            <a href="https://www.instagram.com/saikat_69x" className="text-white/30 hover:text-neon-pink transition-colors text-xs uppercase tracking-widest">Instagram</a>
            <a href="https://github.com/nayyembinsaikat" className="text-white/30 hover:text-white transition-colors text-xs uppercase tracking-widest">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
