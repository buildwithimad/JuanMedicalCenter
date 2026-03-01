import Link from "next/link";
import Image from "next/image";
import ScrollBasedAnimation from "@/components/Ui/ScrollBasedAnimation";

export const metadata = {
  title: "404 - Page Not Found | Juan Medical",
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen bg-[#1e635f] overflow-hidden flex items-center justify-center">
      
      {/* SMOOTH GEOMETRIC WATERMARKS (Replaces heavy gradients and blurs) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute w-[800px] h-[800px] bg-white/[0.04] rounded-full transform -translate-x-[20%] -translate-y-[20%]" />
        <div className="absolute w-[600px] h-[600px] bg-black/[0.04] rounded-[100px] transform rotate-45 translate-x-[60%] translate-y-[40%]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        
        {/* 404 Number */}
        <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
          <div className="relative mb-6">
            <h1 className="text-[10rem] sm:text-[14rem] lg:text-[16rem] font-extrabold text-white leading-none tracking-tight">
              404
            </h1>
            {/* Elegant Brand Accent Dot instead of a heavy bar */}
            <div className="absolute bottom-4 right-2 sm:right-6 w-6 h-6 sm:w-10 sm:h-10 bg-[#8bc34a] rounded-full" />
          </div>
        </ScrollBasedAnimation>

        {/* Subtitle */}
        <ScrollBasedAnimation direction="up" delay={0.2} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide">
            Page Not Found
          </h2>
        </ScrollBasedAnimation>

        {/* Description */}
        <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
          <p className="text-lg sm:text-xl text-white/80 max-w-lg mb-12 leading-relaxed font-light mx-auto">
            We couldn't find the page you were looking for. It might have been moved, or the URL might be incorrect.
          </p>
        </ScrollBasedAnimation>

        {/* Back to Home Button */}
        <ScrollBasedAnimation direction="up" delay={0.4} duration={0.6}>
          <Link 
            href="/en"
            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-[#1e635f] font-bold text-lg rounded-full hover:bg-[#8bc34a] hover:text-white transition-colors duration-300 active:scale-95"
          >
            Back to Home
          </Link>
        </ScrollBasedAnimation>

        {/* Decorative Logo */}
        <ScrollBasedAnimation direction="up" delay={0.5} duration={0.6}>
          <div className="mt-24 relative w-40 h-16 sm:w-48 sm:h-20">
            <Image
              src="/Logo.png"
              alt="Juan Medical Logo"
              fill
              className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </ScrollBasedAnimation>

      </div>
    </section>
  );
}