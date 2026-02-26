'use client';


import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function TargetPartners({ lang }) {
  const isRtl = lang === 'ar';

  // Content mapped exactly from your screenshots
  const content = {
    en: {
      title: "TARGET PARTNERS",
      subtitle: "We are proud to provide our integrated services to support the following health sectors:",
      partners: [
        "Ministry of Health (MOH) Hospitals",
        "Specialized Hospitals",
        "Self-Operating (Self-Management) Hospitals",
        "Integrated Medical Cities",
        "Private Hospitals and Medical Centers"
      ],
      footerText: "The leading partner in supporting facilities and hospitals with specialized medical staff."
    },
    ar: {
      title: "الشركاء المستهدفون",
      subtitle: "فخورون بتقديم خدماتنا المتكاملة لدعم القطاعات الصحية التالية:",
      partners: [
        "مستشفيات وزارة الصحة",
        "المستشفيات التخصصية",
        "مستشفيات التشغيل الذاتي",
        "المدن الطبية المتكاملة",
        "المستشفيات والمراكز الطبية الخاصة"
      ],
      footerText: "الشريك الرائد في دعم المنشآت و المستشفيات بالكوادر الطبية المتخصصة."
    }
  };

  const t = content[lang] || content.en;

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      // Base color matching the smooth light background used in previous sections
      className="relative w-full bg-[#eef3f2] py-24 md:py-32 overflow-hidden"
    >
      {/* SMOOTH GEOMETRIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute w-[1200px] h-[1200px] bg-white/60 rounded-[200px] transform -rotate-45 translate-x-[10%] -translate-y-[30%] blur-[2px]" />
        <div className="absolute w-[1000px] h-[1000px] bg-black/[0.015] rounded-[150px] transform rotate-45 -translate-x-[20%] translate-y-[40%] blur-[4px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-12 md:gap-16">
        
        {/* Header Area */}
        <div className={`${isRtl ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e635f] tracking-wide mb-4">
              {t.title}
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light">
              {t.subtitle}
            </p>
          </ScrollBasedAnimation>
        </div>

        {/* The Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {t.partners.map((partner, index) => (
            <ScrollBasedAnimation 
              key={index} 
              direction="up" 
              delay={0.2 + (index * 0.1)} 
              duration={0.5}
            >
              <div className="flex items-center p-4 md:p-5 border border-[#1e635f]/40 bg-transparent hover:bg-white/50 transition-colors duration-300">
                <span className="text-slate-700 text-lg md:text-xl font-medium tracking-wide">
                  {partner}
                </span>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>

        {/* Big Footer Statement */}
        <div className={`mt-8 md:mt-12 max-w-4xl ${isRtl ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <ScrollBasedAnimation direction="up" delay={0.7} duration={0.6}>
            <h3 className="text-3xl md:text-4xl lg:text-[2.5rem] font-light text-[#1e635f] leading-snug md:leading-normal">
              {t.footerText}
            </h3>
          </ScrollBasedAnimation>
        </div>

      </div>
    </section>
  );
}