'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function Footer({ lang }) {
  const isRtl = lang === 'ar';

  const content = {
    en: {
      companyName: "JUAN MEDICAL COMPANY",
      tagline: "The Leading Partner in Nursing Services.",
      desc: "Empowering healthcare facilities across the Kingdom with professional, sustainable, and highly qualified nursing solutions.",
      quickLinksTitle: "Quick Links",
      links: [
        { name: "Home", href: `/${lang}` },
        { name: "Who We Are", href: `/${lang}/about` },
        { name: "Our Services", href: `/${lang}/services` },
        { name: "Workflow", href: `/${lang}/workflow` },
      ],
      contactTitle: "Contact Us",
      address: "Riyadh, Al-Muhammadiyah, Takhassusi Street",
      email: "juancksa@gmail.com",
      rights: "© 2024 Juan Medical Company. All rights reserved."
    },
    ar: {
      companyName: "شركة جوان الطبية",
      tagline: "الشريك الرائد في خدمات التمريض.",
      desc: "نمكّن المنشآت الصحية في جميع أنحاء المملكة بحلول تمريضية احترافية ومستدامة وعالية التأهيل.",
      quickLinksTitle: "روابط سريعة",
      links: [
        { name: "الرئيسية", href: `/${lang}` },
        { name: "من نحن", href: `/${lang}/about` },
        { name: "خدماتنا", href: `/${lang}/services` },
        { name: "آلية العمل", href: `/${lang}/workflow` },
      ],
      contactTitle: "تواصل معنا",
      address: "الرياض، المحمدية، شارع التخصصي",
      email: "juancksa@gmail.com",
      rights: "© 2024 شركة جوان الطبية. جميع الحقوق محفوظة."
    }
  };

  const t = content[lang] || content.en;

  const LocationIcon = () => (
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#8bc34a]/20 transition-colors duration-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#8bc34a]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    </div>
  );

  const EmailIcon = () => (
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#8bc34a]/20 transition-colors duration-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#8bc34a]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    </div>
  );

  return (
    <footer dir={isRtl ? 'rtl' : 'ltr'} className="relative w-full bg-[#1e635f] text-white pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute w-[800px] h-[800px] bg-white/[0.03] rounded-[150px] transform -rotate-45 -translate-x-[20%] -translate-y-[20%]" />
        <div className="absolute w-[600px] h-[600px] bg-white/[0.02] rounded-[100px] transform rotate-45 translate-x-[60%] translate-y-[40%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="mb-20 pb-12 border-b border-white/10">
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-light text-white leading-tight max-w-4xl">
              {t.tagline}
            </h2>
          </div>
        </ScrollBasedAnimation>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="md:col-span-12 lg:col-span-5 flex flex-col">
            <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
              <div className="mb-6 flex items-center">
                <Image src="/Logo.png" alt={t.companyName} width={180} height={70} className="h-16 md:h-20 w-auto object-contain" />
              </div>
              <p className="text-white/60 font-light text-lg leading-relaxed max-w-sm">
                {t.desc}
              </p>
            </ScrollBasedAnimation>
          </div>

          <div className="md:col-span-6 lg:col-span-3 flex flex-col">
            <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
              <h4 className="text-lg font-semibold mb-6 tracking-wider text-white uppercase">{t.quickLinksTitle}</h4>
              <ul className="flex flex-col gap-4">
                {t.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-white/70 font-light text-lg hover:text-white inline-block transform transition-all duration-300 hover:translate-x-1 rtl:hover:-translate-x-1">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollBasedAnimation>
          </div>

          <div className="md:col-span-6 lg:col-span-4 flex flex-col">
            <ScrollBasedAnimation direction="up" delay={0.4} duration={0.6}>
              <h4 className="text-lg font-semibold mb-6 tracking-wider text-white uppercase">{t.contactTitle}</h4>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 group cursor-default">
                  <LocationIcon />
                  <span className="text-white/70 font-light text-lg leading-snug pt-1 group-hover:text-white transition-colors duration-300">
                    {t.address}
                  </span>
                </div>
                <a href={`mailto:${t.email}`} className="flex items-center gap-4 group w-fit">
                  <EmailIcon />
                  <span className="text-white/70 font-light text-lg tracking-wide group-hover:text-white transition-colors duration-300">
                    {t.email}
                  </span>
                </a>
              </div>
            </ScrollBasedAnimation>
          </div>
        </div>

        <ScrollBasedAnimation direction="up" delay={0.5} duration={0.6}>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm font-light tracking-wide">{t.rights}</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white/40 hover:text-white text-sm font-light transition-colors duration-300">
              {isRtl ? 'العودة للأعلى ↑' : 'Back to top ↑'}
            </button>
          </div>
        </ScrollBasedAnimation>
      </div>
    </footer>
  );
}