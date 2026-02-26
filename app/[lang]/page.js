import Compliance from '@/components/Home/Compliance';
import HeroSection from '@/components/Home/Hero'
import MissionVision from '@/components/Home/MissionVission';
import OurServices from '@/components/Home/OurServices';
import OurValues from '@/components/Home/OurValue';
import OurWorkflow from '@/components/Home/OurWorkFlow';
import TargetPartners from '@/components/Home/TargetPartners';
import WhoWeAre from '@/components/Home/WhoWeAre';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import React from 'react'

// --- MASTER SEO FOR HOME PAGE ---
export async function generateMetadata({ params }) {
  const { lang } = await params;
  
  const seo = {
    en: {
      title: "Juan Medical | Professional Nursing & Healthcare Solutions KSA",
      description: "The leading partner in nursing services and medical staffing in Saudi Arabia. Providing licensed, high-efficiency staff for hospitals and health facilities.",
    },
    ar: {
      title: "جوان الطبية | حلول التمريض والكوادر الصحية المتخصصة",
      description: "الشريك الرائد في خدمات التمريض وتزويد الكوادر الطبية في المملكة العربية السعودية. نوفر طواقم مرخصة وعالية الكفاءة للمستشفيات والمنشآت الصحية.",
    }
  };

  const t = seo[lang] || seo.en;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${lang}`,
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}`,
      siteName: 'Juan Medical',
      images: [
        {
          url: '/LogoFull.png', // The high-res full logo you specified
          width: 1200,
          height: 630,
          alt: 'Juan Medical Company',
        },
      ],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/LogoFull.png'],
    },
  };
}

const HomePage = async ({ params }) => {
  const { lang } = await params;
  return (
   <main>
    <HeroSection lang={lang} />
    <WhoWeAre lang={lang} />
    <MissionVision lang={lang} />
    <OurValues lang={lang} />
    <OurServices lang={lang} />
    <WhyChooseUs lang={lang} />
    <OurWorkflow lang={lang} />
    <Compliance lang={lang} />
    <TargetPartners lang={lang} />
   </main>
  )
}

export default HomePage;