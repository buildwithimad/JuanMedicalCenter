'use client';


import React from 'react';
import Image from 'next/image';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function OurServices({ lang }) {
  const isRtl = lang === 'ar';

  // Content pulled from the PDF. (Translated to Arabic for RTL support)
  const content = {
    en: {
      subtitle: "OUR",
      title: "SERVICES",
      services: [
        {
          title: "Specialized Nursing",
          desc: "Providing high-efficiency nursing staff for vital departments, including ICU, Emergency, Dialysis, Neonatal Units (NICU), and Operating Rooms."
        },
        {
          // Note: Kept exact text from PDF/Screenshot
          title: "Nursing Service Operation & Outsourcing",
          desc: "Providing high-efficiency nursing staff for vital departments, including ICU, Emergency, Dialysis, Neonatal Units (NICU), and Operating Rooms."
        },
        {
          title: "Emergency & Shift Coverage",
          desc: "Rapid response to cover sudden shortages, vacations, and peak seasons such as Hajj and Umrah."
        },
        {
          title: "Licensing & Compliance Management",
          desc: "Handling all procedures for the classification and registration of health practitioners, following up on professional licenses, and ensuring adherence to regulatory requirements."
        },
        {
          title: "Training & Professional Development",
          desc: "Implementing specialized training programs that support quality standards and health accreditation, enhancing performance and patient safety."
        }
      ]
    },
    ar: {
      subtitle: "",
      title: "خدماتنا",
      services: [
        {
          title: "التمريض المتخصص",
          desc: "توفير كوادر تمريضية عالية الكفاءة للأقسام الحيوية، بما في ذلك العناية المركزة، الطوارئ، غسيل الكلى، وحدات حديثي الولادة، وغرف العمليات."
        },
        {
          title: "تشغيل وإسناد خدمات التمريض",
          desc: "توفير كوادر تمريضية عالية الكفاءة للأقسام الحيوية، بما في ذلك العناية المركزة، الطوارئ، غسيل الكلى، وحدات حديثي الولادة، وغرف العمليات."
        },
        {
          title: "تغطية الطوارئ والمناوبات",
          desc: "استجابة سريعة لتغطية النقص المفاجئ، الإجازات، والمواسم المزدحمة مثل الحج والعمرة."
        },
        {
          title: "إدارة التراخيص والامتثال",
          desc: "التعامل مع جميع إجراءات تصنيف وتسجيل الممارسين الصحيين، متابعة الرخص المهنية، وضمان الالتزام بالمتطلبات التنظيمية."
        },
        {
          title: "التدريب والتطوير المهني",
          desc: "تنفيذ برامج تدريبية متخصصة تدعم معايير الجودة والاعتماد الصحي، مما يعزز الأداء وسلامة المرضى."
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  // Teal Check Circle Icon for the cards
  const CheckCircleTeal = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-[#1e635f] border-2 border-[#1e635f] rounded-full p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      // Same smooth light background 
      className="relative w-full bg-[#eef3f2] py-24 overflow-hidden"
    >
      {/* SMOOTH GEOMETRIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[1200px] h-[1200px] bg-white/60 rounded-[200px] transform -rotate-45 -translate-x-[40%] translate-y-[10%] blur-[2px]" />
        <div className="absolute w-[1000px] h-[1000px] bg-black/[0.015] rounded-[150px] transform -rotate-45 translate-x-[20%] translate-y-[40%] blur-[4px]" />
        <div className="absolute w-[800px] h-[800px] bg-white/40 rounded-[120px] transform rotate-45 translate-x-[50%] translate-y-[20%] blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* TOP SECTION: Title and Image */}
        <div className="relative flex flex-col md:flex-row items-center">
          
          {/* Bleeding Dark Teal Background Block for the Image */}
          <div className={`absolute top-[-10%] bottom-[-10%] w-[100vw] md:w-[45vw] bg-[#225b55] z-0 hidden md:block ${
            isRtl ? 'right-auto left-[-50vw]' : 'left-auto right-[-50vw]'
          }`} />

          {/* Left Side: Title */}
          <div className="w-full md:w-1/3 flex flex-col justify-center py-10 md:py-0 z-10">
            <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
              {t.subtitle && (
                <span className="text-slate-600 text-xl tracking-[0.2em] font-medium leading-tight block mb-1">
                  {t.subtitle}
                </span>
              )}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e635f] tracking-wide">
                {t.title}
              </h2>
            </ScrollBasedAnimation>
          </div>

          {/* Right Side: Image spanning across backgrounds */}
          <div className="w-full md:w-2/3 z-10 md:pl-8 rtl:md:pr-8 rtl:md:pl-0">
            <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
              {/* Note: Save the image of the nurses as /Services/ServicesNurses.png */}
              <Image 
                src={isRtl ? "/Home/ServiceAr.png" : "/Home/ServiceEn.png"}
                alt={t.title} 
                width={600}
                height={400}
                className="w-full h-64 md:h-80 lg:h-[400px] object-cover shadow-xl"
              />
            </ScrollBasedAnimation>
          </div>

        </div>

        {/* BOTTOM SECTION: Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
          {t.services.map((service, index) => (
            <ScrollBasedAnimation 
              key={index} 
              direction="up" 
              delay={0.2 + (index * 0.1)} 
              duration={0.5}
            >
              <div className="flex flex-col h-full p-8 md:p-10 border border-[#1e635f]/30 bg-transparent hover:bg-white/40 transition-colors duration-300">
                {/* Card Header (Icon + Title) */}
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircleTeal />
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e635f] tracking-wide">
                    {service.title}
                  </h3>
                </div>
                {/* Card Description */}
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}