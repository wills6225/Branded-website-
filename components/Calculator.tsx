
import React, { useState, useEffect } from 'react';
import { ShieldAlert, TrendingDown, Clock } from 'lucide-react';

const Calculator: React.FC = () => {
  const [leads, setLeads] = useState(50);
  const [value, setValue] = useState(1000);
  const [leak, setLeak] = useState(0);

  useEffect(() => {
    const annualLeads = leads * 12;
    const totalPotential = annualLeads * value;
    const calculatedLeak = totalPotential * 0.35;
    setLeak(calculatedLeak);
  }, [leads, value]);

  return (
    <section id="calculator" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-8 md:p-16 rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-[#070707] shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 blur-[100px] rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Quantify the <br /><span className="shimmer-text">Invisible Leak.</span></h2>
              <p className="text-xs md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed">
                Most businesses lose 35% of their revenue to slow follow-ups. Calculate what your silence is costing you.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <div>
                  <div className="flex justify-between mb-3 md:mb-4">
                    <label className="text-[11px] md:text-sm font-medium text-gray-300 uppercase tracking-wider">Monthly Leads</label>
                    <span className="text-purple-400 font-bold">{leads}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    step="10" 
                    value={leads}
                    onChange={(e) => setLeads(parseInt(e.target.value))}
                    className="w-full h-1 md:h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-3 md:mb-4">
                    <label className="text-[11px] md:text-sm font-medium text-gray-300 uppercase tracking-wider">Customer Value</label>
                    <span className="text-purple-400 font-bold">${value.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100" 
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    className="w-full h-1 md:h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.03] border border-white/10 text-center relative mt-4 md:mt-0">
              <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 px-3 py-0.5 md:px-4 md:py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-[8px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                <ShieldAlert size={10} md:size={12} />
                Annual Revenue Leak
              </div>
              <p className="text-4xl md:text-6xl font-bold text-white mb-1.5 md:mb-2 mt-2 md:mt-4">
                ${leak.toLocaleString()}
              </p>
              <p className="text-[9px] md:text-sm text-gray-500 mb-6 md:mb-8 font-mono">Uncaptured Capital</p>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-left">
                <div className="p-3 md:p-4 rounded-xl bg-white/5">
                  <Clock size={14} md:size={16} className="text-gray-500 mb-1.5 md:mb-2" />
                  <p className="text-[10px] md:text-xs font-bold text-white">4.2 Weeks</p>
                  <p className="text-[8px] text-gray-500 uppercase">Wasted Time</p>
                </div>
                <div className="p-3 md:p-4 rounded-xl bg-white/5">
                  <TrendingDown size={14} md:size={16} className="text-gray-500 mb-1.5 md:mb-2" />
                  <p className="text-[10px] md:text-xs font-bold text-white">35%</p>
                  <p className="text-[8px] text-gray-500 uppercase">Lost Efficiency</p>
                </div>
              </div>
              
              <button className="w-full mt-6 md:mt-8 py-3.5 md:py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all text-xs md:text-sm active:scale-95 shadow-lg shadow-purple-500/20">
                Plug the Leak Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
