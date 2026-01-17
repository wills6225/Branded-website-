
import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingDown, Clock, ShieldAlert } from 'lucide-react';

const Calculator: React.FC = () => {
  const [leads, setLeads] = useState(50);
  const [value, setValue] = useState(1000);
  const [leak, setLeak] = useState(0);

  useEffect(() => {
    // Calculating leak: 35% average loss due to slow response/missed calls
    const annualLeads = leads * 12;
    const totalPotential = annualLeads * value;
    const calculatedLeak = totalPotential * 0.35;
    setLeak(calculatedLeak);
  }, [leads, value]);

  return (
    <section id="calculator" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="relative p-12 md:p-16 rounded-[2.5rem] border border-white/10 bg-[#070707] shadow-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quantify the <br /><span className="shimmer-text">Invisible Leak.</span></h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Most businesses lose 35% of their revenue to slow follow-ups and missed calls. Calculate what your silence is costing you.
              </p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-medium text-gray-300">Monthly Inbound Leads</label>
                    <span className="text-purple-400 font-bold">{leads}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    step="10" 
                    value={leads}
                    onChange={(e) => setLeads(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-4">
                    <label className="text-sm font-medium text-gray-300">Average Customer Value</label>
                    <span className="text-purple-400 font-bold">${value.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100" 
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <ShieldAlert size={12} />
                Annual Revenue Leak
              </div>
              <p className="text-5xl md:text-6xl font-bold text-white mb-2 mt-4">
                ${leak.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mb-8 font-mono">Uncaptured Potential Capital</p>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-xl bg-white/5">
                  <Clock size={16} className="text-gray-500 mb-2" />
                  <p className="text-xs font-bold text-white">4.2 Weeks</p>
                  <p className="text-[10px] text-gray-500 uppercase">Wasted Time</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5">
                  <TrendingDown size={16} className="text-gray-500 mb-2" />
                  <p className="text-xs font-bold text-white">35%</p>
                  <p className="text-[10px] text-gray-500 uppercase">Lost Efficiency</p>
                </div>
              </div>
              
              <button className="w-full mt-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20 active:scale-95">
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
