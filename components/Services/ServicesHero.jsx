'use client';

import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function ServicesHero({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      title: "OUR SERVICES",
      subtitle: "The leading partner in supporting facilities and hospitals with specialized medical staff.",
    },
    ar: {
      title: "خدماتنا",
      subtitle: "الشريك الرائد في دعم المنشآت والمستشفيات بالكوادر الطبية المتخصصة.",
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
        <div className="absolute w-[800px] h-[800px] bg-white/[0.04] rounded-[150px] transform -rotate-45 -translate-x-[20%] -translate-y-[20%]" />
        <div className="absolute w-[600px] h-[600px] bg-black/[0.04] rounded-[100px] transform rotate-45 translate-x-[60%] translate-y-[40%]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-wide uppercase mb-6 drop-shadow-sm">
            {t.title}
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed mx-auto max-w-2xl">
            {t.subtitle}
          </p>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}