'use client';

import React, { useState } from 'react';
import ScrollBasedAnimation from '@/components/Ui/ScrollBasedAnimation';

export default function ContactUs({ lang }) {
  const isRtl = lang === 'ar';
  
  // FORM STATES
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const content = {
    en: {
      title: "Contact Us.",
      subtitle: "We at Juan listen to you and fulfill your needs.",
      callUs: "Call Us",
      emailUs: "Email Us",
      visitUs: "Visit Us",
      phone: "0505220117",
      email: "juancksa@gmail.com",
      address: "Riyadh, Al-Muhammadiyah, Takhassusi Street",
      form: {
        name: "Your Name",
        phone: "Phone Number",
        service: "Service Needed",
        selectService: "Select a service",
        services: [
          "Specialized Nursing (ICU, ER, etc.)",
          "Nursing Operation & Outsourcing",
          "Emergency & Shift Coverage",
          "Licensing & Compliance Management",
          "Training & Professional Development"
        ],
        message: "How can we help?",
        submit: "Send Message",
        sending: "Sending...",
        error: "Something went wrong. Please try again.",
        successTitle: "Message Sent!",
        successDesc: "Thank you for reaching out. Our team will contact you shortly."
      }
    },
    ar: {
      title: "تواصل معنا.",
      subtitle: "نحن في جوان نستمع إليك ونلبي احتياجاتك.",
      callUs: "اتصل بنا",
      emailUs: "البريد الإلكتروني",
      visitUs: "تفضل بزيارتنا",
      phone: "0505220117",
      email: "juancksa@gmail.com",
      address: "الرياض، المحمدية، شارع التخصصي",
      form: {
        name: "الاسم",
        phone: "رقم الجوال",
        service: "الخدمة المطلوبة",
        selectService: "اختر الخدمة",
        services: [
          "التمريض المتخصص (العناية، الطوارئ، الخ)",
          "تشغيل وإسناد خدمات التمريض",
          "تغطية الطوارئ والمناوبات",
          "إدارة التراخيص والامتثال",
          "التدريب والتطوير المهني"
        ],
        message: "كيف يمكننا مساعدتك؟",
        submit: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        error: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        successTitle: "تم إرسال الرسالة!",
        successDesc: "شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن."
      }
    }
  };

  const t = content[lang] || content.en;

  // HANDLERS
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  // ICONS
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-[#1e635f]"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
  );
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-[#1e635f]"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
  );
  const PinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8 text-[#1e635f]"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
  );

  return (
    <section dir={isRtl ? 'rtl' : 'ltr'} className="w-full bg-[#eef3f2]">
      
      {/* HEADER AREA */}
      <div className="relative w-full bg-[#1e635f] pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
          <div className="absolute w-[800px] h-[800px] bg-white/[0.04] rounded-full transform -translate-x-[20%] -translate-y-[30%]" />
          <div className="absolute w-[600px] h-[600px] bg-black/[0.04] rounded-[100px] transform rotate-45 translate-x-[60%] translate-y-[10%]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ScrollBasedAnimation direction="up" delay={0.1} duration={0.6}>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-wide mb-6">{t.title}</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl">{t.subtitle}</p>
          </ScrollBasedAnimation>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* INFO SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <ScrollBasedAnimation direction="up" delay={0.2} duration={0.5}>
              <div className="flex flex-col gap-3 group">
                <div className="flex items-center gap-4"><PhoneIcon /><h3 className="text-2xl font-bold text-[#1e635f]">{t.callUs}</h3></div>
                <a href={`tel:${t.phone}`} className="text-xl text-slate-600 pl-12 rtl:pl-0 rtl:pr-12 hover:text-[#8bc34a] transition-colors"><span dir="ltr">{t.phone}</span></a>
              </div>
            </ScrollBasedAnimation>
            <ScrollBasedAnimation direction="up" delay={0.3} duration={0.5}>
              <div className="flex flex-col gap-3 group">
                <div className="flex items-center gap-4"><MailIcon /><h3 className="text-2xl font-bold text-[#1e635f]">{t.emailUs}</h3></div>
                <a href={`mailto:${t.email}`} className="text-xl text-slate-600 pl-12 rtl:pl-0 rtl:pr-12 hover:text-[#8bc34a] transition-colors">{t.email}</a>
              </div>
            </ScrollBasedAnimation>
            <ScrollBasedAnimation direction="up" delay={0.4} duration={0.5}>
              <div className="flex flex-col gap-3 group">
                <div className="flex items-center gap-4"><PinIcon /><h3 className="text-2xl font-bold text-[#1e635f]">{t.visitUs}</h3></div>
                <p className="text-xl text-slate-600 pl-12 rtl:pl-0 rtl:pr-12 leading-relaxed">{t.address}</p>
              </div>
            </ScrollBasedAnimation>
          </div>

          {/* FORM SIDE */}
          <div className="lg:col-span-7 relative min-h-[500px]">
            {status === 'success' ? (
              // SUCCESS VIEW
              <div className="h-full w-full flex flex-col justify-center items-center text-center bg-white p-12 transform-gpu transition-all duration-700 animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-[#8bc34a] rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-[#1e635f] mb-4">{t.form.successTitle}</h2>
                <p className="text-xl text-slate-500 font-light max-w-sm">{t.form.successDesc}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-[#1e635f] cursor-pointer font-semibold border-b border-[#1e635f] hover:text-[#8bc34a] hover:border-[#8bc34a] transition-all">
                  {isRtl ? 'إرسال رسالة أخرى' : 'Send another message'}
                </button>
              </div>
            ) : (
              // FORM VIEW
              <ScrollBasedAnimation direction="up" delay={0.3} duration={0.6}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 opacity-100 transition-opacity duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-500 uppercase px-1">{t.form.name}</label>
                      <input name="name" value={formData.name} onChange={handleChange} type="text" required className="w-full bg-white px-5 py-4 text-slate-800 text-lg focus:outline-none border-b-2 border-transparent focus:border-[#1e635f] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-500 uppercase px-1">{t.form.phone}</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required dir="ltr" className={`w-full bg-white px-5 py-4 text-slate-800 text-lg focus:outline-none border-b-2 border-transparent focus:border-[#1e635f] transition-all ${isRtl ? 'text-right' : 'text-left'}`} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-500 uppercase px-1">{t.form.service}</label>
                    <div className="relative">
                      <select name="service" value={formData.service} onChange={handleChange} required className="w-full bg-white px-5 py-4 text-slate-800 text-lg appearance-none focus:outline-none border-b-2 border-transparent focus:border-[#1e635f] transition-all cursor-pointer">
                        <option value="" disabled>{t.form.selectService}</option>
                        {t.form.services.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
                      </select>
                      <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 ${isRtl ? 'left-5' : 'right-5'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-500 uppercase px-1">{t.form.message}</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4" required className="w-full bg-white px-5 py-4 text-slate-800 text-lg focus:outline-none border-b-2 border-transparent focus:border-[#1e635f] transition-all resize-none"></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 font-medium px-1 animate-pulse">{t.form.error}</p>
                  )}

                  <div className="mt-4 flex justify-end">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className={`w-full md:w-auto px-10 py-4 cursor-pointer text-white text-lg font-bold rounded-full transition-all flex items-center justify-center gap-3 ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#1e635f] hover:bg-[#154643]'}`}
                    >
                      {status === 'loading' && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
                      {status === 'loading' ? t.form.sending : t.form.submit}
                    </button>
                  </div>
                </form>
              </ScrollBasedAnimation>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}