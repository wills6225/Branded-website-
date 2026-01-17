
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl space-y-32">
        
        {/* Section 01: High Quality Leads */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
               <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Lead Qualification</span>
                  <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-bold">In Progress</span>
               </div>
               <div className="space-y-4 mb-8">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-[shimmer_3s_infinite]`} style={{ width: `${30 + (i * 20)}%`, animationDelay: `${i * 0.5}s` }} />
                    </div>
                  ))}
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <p className="text-2xl font-bold text-white">94%</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Intent Match</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-2xl font-bold text-purple-400">100%</p>
                    <p className="text-[10px] text-purple-400/60 uppercase tracking-tighter">Verified Leads</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-sm font-mono text-purple-400 uppercase tracking-widest">01. Intelligent Sifting</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white">We Don't Guess. <br /><span className="text-gray-500">We Architect.</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Surface-level insights are a liability. We analyze every inbound pulse, qualifying prospects against your ideal client profile before they ever touch your calendar. No tire-kickers, just data-backed precision.
            </p>
          </div>
        </div>

        {/* Section 02: Automated Systems */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-sm font-mono text-pink-400 uppercase tracking-widest">02. Consistent Execution</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Infrastructure That <br /><span className="text-gray-500">Never Sleeps.</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Scale is impossible with human bottlenecks. Our systems handle 100% of the initial engagement—answering, qualifying, and booking—while your competition is still checking their voicemail.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-2 w-32 bg-white/10 rounded-full" />
                    <div className="h-2 w-20 bg-white/5 rounded-full" />
                  </div>
               </div>
               <div className="relative p-4 rounded-2xl bg-black/40 border border-white/10 mb-4 transform hover:scale-105 transition-transform cursor-default">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-bold text-white">New High-Value Lead Captured</span>
                  </div>
                  <p className="text-[10px] text-gray-500">"I'm looking to scale my production by 300%..."</p>
               </div>
               <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-8 border-t border-white/5 pt-4 uppercase">
                  <span>Up-time: 100%</span>
                  <span>System: Operational</span>
               </div>
            </div>
          </div>
        </div>

        {/* Section 03: Revenue Focus */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-green-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
               <p className="text-[10px] font-mono text-gray-500 uppercase mb-4">Monthly Revenue Flow</p>
               <h4 className="text-4xl font-bold text-white mb-6">$84,200 <span className="text-xs text-green-400 font-normal">+142% ↗</span></h4>
               <div className="flex items-end gap-2 h-32">
                  {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-md relative group/bar overflow-hidden">
                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-green-500/40 to-green-400/20 transition-all duration-1000 delay-150" style={{ height: `${h}%` }} />
                    </div>
                  ))}
               </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <span className="text-sm font-mono text-green-400 uppercase tracking-widest">03. Revenue Velocity</span>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Turn Engagement <br /><span className="text-gray-500">Into Income.</span></h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Vanity metrics don't build empires. We optimize your entire top-of-funnel to ensure attention turns into retention, and retention turns into predictable cash flow. Operationalize your growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
