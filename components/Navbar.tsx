
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
            <span className="text-xs font-bold text-white">V</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white/90">VoxAI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#proof" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#cta" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-gray-400 hover:text-white px-4 py-2 transition-colors">
            Log in
          </button>
          <button className="group relative px-4 py-2 text-sm font-medium bg-white text-black rounded-full overflow-hidden transition-all active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
