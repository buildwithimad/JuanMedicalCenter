'use client';

import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function ServicesContent({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      services: [
        {
          num: "01",
          title: "Specialized Nursing",
          desc: "Providing high-efficiency nursing staff for vital departments, including ICU, Emergency, Dialysis, Neonatal Units (NICU), and Operating Rooms."
        },
        {
          num: "02",
          title: "Nursing Service Operation & Outsourcing",
          desc: "Providing high-efficiency nursing staff for vital departments, including ICU, Emergency, Dialysis, Neonatal Units (NICU), and Operating Rooms."
        },
        {
          num: "03",
          title: "Emergency & Shift Coverage",
          desc: "Rapid response to cover sudden shortages, vacations, and peak seasons such as Hajj and Umrah."
        },
        {
          num: "04",
          title: "Licensing & Compliance Management",
          desc: "Handling all procedures for the classification and registration of health practitioners, following up on professional licenses, and ensuring adherence to regulatory requirements."
        },
        {
          num: "05",
          title: "Training & Professional Development",
          desc: "Implementing specialized training programs that support quality standards and health accreditation, enhancing performance and patient safety."
        }
      ]
    },
    ar: {
      services: [
        {
          num: "01",
          title: "التمريض المتخصص",
          desc: "توفير كوادر تمريضية عالية الكفاءة للأقسام الحيوية، بما في ذلك العناية المركزة، الطوارئ، غسيل الكلى، وحدات حديثي الولادة، وغرف العمليات."
        },
        {
          num: "02",
          title: "تشغيل وإسناد خدمات التمريض",
          desc: "توفير كوادر تمريضية عالية الكفاءة للأقسام الحيوية، بما في ذلك العناية المركزة، الطوارئ، غسيل الكلى، وحدات حديثي الولادة، وغرف العمليات."
        },
        {
          num: "03",
          title: "تغطية الطوارئ والمناوبات",
          desc: "استجابة سريعة لتغطية النقص المفاجئ، الإجازات، والمواسم المزدحمة مثل الحج والعمرة."
        },
        {
          num: "04",
          title: "إدارة التراخيص والامتثال",
          desc: "التعامل مع جميع إجراءات تصنيف وتسجيل الممارسين الصحيين، متابعة الرخص المهنية، وضمان الالتزام بالمتطلبات التنظيمية."
        },
        {
          num: "05",
          title: "التدريب والتطوير المهني",
          desc: "تنفيذ برامج تدريبية متخصصة تدعم معايير الجودة والاعتماد الصحي، مما يعزز الأداء وسلامة المرضى."
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="w-full bg-[#eef3f2] py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-8 md:gap-12">
        
        {t.services.map((service, index) => (
          <ScrollBasedAnimation 
            key={index} 
            direction="up" 
            delay={0.1 + (index * 0.1)} 
            duration={0.6}
          >
            <div className="group flex flex-col md:flex-row items-start md:items-center bg-white p-8 md:p-12 transition-colors duration-500 hover:bg-[#1e635f]">
              
              {/* Massive Number Typography */}
              <div className={`text-6xl md:text-8xl font-black text-slate-100 group-hover:text-white/10 transition-colors duration-500 shrink-0 ${
                isRtl ? 'md:ml-12 mb-4 md:mb-0' : 'md:mr-12 mb-4 md:mb-0'
              }`}>
                {service.num}
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e635f] group-hover:text-white mb-4 transition-colors duration-500 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 group-hover:text-white/80 font-light leading-relaxed transition-colors duration-500">
                  {service.desc}
                </p>
              </div>

            </div>
          </ScrollBasedAnimation>
        ))}

      </div>
    </section>
  );
}