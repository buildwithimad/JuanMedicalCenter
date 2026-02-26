'use client';

import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function AboutHero({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      title: "WHO WE ARE",
      subtitle: "A pioneer in providing and operating professional nursing services for healthcare facilities throughout the Kingdom of Saudi Arabia.",
    },
    ar: {
      title: "من نحن",
      subtitle: "شركة رائدة في توفير وتشغيل خدمات التمريض للمنشآت الصحية في جميع أنحاء المملكة العربية السعودية.",
    }
  };

  const t = content[lang] || content.en;

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="relative w-full bg-[#1e635f] pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center"
    >
      {/* SMOOTH GEOMETRIC WATERMARKS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute w-[900px] h-[900px] bg-white/[0.04] rounded-full transform -translate-x-[10%] -translate-y-[40%]" />
        <div className="absolute w-[500px] h-[500px] bg-black/[0.04] rounded-[100px] transform rotate-12 translate-x-[70%] translate-y-[30%]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-wide uppercase mb-6">
            {t.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed mx-auto max-w-3xl">
            {t.subtitle}
          </p>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}