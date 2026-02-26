import { Montserrat, Cairo } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/Ui/LenisProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html
      className={`${montserrat.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-montserrat rtl:font-cairo">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}