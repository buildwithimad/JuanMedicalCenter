'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar({ lang }) {
  const isRtl = lang === 'ar';
  const pathname = usePathname();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Correct Dynamic Language Switcher
  const getSwitchedLangHref = () => {
    if (!pathname) return lang === 'ar' ? '/en' : '/ar';
    const segments = pathname.split('/');
    segments[1] = lang === 'ar' ? 'en' : 'ar';
    return segments.join('/') || '/'; 
  };

  const switchedLangHref = getSwitchedLangHref();

  const content = {
    en: {
      links: [
        { name: "Home", href: `/${lang}` },
        { name: "Who We Are", href: `/${lang}/about` },
        { name: "Services", href: `/${lang}/services` },
        { name: "Workflow", href: `/${lang}/workflow` },
      ],
      contactBtn: { name: "Contact Us", href: `/${lang}/contact` },
      switchLangText: "AR",
    },
    ar: {
      links: [
        { name: "الرئيسية", href: `/${lang}` },
        { name: "من نحن", href: `/${lang}/about` },
        { name: "خدماتنا", href: `/${lang}/services` },
        { name: "آلية العمل", href: `/${lang}/workflow` },
      ],
      contactBtn: { name: "تواصل معنا", href: `/${lang}/contact` },
      switchLangText: "EN",
    }
  };

  const t = content[lang] || content.en;

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );

  return (
    <nav 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className={`fixed w-full z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
        isScrolled ? 'top-4' : 'top-6'
      }`}
    >
      <div 
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 flex justify-between items-center px-6 sm:px-8 ${
          isScrolled 
            ? 'bg-white py-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' 
            : 'bg-transparent py-2'
        }`}
      >
        
        {/* Logo Area */}
        <Link href={`/${lang}`} className="flex items-center gap-2 z-50">
          <Image 
            src={isScrolled ? "/LogoScrolled.png" : "/Logo.png"} 
            alt="Juan Medical Logo" 
            width={180} 
            height={60}
            priority 
            className="h-10 md:h-14 w-auto object-contain transition-all duration-300" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {t.links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              className={`text-sm tracking-wide font-medium transition-colors duration-300 hover:opacity-70 ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <Link 
            href={switchedLangHref} 
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 hover:opacity-70 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            <GlobeIcon />
            {t.switchLangText}
          </Link>
          
          <Link href={t.contactBtn.href} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#1e635f] text-white hover:bg-[#154643]' 
              : 'bg-white text-[#1e635f] hover:bg-slate-100'
          }`}>
            {t.contactBtn.name}
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`lg:hidden z-50 p-2 transition-colors duration-300 ${
            isScrolled || isMobileMenuOpen ? 'text-[#1e635f]' : 'text-white'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-10 justify-center px-8 transition-opacity duration-300 lg:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col gap-8 text-center">
          {t.links.map((link, index) => (
            <Link 
              key={index} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold text-slate-800 hover:text-[#1e635f] transition-colors"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
          
          <div className="flex flex-col items-center gap-6 mt-8 pt-8 border-t border-slate-100">
            <Link 
              href={switchedLangHref} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-xl font-medium text-slate-500 hover:text-slate-800 transition-colors"
            >
              <GlobeIcon /> {t.switchLangText === "AR" ? "العربية" : "English"}
            </Link>
            
            {/* Fixed: Mobile Link using contactBtn.href */}
            <Link 
              href={t.contactBtn.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full max-w-xs py-4 bg-[#1e635f] text-white text-lg font-medium rounded-full mt-2 text-center"
            >
              {t.contactBtn.name}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}