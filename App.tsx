
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Proof from './components/Proof';
import CTA from './components/CTA';
import Background from './components/Background';
import Calculator from './components/Calculator';
import AgentBuilder from './components/AgentBuilder';
import DemoPage from './components/DemoPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Support for manual navigation
    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    if (currentPath !== '/demo') {
      // Basic smooth scroll implementation for landing page
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
    }
  }, [currentPath]);

  if (currentPath === '/demo') {
    return <DemoPage />;
  }

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <AgentBuilder />
        <Calculator />
        <Features />
        <Proof />
        <CTA />
      </main>

      {/* ElevenLabs Conversational AI Global Widget */}
      <div className="relative z-[100]">
        {/* @ts-ignore */}
        <elevenlabs-convai agent-id="agent_2201kf34bww3ed5vevrn815f4e14"></elevenlabs-convai>
      </div>

      <footer className="relative z-10 py-12 border-t border-white/5 bg-[#030303]">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-xs font-bold">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">VoxAI</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 VoxAI. Built for teams that move fast.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
