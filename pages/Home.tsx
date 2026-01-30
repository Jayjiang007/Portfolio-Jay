
import React from 'react';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import { Project } from '../types';

interface HomeProps {
  onProjectClick: (project: Project) => void;
  onViewAll: () => void;
}

const Home: React.FC<HomeProps> = ({ onProjectClick, onViewAll }) => {
  return (
    <main>
      <Hero />
      <ProjectGrid onProjectClick={onProjectClick} onViewAll={onViewAll} initialCount={8} />
      
      <section className="py-40 px-6 text-center border-y border-white/5 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-[1600px] mx-auto relative z-10 overflow-x-auto no-scrollbar">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-12 italic tracking-tighter whitespace-nowrap flex items-center justify-center gap-2 md:gap-4">
            <span className="text-white/20 font-serif text-5xl md:text-8xl">"</span>
            每一张幻灯片，都是一次心智的征服。
            <span className="text-white/20 font-serif text-5xl md:text-8xl">"</span>
          </h2>
          <p className="text-white/30 text-xs sm:text-sm md:text-xl max-w-4xl mx-auto leading-relaxed font-light tracking-[0.2em] md:tracking-[0.5em] px-4">
            在信息爆炸的时代，唯有清晰、美丽且有力的演示能穿透迷雾，直达人心。
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
