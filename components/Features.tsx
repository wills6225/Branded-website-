
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl space-y-20 md:space-y-32">
        
        {/* Section 01: High Quality Leads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
               <div className="flex justify-between items-center mb-6 md:mb-8">
                  <span className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest">Lead Qualification</span>
                  <span className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[8px] md:text-[10px] font-bold">In Progress</span>
               </div>
               <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="h-1.5 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full`} style={{ width: `${30 + (i * 20)}%` }} />
                    </div>
                  ))}
               </div>
               <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5">
                    <p className="text-xl md:text-2xl font-bold text-white">94%</p>
                    <p className="text-[8px] md:text-[10px] text-gray-500 uppercase">Intent Match</p>
                  </div>
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xl md:text-2xl font-bold text-purple-400">100%</p>
                    <p className="text-[8px] md:text-[10px] text-purple-400/60 uppercase">Verified</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            <span className="text-[10px] md:text-sm font-mono text-purple-400 uppercase tracking-widest">01. Intelligent Sifting</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white">We Don't Guess. <br /><span className="text-gray-500">We Architect.</span></h3>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
              We analyze every inbound pulse, qualifying prospects against your ideal client profile before they ever touch your calendar.
            </p>
          </div>
        </div>

        {/* Section 02: Automated Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="text-[10px] md:text-sm font-mono text-pink-400 uppercase tracking-widest">02. Consistent Execution</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Systems That <br /><span className="text-gray-500">Never Sleep.</span></h3>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
              Scale is impossible with human bottlenecks. Our systems handle 100% of the initial engagement—answering and booking 24/7.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-pink-500/10 blur-3xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
               <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 animate-pulse" />
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="h-1.5 md:h-2 w-24 md:w-32 bg-white/10 rounded-full" />
                    <div className="h-1.5 md:h-2 w-16 md:w-20 bg-white/5 rounded-full" />
                  </div>
               </div>
               <div className="relative p-3 md:p-4 rounded-xl md:rounded-2xl bg-black/40 border border-white/10 mb-4 transform md:hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-[9px] md:text-[10px] font-bold text-white uppercase">New Lead Captured</span>
                  </div>
                  <p className="text-[10px] md:text-[11px] text-gray-500">"I'm looking to scale my production..."</p>
               </div>
               <div className="flex justify-between text-[8px] md:text-[10px] text-gray-500 font-mono mt-6 md:mt-8 border-t border-white/5 pt-4 uppercase">
                  <span>Up-time: 100%</span>
                  <span>System: OK</span>
               </div>
            </div>
          </div>
        </div>

        {/* Section 03: Revenue Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-4 bg-green-500/10 blur-3xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
               <p className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase mb-4">Monthly Revenue Flow</p>
               <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">$84,200 <span className="text-[10px] text-green-400 font-normal">+142% ↗</span></h4>
               <div className="flex items-end gap-1.5 md:gap-2 h-24 md:h-32">
                  {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-white/5 rounded-t-sm md:rounded-t-md relative overflow-hidden">
                       <div className="absolute bottom-0 w-full bg-gradient-to-t from-green-500/40 to-green-400/20" style={{ height: `${h}%` }} />
                    </div>
                  ))}
               </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            <span className="text-[10px] md:text-sm font-mono text-green-400 uppercase tracking-widest">03. Revenue Velocity</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Turn Attention <br /><span className="text-gray-500">Into Income.</span></h3>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
              We optimize your entire top-of-funnel to ensure attention turns into predictable cash flow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
