import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 pt-[70px]">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-gradient"></div>
      <div className="absolute inset-0"> 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(250,204,21,0.05)_50%,transparent_75%)] bg-[length:500px_500px] animate-gradient"></div>
      </div>
      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 text-[#ffb06f] mb-6 glass-effect animate-border-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Escuela de idiomas online.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              {t('hero.title')}
              <span className="text-[#ffb06f] block mt-2 animate-text-shimmer">
                {t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center space-x-4">
              <button className="group bg-[#ffb06f] text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center shadow-lg shadow-yellow-400/20">
                {t('hero.cta')}
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/20 hover:bg-white/10 transition-all glass-effect">
                Clase gratuita
              </button>
            </div>
          </div>
          <div className="md:w-1/2 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffb06f] rounded-lg transform rotate-3 animate-pulse-slow"></div>
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Students learning"
                className="relative rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-xl animate-float glass-effect">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium">1,234 students online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}