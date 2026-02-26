import ContactUs from '@/components/Contact/Contact'
import React from 'react'

// --- DYNAMIC SEO FOR CONTACT PAGE ---
export async function generateMetadata({ params }) {
  const { lang } = await params;
  
  const seo = {
    en: {
      title: "Contact Us",
      description: "Get in touch with Juan Medical Company. Reach out via phone, email, or visit our office in Riyadh for professional nursing services.",
    },
    ar: {
      title: "تواصل معنا",
      description: "تواصل مع شركة جوان الطبية. يمكنك الاتصال بنا عبر الهاتف أو البريد الإلكتروني أو زيارة مكتبنا في الرياض لخدمات التمريض الاحترافية.",
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
          alt: 'Juan Medical Contact Information',
        },
      ],
    },
  };
}

const ContactPage = async ({ params }) => {
  const { lang } = await params;

  return (
    <main>
      <ContactUs lang={lang} />
    </main>
  )
}

export default ContactPage;