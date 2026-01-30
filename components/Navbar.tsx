
import React from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 px-8 py-5 flex justify-between items-center">
      <div 
        className="text-xl font-black cursor-pointer tracking-tighter hover:opacity-80 transition-opacity"
        onClick={() => onNavigate('home')}
      >
        <span className="gradient-text">江杰</span>的作品集
      </div>
      <div className="flex gap-10 text-xs font-bold uppercase tracking-widest">
        <button 
          onClick={() => onNavigate('home')}
          className={`hover:text-purple-400 transition-colors ${currentPage === 'home' ? 'text-purple-400' : 'text-white/50'}`}
        >
          首页 / HOME
        </button>
        <button 
          onClick={() => onNavigate('projects')}
          className={`hover:text-purple-400 transition-colors ${currentPage === 'projects' ? 'text-purple-400' : 'text-white/50'}`}
        >
          作品 / WORKS
        </button>
        <button 
          onClick={() => onNavigate('contact')}
          className={`hover:text-purple-400 transition-colors ${currentPage === 'contact' ? 'text-purple-400' : 'text-white/50'}`}
        >
          联系 / CONTACT
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
