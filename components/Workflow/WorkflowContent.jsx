'use client';

import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function WorkflowContent({ lang }) {
  const isRtl = lang === 'ar';

  // Exact data from your workflow PDF
  const content = {
    en: {
      steps: [
        {
          num: "01",
          title: "Needs Analysis",
          desc: "A precise evaluation of the operational requirements of the hospital or medical facility."
        },
        {
          num: "02",
          title: "Technical & Financial Proposals",
          desc: "Offering integrated proposals that include staff and services aligned with the client's budget and goals."
        },
        {
          num: "03",
          title: "Formal Contracting",
          desc: "Completing legal and administrative procedures to initiate the partnership."
        },
        {
          num: "04",
          title: "Recruitment & Standard Operation",
          desc: "Providing qualified medical and administrative staff in record time to ensure business continuity."
        },
        {
          num: "05",
          title: "Monitoring & Quality Assurance",
          desc: "Continuous field performance monitoring to ensure commitment to the highest health quality standards."
        }
      ]
    },
    ar: {
      steps: [
        {
          num: "01",
          title: "تحليل ودراسة الاحتياج",
          desc: "تقييم دقيق للمتطلبات التشغيلية الخاصة بالمستشفى أو المنشأة الطبية."
        },
        {
          num: "02",
          title: "تقديم الحلول الفنية والمالية",
          desc: "طرح عروض متكاملة تشمل الكوادر والخدمات بما يتناسب مع ميزانية وأهداف العميل."
        },
        {
          num: "03",
          title: "التعاقد الرسمي",
          desc: "إتمام الإجراءات القانونية والإدارية لبدء الشراكة."
        },
        {
          num: "04",
          title: "الاستقطاب والتشغيل القياسي",
          desc: "توفير الكوادر الطبية والإدارية المؤهلة في وقت قياسي لضمان استمرارية العمل."
        },
        {
          num: "05",
          title: "الرقابة وضمان الجودة",
          desc: "متابعة الأداء الميداني بشكل مستمر لضمان الالتزام بأعلى معايير الجودة الصحية."
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="w-full bg-[#eef3f2] py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#1e635f]/20 rtl:border-r-2 rtl:border-l-0 ml-4 rtl:ml-0 rtl:mr-4 py-8">
          
          {t.steps.map((step, index) => (
            <ScrollBasedAnimation 
              key={index} 
              direction="up" 
              delay={0.1 + (index * 0.1)} 
              duration={0.6}
            >
              {/* Individual Timeline Item */}
              <div className="relative pl-10 md:pl-16 rtl:pl-0 rtl:pr-10 rtl:md:pr-16 py-6 group cursor-default">
                
                {/* The Timeline Dot */}
                <div className="absolute top-1/2 -translate-y-1/2 left-[-9px] rtl:left-auto rtl:right-[-9px] w-4 h-4 rounded-full bg-[#1e635f] transition-transform duration-500 ease-out group-hover:scale-[1.75] group-hover:bg-[#8bc34a] z-10" />

                {/* The Content Card */}
                <div className="relative bg-white p-8 md:p-12 overflow-hidden transition-colors duration-500 hover:bg-[#1e635f]">
                  
                  {/* Giant Watermark Number */}
                  <div className={`absolute top-1/2 -translate-y-1/2 text-[6rem] md:text-[8rem] font-black text-slate-100 group-hover:text-white/5 transition-colors duration-500 pointer-events-none select-none ${
                    isRtl ? 'left-4 md:left-8' : 'right-4 md:right-8'
                  }`}>
                    {step.num}
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1e635f] group-hover:text-white mb-4 transition-colors duration-500 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-600 group-hover:text-white/80 font-light leading-relaxed transition-colors duration-500 max-w-xl">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </div>
            </ScrollBasedAnimation>
          ))}

        </div>

      </div>
    </section>
  );
}