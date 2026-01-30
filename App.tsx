
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ProjectGrid from './components/ProjectGrid';
import { Project } from './types';
import { PROJECTS } from './constants';

type Page = 'home' | 'projects' | 'contact' | 'detail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('detail');
  };

  const handleNavigate = (page: string) => {
    setSelectedProject(null);
    setCurrentPage(page as Page);
  };

  return (
    <div className="relative text-white selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <div className="transition-opacity duration-500">
        {currentPage === 'home' && (
          <Home 
            onProjectClick={handleProjectClick} 
            onViewAll={() => setCurrentPage('projects')} 
          />
        )}

        {currentPage === 'projects' && (
          <div className="pt-32 min-h-screen">
            <ProjectGrid 
              onProjectClick={handleProjectClick} 
              onViewAll={() => {}} 
              initialCount={PROJECTS.length} 
            />
          </div>
        )}

        {currentPage === 'detail' && selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setCurrentPage('projects')} 
            onNavigateToProject={handleProjectClick}
          />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}
      </div>

      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-[10px] uppercase tracking-widest font-medium">
        © 2024 江杰作品集 / ULTRAVIEW PRESENTATION DESIGN. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
};

export default App;
