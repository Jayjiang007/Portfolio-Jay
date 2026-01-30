
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image Container - Using user provided presentation scene image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-110 animate-subtle-zoom"
          style={{ 
            backgroundImage: `url('https://github.com/Jayjiang007/artwork/blob/main/pic/unwatermarked_Gemini_Generated_Image_3px8iu3px8iu3px8.png?raw=true')`,
          }}
        />
        {/* Cinematic Gradient Overlays to match the mood and ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-block mb-8 px-5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] animate-pulse">
          Presentation Art & Strategy
        </div>
        <h1 className="text-6xl md:text-9xl font-black leading-none mb-10 tracking-tighter">
          视觉的力量<br />
          <span className="gradient-text italic inline-block px-2">重塑</span>表达
        </h1>
        <p className="text-lg md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          我是<span className="text-white font-bold">江杰</span>。专注于挖掘演示设计的无限可能，将复杂的逻辑转化为震撼的感官体验，让每一页 PPT/KN 都在叙述传奇。
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex -space-x-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden ring-4 ring-white/5">
                <img 
                  src={`https://picsum.photos/seed/client_${i}/100/100`} 
                  className="w-full h-full object-cover" 
                  alt="Client" 
                />
              </div>
            ))}
          </div>
          <div className="text-left">
            <div className="text-sm font-bold text-white/80">150+ 品牌案例</div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest">Trusted by leading tech giants</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent animate-shimmer"></div>
      </div>
      
      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 30s infinite alternate ease-in-out;
        }
        @keyframes shimmer {
          0% { transform: translateY(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
