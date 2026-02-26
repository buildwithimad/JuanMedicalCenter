'use client';


import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function OurValues({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      subtitle: "OUR",
      title: "VALUES",
      values: [
        "Commitment & Credibility",
        "Quality & Patient Safety",
        "Professionalism & Integrity",
        "Rapid Response",
        "Long-term Partnerships Built on Trust"
      ]
    },
    ar: {
      subtitle: "",
      title: "قيمنا",
      values: [
        "الالتزام والمصداقية",
        "الجودة وسلامة المرضى",
        "الاحترافية والأمانة",
        "سرعة الاستجابة",
        "شراكات طويلة الأمد مبنية على الثقة"
      ]
    }
  };

  const t = content[lang] || content.en;

  const ValueIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3.75 4.5L12 13.5 8.25 7.5 12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v10.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 20.25h6c1.88 0 3.33-1.4 3.66-3.26l.48-2.74a1.5 1.5 0 00-1.8-1.7l-2.09.42M5.25 15.75v3c0 1.24 1.01 2.25 2.25 2.25h1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 5.25l1.5-1.5M19.5 7.5h1.5M5.25 5.25L3.75 3.75M4.5 7.5H3" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-white border border-white rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      // Base color matching the very light greenish-gray from your screenshots
      className="relative w-full bg-[#eef3f2] py-24 md:py-32 overflow-hidden"
    >
      {/* SMOOTH GEOMETRIC BACKGROUND ELEMENTS 
        These 4 layers overlap to create the precise intersecting lines and depths from your image.
      */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Layer 1: Massive light shape pushing from the top left */}
        <div className="absolute w-[1200px] h-[1200px] bg-white/60 rounded-[200px] transform -rotate-45 -translate-x-[40%] -translate-y-[40%] blur-[2px]" />
        
        {/* Layer 2: Subtle darker shadow shape creating the intersection line */}
        <div className="absolute w-[1000px] h-[1000px] bg-black/[0.015] rounded-[150px] transform -rotate-45 translate-x-[10%] translate-y-[20%] blur-[4px]" />
        
        {/* Layer 3: Inner white highlight crossing the opposite way */}
        <div className="absolute w-[800px] h-[800px] bg-white/40 rounded-[120px] transform rotate-45 translate-x-[30%] -translate-y-[10%] blur-[1px]" />
        
        {/* Layer 4: Soft edge glow on the right side */}
        <div className="absolute w-[600px] h-[600px] bg-white/30 rounded-[100px] transform rotate-[30deg] translate-x-[80%] translate-y-[50%] blur-[8px]" />
      </div>

      {/* THE BLEEDING BACKGROUND BLOCK */}
      <div 
        className={`absolute top-0 md:top-1/2 md:-translate-y-1/2 h-full md:h-[80%] w-full md:w-[50vw] bg-[#225b55] z-0 shadow-2xl ${
          isRtl ? 'right-0 md:right-auto md:left-0' : 'left-0 md:left-auto md:right-0'
        }`} 
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-stretch min-h-[450px]">
        
        {/* Left Side: Title & Icon */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start py-12 md:py-0">
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 shrink-0 bg-[#225b55] flex items-center justify-center text-white shadow-lg">
                <ValueIcon />
              </div>
              <div className="flex flex-col justify-center">
                {t.subtitle && (
                  <span className="text-slate-600 text-lg tracking-[0.2em] font-medium leading-tight">
                    {t.subtitle}
                  </span>
                )}
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e635f] tracking-wide mt-1">
                  {t.title}
                </h2>
              </div>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* Right Side: The Values List */}
        <div className={`w-full md:w-1/2 flex flex-col justify-center py-12 md:py-16 ${isRtl ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
          <div className="flex flex-col gap-5">
            {t.values.map((value, index) => (
              <ScrollBasedAnimation 
                key={index} 
                direction={isRtl ? 'right' : 'left'} 
                delay={0.2 + (index * 0.1)} 
                duration={0.5}
              >
                <div className="flex items-center gap-4 text-white group hover:translate-x-2 transition-transform duration-300 ease-in-out">
                  {/* Updated checkmark to match your screenshot exactly */}
                  <CheckCircleIcon />
                  <span className="text-lg md:text-xl font-light tracking-wide group-hover:text-white/80 transition-colors">
                    {value}
                  </span>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}