'use client';

import React from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function AboutWhyChooseUs({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      title: "WHY CHOOSE JUAN MEDICAL?",
      subtitle: "We don't just provide staff; we provide a complete operational ecosystem that guarantees quality and efficiency.",
      features: [
        {
          title: "Regulatory Excellence",
          desc: "Full compliance with the Saudi Ministry of Health and authorized regulatory bodies to ensure zero-risk operations."
        },
        {
          title: "Resource Efficiency",
          desc: "Flexible solutions designed to reduce recruitment overhead while maintaining 100% shift coverage."
        },
        {
          title: "Quality First",
          desc: "Our nursing staff is not only licensed but undergoes continuous professional training to meet international standards."
        }
      ]
    },
    ar: {
      title: "لماذا تختار جوان الطبية؟",
      subtitle: "نحن لا نوفر الكوادر فحسب؛ بل نقدم منظومة تشغيلية متكاملة تضمن الجودة والكفاءة.",
      features: [
        {
          title: "التميز التنظيمي",
          desc: "الامتثال الكامل لوزارة الصحة السعودية والجهات التنظيمية المعتمدة لضمان عمليات خالية من المخاطر."
        },
        {
          title: "كفاءة الموارد",
          desc: "حلول مرنة مصممة لتقليل تكاليف الاستقطاب مع الحفاظ على تغطية كاملة للمناوبات بنسبة 100%."
        },
        {
          title: "الجودة أولاً",
          desc: "طاقمنا التمريضي ليس مرخصاً فحسب، بل يخضع لتدريب مهني مستمر لتلبية المعايير الدولية."
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  // Thin, minimalist checkmark
  const CheckIcon = () => (
    <div className="w-12 h-12 rounded-full border border-[#1e635f]/20 flex items-center justify-center shrink-0 group-hover:bg-[#1e635f] transition-all duration-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1e635f] group-hover:text-white transition-colors duration-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    </div>
  );

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="w-full bg-white py-24 lg:py-32 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: The Statement */}
          <div className="lg:col-span-5">
            <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e635f] leading-tight mb-8">
                {t.title}
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed">
                {t.subtitle}
              </p>
              
              {/* Optional: Add a subtle graphic or signature here */}
              <div className="mt-12 h-1 w-24 bg-[#8bc34a]" />
            </ScrollBasedAnimation>
          </div>

          {/* RIGHT SIDE: Vertical Feature Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {t.features.map((feature, index) => (
              <ScrollBasedAnimation 
                key={index} 
                direction={isRtl ? 'left' : 'right'} 
                delay={0.2 + (index * 0.1)} 
                duration={0.6}
              >
                <div className="group p-8 md:p-10 bg-[#f8faf9] flex items-start gap-8 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-transparent hover:border-slate-100">
                  <CheckIcon />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-bold text-[#1e635f] transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </ScrollBasedAnimation>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}