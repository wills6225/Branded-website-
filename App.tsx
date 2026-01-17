
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Proof from './components/Proof';
import CTA from './components/CTA';
import Background from './components/Background';
import Calculator from './components/Calculator';

const App: React.FC = () => {
  useEffect(() => {
    // Basic smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Calculator />
        <Features />
        <Proof />
        <CTA />
      </main>

      {/* ElevenLabs Conversational AI Widget */}
      {/* @ts-ignore - Using custom element with React 19 */}
      <elevenlabs-convai agent-id="agent_2201kf34bww3ed5vevrn815f4e14"></elevenlabs-convai>

      <footer className="relative z-10 py-12 border-t border-white/5 bg-[#030303]">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-xs font-bold">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight">VoxAI</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 VoxAI. Built for visionaries.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
