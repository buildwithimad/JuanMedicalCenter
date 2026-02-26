'use client';


import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function WhyChooseUs({ lang }) {
  const isRtl = lang === 'ar';

  // Content mapped exactly from your Arabic and English screenshots
  const content = {
    en: {
      title: "WHY CHOOSE US?",
      subtitle: "With Juan Medical Company, hospitals receive ready-to-work personnel, continuous support, and smart operational solutions:",
      points: [
        "Full compliance with approved health rules and regulations.",
        "Flexible operational solutions that reduce costs and increase efficiency.",
        "Qualified and licensed nursing staff.",
        "Flexible operational solutions that reduce costs and increase efficiency.",
        "Full compliance with approved health rules and regulations."
      ]
    },
    ar: {
      title: "لماذا نحن؟",
      subtitle: "معنا، تحصل المستشفيات على كوادر جاهزة، دعم مستمر، وحلول ذكية للتشغيل الصحي:",
      points: [
        "التزامنا الكامل بالأنظمة واللوائح الصحية المعتمدة.",
        "دعم إداري وتشغيلي مستمر.",
        "حلول تشغيلية مرنة تقلل التكاليف وترفع الكفاءة.",
        "سرعة استجابة لتلبية الاحتياجات الطارئة.",
        "كوادر تمريضية مؤهلة ومرخصة."
      ]
    }
  };

  const t = content[lang] || content.en;

  // The Check Circle Icon used in the blocks
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      // Main dark teal background
      className="relative w-full bg-[#1e635f] py-24 lg:py-32 overflow-hidden"
    >
      {/* SMOOTH GEOMETRIC BACKGROUND ELEMENTS (Dark Mode Variant) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-80">
        <div className="absolute w-[1200px] h-[1200px] bg-white/[0.04] rounded-[200px] transform -rotate-45 -translate-x-[30%] -translate-y-[20%] blur-[2px]" />
        <div className="absolute w-[1000px] h-[1000px] bg-black/[0.05] rounded-[150px] transform -rotate-45 translate-x-[20%] translate-y-[30%] blur-[4px]" />
        <div className="absolute w-[800px] h-[800px] bg-white/[0.03] rounded-[120px] transform rotate-45 translate-x-[40%] translate-y-[10%] blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Area */}
        <div className={`max-w-3xl mb-16 ${isRtl ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-wide mb-6">
              {t.title}
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed">
              {t.subtitle}
            </p>
          </ScrollBasedAnimation>
        </div>

        {/* The Grid of Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.points.map((point, index) => (
            <ScrollBasedAnimation 
              key={index} 
              direction="up" 
              // Staggering the animation for a smooth waterfall effect 
              delay={0.2 + (index * 0.1)} 
              duration={0.5}
            >
              <div className="flex items-center h-full gap-4 p-6 md:p-8 bg-[#2b7771] hover:bg-[#256a64] transition-colors duration-300">
                <CheckIcon />
                <span className="text-white text-lg md:text-xl font-light leading-snug">
                  {point}
                </span>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}