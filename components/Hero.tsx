
import React from 'react';
import { Star, Calendar, Clock, MapPin, Home, UserCheck, Flame, Cpu, ArrowRight } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { hero } = content;

  // Icon mapping for stats (Recruitment Summary)
  const statIcons = [
    <Flame size={16} className="text-red-500 animate-pulse" />,
    <Clock size={16} className="text-purple-400" />,
    <Calendar size={16} className="text-purple-400" />,
    <MapPin size={16} className="text-purple-400" />,
    <Home size={16} className="text-purple-400" />,
    <UserCheck size={16} className="text-purple-400" />,
  ];

  const backgroundImage = "https://postfiles.pstatic.net/MjAyNjA5MTVfNjkg/MDAxNzg5NDUzNzgwMzc3.pTnYakJdg9ORqrFyJA2NldeMvytmwI8Jh3dBu2dHLHEg.ZG44_0USliLs-SdmPNyYPp3r-QIg6Ewdzglo-ZwfkyYg.PNG/2654.png?type=w966";

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black pt-24 pb-16">
      
      {/* Background Image & Overlays (z-0) - 80% visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={backgroundImage}
          alt="AI IoT Embedded Hero Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 opacity-80 filter brightness-90 contrast-105"
        />
        {/* Light overlays to preserve 80% image clarity while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        {/* Subtle bottom border line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      {/* Content (z-10) */}
      <div className="container mx-auto px-4 md:px-8 z-10 relative text-left">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-200 mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
            <Star size={14} className="fill-purple-400 text-purple-400" />
            <span className="text-xs font-semibold tracking-wide">{hero.badge}</span>
          </div>
          
          {/* Main Title - Left Aligned */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-[1.2] md:leading-[1.15] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            <span className="block text-gray-100 text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
              {hero.title}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300 whitespace-pre-line drop-shadow-lg">
              {hero.highlight}
            </span>
            <span className="block text-white mt-1 drop-shadow-md">
              거듭나세요
            </span>
          </h1>
          
          {/* Description - Left Aligned */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-normal leading-relaxed whitespace-pre-line drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] bg-black/30 backdrop-blur-xs p-2 rounded-xl">
            {hero.description}
          </p>

          {/* Official Course Title Plate - Center Aligned */}
          <div className="mb-10 max-w-3xl">
            <div className="relative p-5 md:p-6 rounded-2xl bg-zinc-900/85 backdrop-blur-xl border border-purple-500/30 overflow-hidden shadow-2xl text-center flex flex-col items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
                <div className="p-3 bg-purple-900/50 border border-purple-500/40 rounded-xl w-fit text-purple-300 shrink-0">
                  <Cpu size={28} />
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-purple-300/90 uppercase tracking-widest">공식 교육과정명</span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                    AI사물인터넷 MCU기반(STM32,ESP32) <span className="text-purple-300">임베디드 펌웨어 전문가 양성</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Recruitment Info Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 md:gap-3 max-w-4xl border-t border-white/10 pt-8">
            {hero.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col p-3.5 rounded-xl bg-zinc-900/70 backdrop-blur-md border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center gap-1.5 mb-1.5">
                  {statIcons[idx]}
                  <p className="text-gray-400 text-[11px] font-medium tracking-wide">{stat.label}</p>
                </div>
                <p className="text-xs sm:text-sm font-bold text-white break-keep">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
