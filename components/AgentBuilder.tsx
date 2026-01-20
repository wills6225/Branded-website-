
import React, { useState } from 'react';
import { Volume2, Target, ChevronRight, Check, Play, Settings2, Lock, Sparkles, MessageCircle } from 'lucide-react';

const VOICES = [
  { 
    id: 'rachel', 
    name: 'Rachel', 
    style: 'Professional & Calm', 
    gender: 'F', 
    preview: 'Warm, authoritative, and steady.',
    isInteractive: true
  },
  { 
    id: 'drew', 
    name: 'Drew', 
    style: 'Friendly & Energetic', 
    gender: 'M', 
    preview: 'High energy, great for sales.'
  },
  { 
    id: 'clyde', 
    name: 'Clyde', 
    style: 'Corporate & Formal', 
    gender: 'M', 
    preview: 'Precise and polished for B2B.'
  },
  { 
    id: 'bella', 
    name: 'Bella', 
    style: 'Empathetic & Soft', 
    gender: 'F', 
    preview: 'Ideal for healthcare.'
  },
  { 
    id: 'antoni', 
    name: 'Antoni', 
    style: 'Deep & Commanding', 
    gender: 'M', 
    preview: 'Strong presence, high-end consulting.'
  },
];

const SECTORS = [
  'Real Estate', 'Legal', 'Healthcare', 'SaaS', 'Finance', 'Agency', 'Home Services'
];

const ROLES = [
  { id: 'receptionist', title: 'Receptionist', desc: 'Answering calls, basic FAQ.', icon: Volume2 },
  { id: 'qualifier', title: 'Lead Qualifier', desc: 'Detailed screening.', icon: Target },
  { id: 'setter', title: 'Appointment Setter', desc: 'Direct calendar booking.', icon: Check }
];

const AgentBuilder: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState(VOICES[0].name);
  const [selectedSector, setSelectedSector] = useState(SECTORS[0]);
  const [customSector, setCustomSector] = useState('');
  const [selectedRole, setSelectedRole] = useState(ROLES[0].id);
  const [isOther, setIsOther] = useState(false);

  return (
    <section id="builder" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 text-[10px] md:text-xs font-medium mb-6">
            <Settings2 size={12} />
            <span>Agent Configuration Studio</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mb-4 md:mb-6">
            Architect Your <span className="shimmer-text">Perfect Agent.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg px-4">
            Customize the voice, industry context, and specific mission for your 24/7 AI revenue architect.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-8 space-y-10 md:space-y-12">
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <span className="text-[10px] md:text-xs font-bold">01</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Select Voice Profile</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {VOICES.map((v) => (
                  <div
                    key={v.name}
                    onClick={() => setSelectedVoice(v.name)}
                    className={`group relative text-left p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all cursor-pointer ${
                      selectedVoice === v.name 
                        ? 'bg-purple-500/5 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.05)]' 
                        : 'bg-white/[0.02] border-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 md:mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm font-bold text-white">{v.name}</span>
                        {v.isInteractive && (
                          <div className="px-2 py-0.5 rounded-full bg-purple-500/20 text-[8px] font-bold text-purple-400 border border-purple-500/30 animate-pulse">
                            LIVE CHAT
                          </div>
                        )}
                      </div>
                      
                      <div className={`p-1.5 md:p-2 rounded-full transition-all ${
                        selectedVoice === v.name ? 'bg-purple-500 text-white' : 'bg-white/10 text-gray-500'
                      }`}>
                        {v.isInteractive ? <MessageCircle size={8} md:size={10} /> : <Play size={8} md:size={10} fill={selectedVoice === v.name ? 'white' : 'none'} />}
                      </div>
                    </div>
                    <p className="text-[9px] md:text-[11px] text-gray-400">{v.style} • {v.gender}</p>
                    <p className="text-[8px] md:text-[10px] text-gray-500 mt-1 line-clamp-1">{v.preview}</p>
                  </div>
                ))}

                <div className="relative overflow-hidden p-3 md:p-4 rounded-xl md:rounded-2xl border border-purple-500/20 bg-purple-500/[0.02] group cursor-not-allowed">
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="bg-white text-black px-3 py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                       <Lock size={10} /> Unlock Pro
                     </div>
                  </div>
                  <div className="relative filter blur-[0.4px]">
                    <div className="flex items-center justify-between mb-1 md:mb-2">
                      <span className="text-xs md:text-sm font-bold text-purple-300">Clone Your Voice</span>
                      <Sparkles size={10} className="text-purple-400" />
                    </div>
                    <p className="text-[9px] md:text-[10px] text-gray-500 italic">Professional cloning available.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <span className="text-[10px] md:text-xs font-bold">02</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">Industry Context</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {SECTORS.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSector(s); setIsOther(false); }}
                    className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-medium border ${
                      !isOther && selectedSector === s 
                        ? 'bg-white text-black border-white' 
                        : 'bg-white/[0.02] border-white/10 text-gray-400'
                    }`}
                  >
                    {s}
                  </button>
                ))}
                <button
                  onClick={() => setIsOther(true)}
                  className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-medium border ${
                    isOther ? 'bg-purple-500 text-white border-purple-500' : 'bg-white/[0.02] border-white/10 text-gray-400'
                  }`}
                >
                  Other
                </button>
              </div>

              {isOther && (
                <div className="animate-in fade-in slide-in-from-top-2">
                  <input
                    type="text"
                    placeholder="Type sector..."
                    value={customSector}
                    onChange={(e) => setCustomSector(e.target.value)}
                    className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500/50"
                  />
                </div>
              )}
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <span className="text-[10px] md:text-xs font-bold">03</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">The Mission</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                {ROLES.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRole(r.id)}
                    className={`group text-left p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all ${
                      selectedRole === r.id ? 'bg-white text-black border-white' : 'bg-white/[0.02] border-white/10 text-white'
                    }`}
                  >
                    <r.icon size={18} md:size={20} className={`mb-3 md:mb-4 ${selectedRole === r.id ? 'text-black' : 'text-purple-400'}`} />
                    <h4 className="text-[11px] md:text-sm font-bold mb-1 tracking-tight">{r.title}</h4>
                    <p className={`text-[9px] md:text-[11px] leading-snug ${selectedRole === r.id ? 'text-black/70' : 'text-gray-500'}`}>
                      {r.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-4 mt-4 lg:mt-0">
            <div className="rounded-2xl md:rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-2xl -mr-12 -mt-12" />
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">Agent Snapshot</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {selectedVoice[0]}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-white">{selectedVoice}</p>
                    <p className="text-[8px] md:text-[10px] text-gray-500 uppercase">Voice Model Active</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                   <div>
                     <p className="text-[8px] text-gray-500 uppercase font-mono">Sector</p>
                     <p className="text-[11px] md:text-sm font-medium text-white/90">{isOther ? (customSector || 'Custom') : selectedSector}</p>
                   </div>
                   <div>
                     <p className="text-[8px] text-gray-500 uppercase font-mono">Objective</p>
                     <p className="text-[11px] md:text-sm font-medium text-white/90">{ROLES.find(r => r.id === selectedRole)?.title}</p>
                   </div>
                </div>

                <div className="pt-4">
                  <button className="w-full py-3.5 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-50 transition-colors text-xs md:text-sm">
                    Deploy Prototype <ChevronRight size={14} md:size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentBuilder;
