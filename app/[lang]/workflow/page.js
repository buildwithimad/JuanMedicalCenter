import WorkflowContent from '@/components/Workflow/WorkflowContent';
import WorkflowHero from '@/components/Workflow/WorkflowHero'
import React from 'react'

// --- DYNAMIC SEO FOR WORKFLOW PAGE ---
export async function generateMetadata({ params }) {
  const { lang } = await params;
  
  const seo = {
    en: {
      title: "Our Workflow",
      description: "Discover our systematic 5-step process for healthcare staffing, from needs analysis to quality assurance and monitoring.",
    },
    ar: {
      title: "آلية العمل",
      description: "اكتشف عمليتنا المنهجية المكونة من 5 خطوات لتوظيف الكوادر الصحية، بدءاً من تحليل الاحتياجات وحتى ضمان الجودة والمراقبة.",
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
          alt: 'Juan Medical Operational Workflow',
        },
      ],
    },
  };
}

const WorkflowPage = async ({ params }) => {
  const { lang } = await params;

  return (
    <>
      <WorkflowHero lang={lang} />
      <WorkflowContent lang={lang} />
    </>
  )
}

export default WorkflowPage;