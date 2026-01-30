
import React, { useEffect } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white text-3xl transition-colors p-2"
      >
        ✕
      </button>
      
      <button 
        onClick={onPrev}
        className="absolute left-4 md:left-8 text-white/50 hover:text-white text-5xl transition-colors p-4"
      >
        ‹
      </button>

      <div className="max-w-7xl max-h-[90vh] flex items-center justify-center relative">
        <img 
          src={images[currentIndex]} 
          alt="Full size view" 
          className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
        />
        <div className="absolute -bottom-10 left-0 right-0 text-center text-sm text-white/40">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <button 
        onClick={onNext}
        className="absolute right-4 md:right-8 text-white/50 hover:text-white text-5xl transition-colors p-4"
      >
        ›
      </button>
    </div>
  );
};

export default Lightbox;
