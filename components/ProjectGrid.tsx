
import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
  onViewAll: () => void;
  initialCount?: number;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick, onViewAll, initialCount = 8 }) => {
  const displayedProjects = PROJECTS.slice(0, initialCount);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Decorative Background Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 flex justify-around px-4">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-around py-20">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-purple-500"></div>
              <span className="text-purple-500 font-black text-xs tracking-[0.5em] uppercase">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              精选作品集
            </h2>
            <p className="text-white/30 font-mono text-[10px] tracking-[0.2em] uppercase">Dynamic Grid Layout / Visual Strategy</p>
          </div>
          {initialCount < PROJECTS.length && (
            <button 
              onClick={onViewAll}
              className="group relative px-10 py-4 overflow-hidden rounded-full border border-white/10 transition-all hover:border-purple-500/50"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="relative z-10 text-xs font-black uppercase tracking-[0.2em] group-hover:text-black transition-colors">
                查看所有作品 / View All
              </span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {displayedProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => onProjectClick(project)}
              className="group relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5 transition-all duration-700 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] hover:border-white/20"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.mainImage})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} via-black/20 to-transparent opacity-40 group-hover:opacity-95 transition-all duration-700`} />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-[10px] font-black tracking-[0.2em] text-white/90 mb-5 uppercase transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-4 group-hover:translate-y-0">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 line-clamp-2 max-w-xl opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-4 group-hover:translate-y-0 font-light">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-10 right-10 w-14 h-14 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100 bg-white text-black rounded-full shadow-2xl">
                <span className="text-2xl transform rotate-45">↑</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
