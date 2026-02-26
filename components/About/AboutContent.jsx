'use client';

import React from 'react';
import Image from 'next/image';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function AboutContent({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      storyTitle: "Our Story",
      storyText: "We support the healthcare sector by supplying hospitals with highly qualified and licensed nursing staff, adhering to the highest standards of quality and safety in full compliance with the regulations of the Ministry of Health and authorized regulatory bodies.",
      promiseTitle: "Our Promise",
      promiseText: "We strive to be the trusted strategic partner that healthcare facilities rely on to enhance operational efficiency and improve the quality of patient care."
    },
    ar: {
      storyTitle: "قصتنا",
      storyText: "نعمل على دعم القطاع الصحي عبر تزويد المستشفيات بكوادر تمريضية مؤهلة ومرخصة، وفق أعلى معايير الجودة والسلامة، وبما يتوافق مع أنظمة وزارة الصحة والجهات التنظيمية المعتمدة.",
      promiseTitle: "التزامنا",
      promiseText: "نسعى لنكون الشريك الاستراتيجي الموثوق الذي تعتمد عليه المنشآت الصحية في رفع كفاءة التشغيل وتحسين جودة الرعاية المقدمة للمرضى."
    }
  };

  const t = content[lang] || content.en;

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="w-full bg-[#eef3f2] py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Large Image Layout */}
          <div className="relative w-full">
            <ScrollBasedAnimation direction={isRtl ? 'right' : 'left'} delay={0.1} duration={0.6}>
              {/* Main Image */}
              <div className="relative w-full h-[400px] md:h-[600px] bg-slate-200 overflow-hidden group">
                {/* Make sure to add a high-quality image to your public folder 
                  e.g., /About/AboutNurses.jpg 
                */}
                <Image 
                  src="/Home/WhoWeAreEn.png" // Reusing the homepage image, but you can change this
                  alt={t.storyTitle}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Decorative Overlay Box */}
                <div className={`absolute bottom-0 w-3/4 h-32 bg-[#1e635f]/90 backdrop-blur-sm flex items-center px-8 ${
                  isRtl ? 'right-0' : 'left-0'
                }`}>
                  <p className="text-white text-xl md:text-2xl font-light leading-snug">
                    {t.promiseText.substring(0, isRtl ? 55 : 60)}...
                  </p>
                </div>
              </div>
            </ScrollBasedAnimation>
          </div>

          {/* RIGHT SIDE: Typography & Content */}
          <div className="flex flex-col gap-12 lg:py-10">
            
            {/* Story Section */}
            <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
              <div className="flex flex-col gap-4 relative">
                <span className="text-[#8bc34a] text-lg font-bold tracking-widest uppercase">
                  {t.storyTitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e635f] leading-tight">
                  {t.storyText.split(',')[0]} {/* Takes the first part of the sentence for a bold punchline */}
                </h2>
                <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mt-2">
                  {t.storyText}
                </p>
                {/* Elegant connecting line */}
                <div className="w-16 h-[2px] bg-[#1e635f]/20 mt-6" />
              </div>
            </ScrollBasedAnimation>

            {/* Promise Section */}
            <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
              <div className="flex flex-col gap-4 p-8 md:p-10 bg-white hover:bg-[#1e635f] group transition-colors duration-500">
                <span className="text-[#1e635f] group-hover:text-[#8bc34a] text-lg font-bold tracking-widest uppercase transition-colors duration-500">
                  {t.promiseTitle}
                </span>
                <p className="text-xl md:text-2xl text-slate-800 group-hover:text-white font-light leading-relaxed transition-colors duration-500">
                  "{t.promiseText}"
                </p>
              </div>
            </ScrollBasedAnimation>

          </div>

        </div>

      </div>
    </section>
  );
}