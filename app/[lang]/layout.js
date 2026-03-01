import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

const validLangs = ["en", "ar"];


export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  
  // Only allow 'en' and 'ar' languages
  if (!validLangs.includes(lang)) {
    notFound(); //
  }
  
  const isArabic = lang === "ar";

  return (
    <div
      lang={lang}
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen"
    >
        <Navbar lang={lang} />
      {children}
      <Footer lang={lang} />
    </div>
  );
}