
import React, { useMemo } from 'react';
import { Phone, ArrowRight, Sparkles, Inbox, Layout, Layers, Users, MessageSquare, Clock, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 15}s`,
      size: `${1 + Math.random() * 2}px`,
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  const scrollToBuilder = () => {
    const element = document.getElementById('builder');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 px-4 md:px-6 overflow-hidden">
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

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] md:text-xs font-medium mb-6 md:mb-8 animate-[fade-in-down_0.5s_ease-out]">
          <Sparkles size={12} className="md:w-[14px] md:h-[14px]" />
          <span>The era of missed opportunities is over</span>
        </div>

        <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] animate-[fade-in_0.8s_ease-out]">
          Wake up to a <br className="hidden md:block" />
          <span className="shimmer-text">Perfect Calendar.</span>
        </h1>

        <p className="text-base md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 animate-[fade-in_1s_ease-out]">
          Stop chasing leads and start closing them. VoxAI transforms your inbound chaos into a streamlined engine of qualified buyers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 animate-[fade-in_1.2s_ease-out]">
          <button className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-bold transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] active:scale-95 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Claim Your Growth <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={scrollToBuilder}
            className="w-full sm:w-auto group px-8 md:px-10 py-4 md:py-5 bg-transparent border border-white/10 hover:border-white/20 hover:bg-white/5 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <Zap size={18} className="group-hover:text-purple-400 transition-colors" />
            Build An Agent
          </button>
        </div>

        <div className="mt-16 md:mt-24 relative group md:perspective-[2000px] px-2 md:px-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full pointer-events-none" />
          
          <div className="relative rounded-2xl md:rounded-[2rem] border border-white/10 bg-black/40 p-0.5 md:p-1 shadow-[0_0_60px_rgba(168,85,247,0.1)] backdrop-blur-md overflow-hidden md:transform md:rotate-x-[12deg] md:rotate-y-[-10deg] md:rotate-z-[2deg] group-hover:rotate-x-[8deg] group-hover:rotate-y-[-5deg] transition-all duration-1000 ease-out">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col md:flex-row bg-[#0a0a0a] h-[400px] md:h-[500px] text-left overflow-hidden select-none border border-white/5 rounded-2xl md:rounded-[1.8rem]">
              <div className="hidden md:flex w-56 bg-[#080808] border-r border-white/5 p-4 flex flex-col gap-6 shrink-0">
                <div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-md border border-white/10">
                  <div className="w-4 h-4 rounded-sm bg-purple-500" />
                  <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider">VoxAI Pro</span>
                </div>
                
                <div className="space-y-1">
                  {[
                    { icon: Inbox, label: 'Inbox', active: true },
                    { icon: Layout, label: 'Dashboard' },
                    { icon: Layers, label: 'Workflows' },
                    { icon: Users, label: 'Customers' }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${item.active ? 'bg-white/5 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
                      <item.icon size={14} />
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-[#0d0d0d] flex flex-col overflow-hidden">
                <div className="h-12 md:h-14 border-b border-white/5 flex items-center justify-between px-4 md:px-6 shrink-0">
                  <div className="flex items-center gap-4">
                    <span className="text-xs md:text-sm font-semibold text-white">Inbox</span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[8px] md:text-[10px] text-purple-400 font-bold">
                      <Zap size={10} />
                      AUTO-PILOT ACTIVE
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-1">
                  {[
                    { id: 'LD-102', title: 'Qualification complete: Sarah Jenkins', sub: 'High intent | Real Estate', time: '2m', color: 'green' },
                    { id: 'LD-101', title: 'New inbound lead: Horizon Tech', sub: 'Processing...', time: '8m', color: 'yellow' },
                    { id: 'LD-99', title: 'Meeting Booked: David Miller', sub: 'VoxAI secured Mon 10AM', time: '1h', color: 'purple' },
                    { id: 'LD-98', title: 'Lead Archived: John Doe', sub: 'Disqualified', time: '4h', color: 'gray' },
                    { id: 'LD-97', title: 'Follow-up Sent: Elena R.', sub: 'Drip stage 2', time: '1d', color: 'blue' }
                  ].map((lead, i) => (
                    <div key={i} className="flex items-center justify-between p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer border border-transparent">
                      <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
                        <div className={`w-1 h-6 md:h-8 shrink-0 rounded-full ${
                          lead.color === 'green' ? 'bg-green-500' : 
                          lead.color === 'purple' ? 'bg-purple-500' :
                          lead.color === 'yellow' ? 'bg-yellow-500 animate-pulse' :
                          lead.color === 'blue' ? 'bg-blue-500' : 'bg-gray-700'
                        }`} />
                        <div className="truncate">
                          <p className="text-[10px] md:text-xs font-bold text-white/90 truncate">{lead.title}</p>
                          <p className="text-[8px] md:text-[10px] text-gray-500 truncate">{lead.sub}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[8px] md:text-[10px] text-gray-600 font-medium">{lead.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-80 bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-white/5 p-4 md:p-6 space-y-4 md:space-y-8 hidden sm:block shrink-0">
                <h4 className="text-xs md:text-sm font-bold text-white">Agent Performance</h4>
                <div className="h-20 md:h-32 bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-end gap-1">
                  {[30, 50, 45, 80, 55, 90, 100, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-purple-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-[20px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
