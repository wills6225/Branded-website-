
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="relative rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-12 md:p-32 overflow-hidden group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-500/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
              Don't Manage. <br /><span className="shimmer-text">Scale.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Your business deserves a sales engine that matches your ambition. Stop playing catch-up and start leading your market with a 24/7 revenue architect.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 bg-white text-black rounded-full font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_rgba(255,255,255,0.1)]">
                Secure Your Freedom
              </button>
              <button className="w-full sm:w-auto px-12 py-6 bg-transparent border border-white/20 text-white rounded-full font-bold text-xl transition-all hover:bg-white/10 active:scale-95">
                Watch the Case Study
              </button>
            </div>
            
            <p className="mt-12 text-sm text-gray-600 font-mono uppercase tracking-widest">
              Limited integration slots available for Q4
            </p>
          </div>
          
          <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
