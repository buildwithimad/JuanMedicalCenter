'use client';


import React from 'react';
import Image from 'next/image';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function HeroSection({ lang }) {
  // Determine if the current language is Right-to-Left (Arabic)
  const isRtl = lang === 'ar';

  // Dictionary for the Hero content
  const content = {
    en: {
      titleLine1: "JUAN MEDICAL",
      titleLine2: "COMPANY",
      subtitle: "The Leading Partner in Nursing Services",
    },
    ar: {
      titleLine1: "شركة جوان",
      titleLine2: "الطبية",
      subtitle: "الشريك الرائد في خدمات التمريض",
    }
  };

  const t = content[lang] || content.en;

  // Responsive logic variables for cleaner JSX
  // On mobile, the image fills the background. On desktop (md), it pins to the correct side.
  const imageWrapperPosition = isRtl 
    ? 'md:right-auto md:left-0' 
    : 'md:left-auto md:right-0';

  const imageObjectPosition = isRtl 
    ? 'object-center md:object-left-top' 
    : 'object-center md:object-right-top';

  // The gradient blends bottom-to-top on mobile, and side-to-side on desktop
  const gradientOverlay = isRtl
    ? 'bg-gradient-to-t md:bg-gradient-to-l from-[#1e635f] via-[#1e635f]/90 md:via-[#1e635f]/60 to-transparent'
    : 'bg-gradient-to-t md:bg-gradient-to-r from-[#1e635f] via-[#1e635f]/90 md:via-[#1e635f]/60 to-transparent';

  const textAlignment = isRtl 
    ? 'ml-auto text-right' 
    : 'mr-auto text-left';

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="relative w-full min-h-screen bg-[#1e635f] overflow-hidden flex items-center"
    >
      
      {/* Background Image Container */}
      <div className={`absolute inset-0 w-full md:w-[65%] h-full z-0 ${imageWrapperPosition}`}>
        
        {/* Image - Low opacity on mobile for text readability, full opacity on desktop */}
        <Image 
          src={isRtl ? "/Home/HeroAr.png" : "/Home/HeroEn.png"} 
          alt={isRtl ? "ممرضة شركة جوان الطبية" : "Juan Medical Nurse"} 
          fill
          className={`object-cover opacity-30 md:opacity-100 transition-opacity duration-500 ${imageObjectPosition}`}
        />
        
        {/* Magic Gradient Overlay - creates the seamless blend into the teal background */}
        <div className={`absolute inset-0 ${gradientOverlay}`} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        
        {/* Text Box */}
        <div className={`max-w-xl lg:max-w-2xl py-20 md:py-0 ${textAlignment}`}>
          
          {/* Main Heading with Animation */}
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.1] uppercase tracking-wide drop-shadow-lg md:drop-shadow-none">
              {t.titleLine1}
              <br />
              {t.titleLine2}
            </h1>
          </ScrollBasedAnimation>

          {/* Subheading with Delayed Animation */}
          <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
            <h2 className="text-lg sm:text-2xl lg:text-3xl text-white/90 font-light tracking-wide md:font-normal">
              {t.subtitle}
            </h2>
          </ScrollBasedAnimation>

        </div>
      </div>

    </section>
  );
}