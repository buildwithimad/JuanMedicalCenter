'use client';

import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function OurWorkflow({ lang }) {
  const isRtl = lang === 'ar';

  // Content mapped exactly from your screenshots
  const content = {
    en: {
      subtitle: "OUR",
      title: "WORKFLOW",
      steps: [
        {
          title: "Needs Analysis",
          desc: "A precise evaluation of the operational requirements of the hospital or medical facility."
        },
        {
          title: "Technical & Financial Proposals",
          desc: "Offering integrated proposals that include staff and services aligned with the client's budget and goals."
        },
        {
          title: "Formal Contracting",
          desc: "Completing legal and administrative procedures to initiate the partnership."
        },
        {
          title: "Recruitment & Standard Operation",
          desc: "Providing qualified medical and administrative staff in record time to ensure business continuity."
        },
        {
          title: "Monitoring & Quality Assurance",
          desc: "Continuous field performance monitoring to ensure commitment to the highest health quality standards."
        }
      ]
    },
    ar: {
      subtitle: "",
      title: "آلية العمل",
      steps: [
        {
          title: "تحليل ودراسة الاحتياج",
          desc: "تقييم دقيق للمتطلبات التشغيلية الخاصة بالمستشفى أو المنشأة الطبية."
        },
        {
          title: "تقديم الحلول الفنية والمالية",
          desc: "طرح عروض متكاملة تشمل الكوادر والخدمات بما يتناسب مع ميزانية وأهداف العميل."
        },
        {
          title: "التعاقد الرسمي",
          desc: "إتمام الإجراءات القانونية والإدارية لبدء الشراكة."
        },
        {
          title: "الاستقطاب والتشغيل القياسي",
          desc: "توفير الكوادر الطبية والإدارية المؤهلة في وقت قياسي لضمان استمرارية العمل."
        },
        {
          title: "الرقابة وضمان الجودة",
          desc: "متابعة الأداء الميداني بشكل مستمر لضمان الالتزام بأعلى معايير الجودة الصحية."
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  // Set of icons specifically matching each workflow step
  const Icons = [
    // 1. Needs Analysis (Magnifying glass over document)
    (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    // 2. Proposals (Document with check/chart)
    (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    // 3. Formal Contracting (Handshake/Partnership)
    (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25L9 17.25M9 11.25l6 6" />
      </svg>
    ),
    // 4. Recruitment (User search/badge)
    (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
      </svg>
    ),
    // 5. Monitoring (Screen with stats)
    (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  ];

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      // Base color matching the smooth light background used in Services
      className="relative w-full bg-[#eef3f2] py-24 md:py-32 overflow-hidden"
    >
      {/* SMOOTH GEOMETRIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute w-[1200px] h-[1200px] bg-white/60 rounded-[200px] transform -rotate-45 -translate-x-[40%] -translate-y-[20%] blur-[2px]" />
        <div className="absolute w-[1000px] h-[1000px] bg-black/[0.015] rounded-[150px] transform -rotate-45 translate-x-[20%] translate-y-[30%] blur-[4px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Area */}
        <div className={`mb-16 ${isRtl ? 'ml-auto text-right' : 'mr-auto text-left'}`}>
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            {t.subtitle && (
              <span className="text-slate-600 text-lg tracking-[0.2em] font-medium leading-tight block mb-2 uppercase">
                {t.subtitle}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e635f] tracking-wide">
              {t.title}
            </h2>
          </ScrollBasedAnimation>
        </div>

        {/* The Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.steps.map((step, index) => {
            const Icon = Icons[index];
            return (
              <ScrollBasedAnimation 
                key={index} 
                direction="up" 
                delay={0.2 + (index * 0.1)} 
                duration={0.5}
              >
                <div className="flex flex-col h-full p-8 md:p-10 border border-[#1e635f]/30 bg-transparent hover:bg-white/50 transition-colors duration-300">
                  {/* Card Header (Icon + Title) */}
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-8 h-8 shrink-0 text-[#1e635f]" />
                    <h3 className="text-xl font-bold text-[#1e635f] tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                  {/* Card Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </ScrollBasedAnimation>
            );
          })}
        </div>

      </div>
    </section>
  );
}