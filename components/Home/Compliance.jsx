'use client';

import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function Compliance({ lang }) {
  const isRtl = lang === 'ar';

  // Content mapped from your screenshots.
  // Note: I used JSX in the English array so we can perfectly match the bold text highlights shown in your design.
  const content = {
    en: {
      title: "COMPLIANCE AND ACCREDITATION",
      points: [
        <span key="1">A fully licensed and accredited facility by the <strong className="font-semibold text-slate-700">Saudi Ministry of Health</strong>.</span>,
        <span key="2">Registered and classified with the <strong className="font-semibold text-slate-700">Saudi Commission for Health Specialties (SCFHS)</strong>.</span>,
        <span key="3">Full commitment to the standards of the Saudi Central Board for Accreditation of <strong className="font-semibold text-slate-700">Healthcare Institutions (CBAHI)</strong>.</span>,
        <span key="4">Strict application of quality policies to ensure a safe healthy environment.</span>,
        <span key="5">Full compliance with <strong className="font-semibold text-slate-700">Ministry of Human Resources</strong> regulations, <strong className="font-semibold text-slate-700">Nitaqat</strong> programs, and the <strong className="font-semibold text-slate-700">Wage Protection System</strong>.</span>
      ]
    },
    ar: {
      title: "الامتثال والاعتماد",
      // The Arabic screenshot uses a uniform font weight for all text
      points: [
        <span key="1">منشأة معتمدة ومرخصة بالكامل من وزارة الصحة السعودية.</span>,
        <span key="2">مسجلة ومصنفة لدى الهيئة السعودية للتخصصات الصحية.</span>,
        <span key="3">الالتزام التام بمعايير المركز السعودي لاعتماد المنشآت الصحية (CBAHI).</span>,
        <span key="4">تطبيق صارم لسياسات الجودة لضمان بيئة صحية آمنة.</span>,
        <span key="5">الامتثال الكامل لأنظمة وزارة الموارد البشرية، و برامج نطاقات، ونظام حماية الأجور.</span>
      ]
    }
  };

  const t = content[lang] || content.en;

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      // Very light greenish-gray background
      className="relative w-full bg-[#eef3f2] py-24 md:py-36 overflow-hidden flex items-center min-h-[60vh]"
    >
      {/* MASSIVE GEOMETRIC WATERMARKS 
        These create the giant "chevron" or arrow-like overlapping shapes seen in the background
      */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
        <div className="absolute w-[1200px] h-[1200px] bg-white/60 rounded-[150px] transform rotate-45 -translate-y-1/4 -translate-x-1/2 blur-[2px]" />
        <div className="absolute w-[1400px] h-[1400px] bg-black/[0.015] rounded-[200px] transform rotate-45 translate-y-[10%] translate-x-[30%] blur-[4px]" />
        <div className="absolute w-[800px] h-[800px] bg-white/40 rounded-[100px] transform rotate-45 translate-y-[50%] -translate-x-[20%] blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Content Wrapper aligned based on language */}
        <div className={`max-w-4xl ${isRtl ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          
          {/* Title */}
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1e635f] tracking-wide mb-8">
              {t.title}
            </h2>
          </ScrollBasedAnimation>

          {/* The List of Points (No Bullets, just stacked text) */}
          <div className="flex flex-col gap-2">
            {t.points.map((point, index) => (
              <ScrollBasedAnimation 
                key={index} 
                direction="up" 
                delay={0.2 + (index * 0.1)} 
                duration={0.5}
              >
                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                  {point}
                </p>
              </ScrollBasedAnimation>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}