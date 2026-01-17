
import React from 'react';

const testimonials = [
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200', name: 'Alex Rivers', role: 'Founder @ TechFlow' },
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200', name: 'Sarah Chen', role: 'CEO @ Brightly' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200', name: 'James Wilson', role: 'COO @ ScaleUp' },
  { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200', name: 'Elena Rodriguez', role: 'Growth Lead @ Nexa' },
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200', name: 'David Kim', role: 'VP of Ops @ Horizon' },
];

const Proof: React.FC = () => {
  return (
    <section id="proof" className="py-24 px-6 bg-[#030303]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative mb-16 flex justify-center w-full max-w-4xl h-48 md:h-64">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="absolute transition-all duration-700 hover:scale-110 hover:z-20 cursor-pointer"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${i % 2 === 0 ? '0' : '20%'}`,
                  zIndex: 10 - i
                }}
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group bg-black">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 text-center">
                    <p className="text-[8px] font-bold text-white truncate">{t.name}</p>
                    <p className="text-[6px] text-gray-400 truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute top-0 inset-x-0 h-full flex justify-around pointer-events-none opacity-20">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
               ))}
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
             <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400 mb-6">
               Social Proof
             </div>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
               Reclaim your <br />
               <span className="text-gray-500 font-normal">competitive edge.</span>
             </h2>
             <p className="text-gray-400 text-lg mb-12">
               Over 500+ market leaders have shifted their entire inbound strategy to VoxAI, freeing up thousands of hours and capturing millions in un-tapped capital.
             </p>
             <button className="px-8 py-3 bg-black border border-white/10 rounded-full font-semibold hover:bg-white hover:text-black transition-all group active:scale-95">
               Join the Elite <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
