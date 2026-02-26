import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
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