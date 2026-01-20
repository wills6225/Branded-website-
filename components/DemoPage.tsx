
import React, { useMemo } from 'react';
import { Mic, Phone, ArrowLeft, Sparkles, ShieldCheck, Zap, MessageCircle, Play } from 'lucide-react';
import Background from './Background';

const DemoPage: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${10 + Math.random() * 10}s`,
      size: `${1 + Math.random() * 1.5}px`,
      opacity: 0.2 + Math.random() * 0.2,
    }));
  }, []);

  const goBack = () => {
    window.history.pushState({}, '', '/');
  };

  const startVoiceDemo = () => {
    const widget = document.querySelector('elevenlabs-convai');
    if (widget) {
      alert("Opening our AI Voice Interface. Please use the button in the bottom right corner to start.");
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      <Background />
      
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animation: `snowfall ${p.duration} linear infinite`,
              animationDelay: p.delay,
              backgroundColor: i % 2 === 0 ? '#ffffff' : '#a855f7',
            }}
          />
        ))}
      </div>

      <nav className="relative z-20 container mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <button 
          onClick={goBack}
          className="flex items-center gap-1.5 md:gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} md:size={18} className="md:group-hover:-translate-x-1 transition-transform" />
          <span className="text-[11px] md:text-sm font-medium">Back</span>
        </button>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
            <span className="text-[10px] md:text-xs font-bold text-white">V</span>
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white/90">VoxAI</span>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-4 md:px-6 pt-6 md:pt-12 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start md:items-center">
          
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[9px] md:text-xs font-medium">
              <Mic size={12} md:size={14} />
              <span>Live Demonstration Environment</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Test the <br className="hidden md:block" />
              <span className="shimmer-text">Voice of Growth.</span>
            </h1>

            <p className="text-sm md:text-xl text-gray-400 leading-relaxed max-w-xl">
              Experience firsthand how VoxAI handles complex inquiries and qualifies intent without missing a beat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 pt-2">
              {[
                { icon: ShieldCheck, title: 'Natural Latency', desc: 'Sub-second response flow.' },
                { icon: MessageCircle, title: 'Awareness', desc: 'Agent remembers industry terms.' },
                { icon: Zap, title: 'Booking', desc: 'Try asking to book a meeting.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 md:gap-4 items-start">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400 shrink-0">
                    <item.icon size={16} md:size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-base font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="text-[10px] md:text-sm text-gray-500 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={startVoiceDemo}
                className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black rounded-full font-bold transition-all text-sm md:text-base active:scale-95 flex items-center justify-center gap-2"
              >
                <Phone size={16} md:size={18} />
                Start Voice Demo
              </button>
            </div>
          </div>

          <div className="relative group w-full max-w-lg mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-purple-500/5 blur-[80px] rounded-full opacity-50" />
            
            <div className="relative rounded-3xl md:rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] p-0.5 shadow-2xl overflow-hidden backdrop-blur-xl">
              <div className="bg-[#080808] rounded-[2.3rem] overflow-hidden">
                <div className="p-4 md:p-8 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Mic size={20} md:size={24} className="text-white animate-pulse" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-sm font-bold text-white uppercase tracking-wider">Vox-Alpha</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[8px] md:text-[10px] text-gray-500 font-mono">ONLINE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-10 md:p-12 flex flex-col items-center justify-center space-y-8 md:space-y-12">
                   <div className="flex items-center gap-1 h-16 md:h-24">
                      {[40, 60, 30, 90, 80, 50, 70, 40, 60, 80, 40, 20, 50, 90, 40].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-1 bg-gradient-to-t from-purple-600 to-purple-400 rounded-full"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                   </div>
                   <div className="text-center">
                     <p className="text-sm md:text-lg font-medium text-white/90 italic">"How can I help you scale today?"</p>
                   </div>
                </div>

                <div className="p-4 md:p-8 bg-white/[0.02] border-t border-white/5 grid grid-cols-2 gap-3 md:gap-4">
                   <div className="p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5 bg-black/40 text-center">
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold mb-1">Confidence</p>
                      <p className="text-sm md:text-xl font-bold text-white">99%</p>
                   </div>
                   <div className="p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5 bg-black/40 text-center">
                      <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-bold mb-1">Latency</p>
                      <p className="text-sm md:text-xl font-bold text-purple-400">420ms</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <elevenlabs-convai agent-id="agent_2201kf34bww3ed5vevrn815f4e14"></elevenlabs-convai>
    </div>
  );
};

const Volume2 = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
);

export default DemoPage;
