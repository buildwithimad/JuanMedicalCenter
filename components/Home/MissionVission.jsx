'use client';


import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function MissionVision({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      mission: {
        subtitle: "OUR",
        title: "MISSION",
        text: "To provide professional, flexible, and sustainable nursing services that support medical continuity and enhance patient safety through qualified personnel, high-efficiency operational management, and total commitment to approved health standards."
      },
      vision: {
        subtitle: "OUR",
        title: "VISION",
        text: "To become the first choice in the Kingdom for nursing solutions and healthcare operations, effectively contributing to the development of healthcare quality and achieving the highest standards of safety and excellence."
      }
    },
    ar: {
      mission: {
        subtitle: "",
        title: "رسالتنا",
        text: "تقديم خدمات تمريضية احترافية مرنة ومستدامة، تدعم استمرارية العمل الطبي، وتعزز سلامة المرضى، من خلال كوادر مؤهلة، وإدارة تشغيلية عالية الكفاءة، والتزام كامل بالمعايير الصحية المعتمدة."
      },
      vision: {
        subtitle: "",
        title: "رؤيتنا",
        text: "أن نصبح الخيار الأول في المملكة في حلول التمريض والتشغيل الصحي، وأن نُسهم بفاعلية في تطوير جودة الخدمات الصحية وتحقيق أعلى معايير السلامة والتميز."
      }
    }
  };

  const t = content[lang] || content.en;

  // Icon SVGs to match your screenshots
  const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
    </svg>
  );

  const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 1 0-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
    </svg>
  );

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      // Very light background color matching the screenshot
      className="relative w-full bg-[#f2f6f5] py-24 overflow-hidden"
    >
      {/* Abstract Background Shapes (Simulating the watermark pattern) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40">
        <div className="absolute w-[800px] h-[800px] bg-white/50 rounded-[120px] transform rotate-45 -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute w-[600px] h-[600px] bg-white/40 rounded-[100px] transform rotate-45 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* MISSION ROW */}
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            
            {/* Left Box (Icon + Title) */}
            <div className="flex items-center gap-5 min-w-[300px]">
              <div className="w-20 h-20 shrink-0 bg-[#1e635f] flex items-center justify-center text-white shadow-md">
                <TargetIcon />
              </div>
              <div className="flex flex-col justify-center">
                {/* Only render subtitle if it exists (English) */}
                {t.mission.subtitle && (
                  <span className="text-slate-600 text-lg tracking-[0.2em] font-medium leading-tight">
                    {t.mission.subtitle}
                  </span>
                )}
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e635f] tracking-wide mt-1">
                  {t.mission.title}
                </h2>
              </div>
            </div>

            {/* Right Box (Text) */}
            <div className="flex-1">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed md:leading-loose font-light">
                {t.mission.text}
              </p>
            </div>

          </div>
        </ScrollBasedAnimation>

        {/* VISION ROW */}
        <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            
            {/* Left Box (Icon + Title) */}
            <div className="flex items-center gap-5 min-w-[300px]">
              <div className="w-20 h-20 shrink-0 bg-[#1e635f] flex items-center justify-center text-white shadow-md">
                <LightbulbIcon />
              </div>
              <div className="flex flex-col justify-center">
                {t.vision.subtitle && (
                  <span className="text-slate-600 text-lg tracking-[0.2em] font-medium leading-tight">
                    {t.vision.subtitle}
                  </span>
                )}
                <h2 className="text-4xl md:text-5xl font-bold text-[#1e635f] tracking-wide mt-1">
                  {t.vision.title}
                </h2>
              </div>
            </div>

            {/* Right Box (Text) */}
            <div className="flex-1">
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed md:leading-loose font-light">
                {t.vision.text}
              </p>
            </div>

          </div>
        </ScrollBasedAnimation>

      </div>
    </section>
  );
}