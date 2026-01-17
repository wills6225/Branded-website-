
import React from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-medium mb-8 animate-[fade-in-down_0.5s_ease-out]">
          <Sparkles size={14} />
          <span>The era of missed opportunities is over</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05] animate-[fade-in_0.8s_ease-out]">
          Wake up to a <br />
          <span className="shimmer-text">Perfect Calendar.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-[fade-in_1s_ease-out]">
          Stop chasing leads and start closing them. VoxAI transforms your inbound chaos into a streamlined engine of qualified buyers, booking your high-value meetings while you sleep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fade-in_1.2s_ease-out]">
          <button className="group relative px-10 py-5 bg-white text-black rounded-full font-bold transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Claim Your Growth <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group px-10 py-5 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-white rounded-full font-semibold transition-all flex items-center gap-2 active:scale-95">
            <Phone size={18} className="group-hover:rotate-12 transition-transform" />
            Hear Your Future
          </button>
        </div>

        <div className="mt-20 relative group max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full pointer-events-none" />
          <div className="relative rounded-3xl border border-white/10 bg-black/40 p-2 shadow-[0_0_100px_rgba(168,85,247,0.1)] backdrop-blur-sm overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Revenue Growth Dashboard" 
              className="rounded-2xl w-full grayscale-[20%] contrast-[110%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-[20px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
