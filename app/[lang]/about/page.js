import AboutContent from '@/components/About/AboutContent'
import AboutHero from '@/components/About/AboutHero'
import AboutWhyChooseUs from '@/components/About/WhyChoseUs';
import CTASection from '@/components/Ui/CTASection';
import React from 'react'

// --- DYNAMIC SEO FOR ABOUT PAGE ---
export async function generateMetadata({ params }) {
  const { lang } = await params;
  
  const seo = {
    en: {
      title: "Who We Are",
      description: "Learn more about Juan Medical, the leading partner in professional nursing services and healthcare operation in Saudi Arabia.",
    },
    ar: {
      title: "من نحن",
      description: "تعرف على شركة جوان الطبية، الشريك الرائد في خدمات التمريض الاحترافية والتشغيل الصحي في المملكة العربية السعودية.",
    }
  };

  const t = seo[lang] || seo.en;

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: `${t.title} | Juan Medical`,
      description: t.description,
      images: [
        {
          url: '/LogoFull.png', // Using your specific logo for social sharing
          width: 1200,
          height: 630,
          alt: 'Juan Medical Logo',
        },
      ],
    },
  };
}

const AboutPage = async ({params}) => {
  const { lang } = await params;

  return (
    <>
      <AboutHero lang={lang} />
      
      <AboutContent lang={lang} />
      
      <AboutWhyChooseUs lang={lang} />
      
      <CTASection lang={lang} />
    </>
  )
}

export default AboutPage;