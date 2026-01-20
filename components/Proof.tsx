
import React from 'react';

const testimonials = [
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200', name: 'Alex R.', role: 'TechFlow' },
  { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200', name: 'Sarah C.', role: 'Brightly' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=200&h=200', name: 'James W.', role: 'ScaleUp' },
  { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200', name: 'Elena R.', role: 'Nexa' },
  { img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200', name: 'David K.', role: 'Horizon' },
];

const Proof: React.FC = () => {
  return (
    <section id="proof" className="py-16 md:py-24 px-4 md:px-6 bg-[#030303]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative mb-12 md:mb-16 flex justify-center w-full max-w-xl md:max-w-4xl h-32 md:h-64 overflow-hidden md:overflow-visible">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="absolute transition-all duration-700 md:hover:scale-110 cursor-pointer"
                style={{
                  left: `${15 + (i * 15)}%`,
                  top: `${i % 2 === 0 ? '10%' : '35%'}`,
                  zIndex: 10 - i
                }}
              >
                <div className="w-12 h-12 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover grayscale opacity-50 md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto px-4">
             <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-medium text-gray-400 mb-6">
               Social Proof
             </div>
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
               Reclaim your <br className="md:hidden" />
               <span className="text-gray-500 font-normal">competitive edge.</span>
             </h2>
             <p className="text-sm md:text-lg text-gray-400 mb-10 leading-relaxed">
               Over 500+ leaders have shifted their strategy to VoxAI, freeing up thousands of hours and capturing millions in un-tapped capital.
             </p>
             <button className="w-full sm:w-auto px-8 py-3.5 bg-black border border-white/10 rounded-full font-semibold md:hover:bg-white md:hover:text-black transition-all group active:scale-95 text-sm">
               Join the Elite <span className="inline-block transition-transform md:group-hover:translate-x-1">→</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
