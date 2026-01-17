
import React, { useEffect, useState } from 'react';

const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Grid */}
      <div className="absolute inset-0 grid-pattern radial-gradient-mask opacity-20" />
      
      {/* Soft Animated Gradient Bloom */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] opacity-20 transition-transform duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15) 0%, transparent 40%)`
        }}
      />

      {/* Light Field Beams */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-[pulse_8s_infinite]" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pink-500/10 to-transparent animate-[pulse_12s_infinite]" />
      </div>

      {/* Slow Parallax Abstract Shapes */}
      <div 
        className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full animate-[bounce_20s_infinite]" 
        style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}
      />
      <div 
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-600/5 blur-[100px] rounded-full animate-[pulse_15s_infinite]"
        style={{ transform: `translate(${-mousePos.x * 0.01}px, ${-mousePos.y * 0.01}px)` }}
      />

      {/* Grid Shimmer Effect */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default Background;
