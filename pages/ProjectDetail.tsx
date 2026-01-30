
import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import Lightbox from '../components/Lightbox';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNavigateToProject?: (project: Project) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNavigateToProject }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % project.gallery.length);
    }
  };

  const nextProject = PROJECTS[(PROJECTS.findIndex(p => p.id === project.id) + 1) % PROJECTS.length];

  return (
    <div className="pt-32 pb-40 px-6 min-h-screen bg-black">
      <div className={`fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b ${project.color} opacity-10 blur-[120px] pointer-events-none -z-10`}></div>

      <div className="max-w-[1600px] mx-auto">
        <button 
          onClick={onBack}
          className="mb-16 text-white/30 hover:text-white transition-all flex items-center gap-3 group text-xs font-black uppercase tracking-[0.3em]"
        >
          <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-white transition-all"></span> 
          BACK TO GALLERY
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-40">
          <div className="lg:col-span-4 sticky top-32 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></span>
                <span className="text-[10px] font-black tracking-[0.5em] text-white/40 uppercase">
                  {project.category}
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter">
                {project.title}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="space-y-6 pt-10 border-t border-white/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-purple-400/80">Design Concept / 设计理念</h3>
              <p className="text-base leading-loose text-white/50 font-light italic">
                {project.details}
              </p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Resolution: 4K UHD
              </div>
              <div className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                Tools: Keynote / Ai / Ps
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-5 md:space-y-8">
            {project.gallery.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative rounded-lg overflow-hidden cursor-zoom-in group shadow-2xl transition-all duration-700 hover:shadow-purple-500/10 border border-white/5"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img 
                  src={img} 
                  alt={`${project.title} preview ${idx + 1}`} 
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-8 right-8 text-[10px] font-mono text-white/40 opacity-0 group-hover:opacity-100 transition-all">
                   SLIDE_{String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 pt-20 border-t border-white/5 text-center">
          <p className="text-white/20 text-xs font-black uppercase tracking-[0.5em] mb-12">Next Project</p>
          <div 
            onClick={() => onNavigateToProject && onNavigateToProject(nextProject)}
            className="group cursor-pointer inline-block"
          >
            <h2 className="text-5xl md:text-8xl font-black transition-all group-hover:gradient-text group-hover:scale-110 duration-700">
              {nextProject.title}
            </h2>
            <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
               <span className="text-2xl">↓</span>
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          images={project.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
