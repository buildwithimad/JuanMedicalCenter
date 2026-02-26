'use client';

import React from 'react';
import Link from 'next/link';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function CTASection({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      title: "Ready to elevate your healthcare standards?",
      subtitle: "Join the leading hospitals in the Kingdom and secure the specialized nursing staff your facility deserves.",
      buttonText: "Get in Touch Now",
      contactHref: `/${lang}/contact`,
    },
    ar: {
      title: "هل أنت مستعد لرفع معايير الرعاية الصحية لديك؟",
      subtitle: "انضم إلى المستشفيات الرائدة في المملكة وامنح منشأتك كوادر التمريض المتخصصة التي تستحقها.",
      buttonText: "تواصل معنا الآن",
      contactHref: `/${lang}/contact`,
    }
  };

  const t = content[lang] || content.en;

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="relative w-full bg-[#1e635f] py-20 md:py-32 overflow-hidden"
    >
      {/* SMOOTH MINIMALIST BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute w-[800px] h-[800px] bg-white/[0.05] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[600px] h-[600px] bg-black/[0.05] rounded-[120px] transform rotate-12 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            {t.title}
          </h2>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
          <p className="text-lg md:text-xl text-white/80 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </ScrollBasedAnimation>

        <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
          <Link 
            href={t.contactHref}
            className="inline-block px-10 py-5 bg-white text-[#1e635f] text-lg font-bold rounded-full transition-all duration-300 hover:bg-[#154643] hover:text-white active:scale-95"
          >
            {t.buttonText}
          </Link>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}