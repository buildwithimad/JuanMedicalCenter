import React from 'react'
import ServicesHero from '@/components/Services/ServicesHero'
import ServicesContent from '@/components/Services/ServicesContent'
import CTASection from '@/components/Ui/CTASection';

// --- DYNAMIC SEO FOR SERVICES PAGE ---
export async function generateMetadata({ params }) {
  const { lang } = await params;
  
  const seo = {
    en: {
      title: "Our Services",
      description: "Explore our specialized nursing services, healthcare operation, and medical staffing solutions for hospitals across Saudi Arabia.",
    },
    ar: {
      title: "خدماتنا",
      description: "استكشف خدمات التمريض المتخصصة، تشغيل المرافق الصحية، وحلول الكوادر الطبية للمستشفيات في جميع أنحاء المملكة العربية السعودية.",
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
          url: '/LogoFull.png',
          width: 1200,
          height: 630,
          alt: 'Juan Medical Specialized Services',
        },
      ],
    },
  };
}

const ServicesPage = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <ServicesHero lang={lang} />
      <ServicesContent lang={lang}/>
      <CTASection lang={lang} />
    </>
  )
}

export default ServicesPage;