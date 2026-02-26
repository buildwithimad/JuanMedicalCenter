'use client';


import React from 'react';
import Image from 'next/image';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function WhoWeAre({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      title: "WHO WE ARE",
      paragraph1: "Juan Medical Company is a pioneer in providing and operating professional nursing services for healthcare facilities throughout the Kingdom of Saudi Arabia. We support the healthcare sector by supplying hospitals with highly qualified and licensed nursing staff, adhering to the highest standards of quality and safety in full compliance with the regulations of the Ministry of Health and authorized regulatory bodies.",
      paragraph2: "We strive to be the trusted strategic partner that healthcare facilities rely on to enhance operational efficiency and improve the quality of patient care."
    },
    ar: {
      title: "من نحن",
      paragraph1: "شركة جوان الطبية رائدة في توفير وتشغيل خدمات التمريض للمنشآت الصحية داخل المملكة العربية السعودية، نعمل على دعم القطاع الصحي عبر تزويد المستشفيات بكوادر تمريضية مؤهلة ومرخصة، وفق أعلى معايير الجودة والسلامة، وبما يتوافق مع أنظمة وزارة الصحة والجهات التنظيمية المعتمدة.",
      paragraph2: "نسعى لنكون الشريك الاستراتيجي الموثوق الذي تعتمد عليه المنشآت الصحية في رفع كفاءة التشغيل وتحسين جودة الرعاية المقدمة للمرضى."
    }
  };

  const t = content[lang] || content.en;

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="relative w-full bg-[#1e635f] py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle Geometric Background Patterns */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Large dark angled shape on the left */}
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[120%] bg-black/5 transform rotate-12 origin-top-left" />
        {/* Large dark angled shape on the right */}
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[120%] bg-black/5 transform -rotate-12 origin-bottom-right" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Image Box */}
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[400px] mb-10 md:mb-12 shadow-2xl overflow-hidden bg-white">
            <Image 
              src={isRtl ? "/Home/WhoWeAreAr.png" : "/Home/WhoWeAreEn.png"} 
              alt={t.title} 
              fill
              className="object-cover z-0"
            />
            
            {/* TEXT OVERLAY (z-20) */}
            <div className={`absolute top-0 h-full flex items-center px-10 sm:px-16 md:px-24 z-20 ${isRtl ? 'right-0' : 'left-0'}`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#1e635f] tracking-wide uppercase">
                {t.title}
              </h2>
            </div> 
          </div>
        </ScrollBasedAnimation>

        {/* Text Content */}
        <div className={`max-w-5xl ${isRtl ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
            <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose mb-6 font-light">
              {t.paragraph1}
            </p>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" delay={0.4} duration={0.6}>
            <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed md:leading-loose font-light">
              {t.paragraph2}
            </p>
          </ScrollBasedAnimation>
        </div>

      </div>
    </section>
  );
}