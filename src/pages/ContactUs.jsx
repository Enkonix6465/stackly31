import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaComments, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import contacthero from '../assets/contacthero.mp4'; 
import formImg from '../assets/form.jpeg';
import help1 from '../assets/help1.jpeg';
import help2 from '../assets/help2.jpeg';
import help3 from '../assets/help3.jpeg';
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const faqs = [
  {
    question: {
      en: 'What types of AI solutions do you provide?',
      ar: 'ما أنواع حلول الذكاء الاصطناعي التي تقدمونها؟',
      he: 'אילו סוגי פתרונות בינה מלאכותית אתם מספקים?'
    },
    answer: {
      en: 'We deliver AI-powered chatbots, automation tools, vision systems, content generators, analytics, and natural language solutions. See our Services page for more.',
      ar: 'نقدم روبوتات دردشة مدعومة بالذكاء الاصطناعي، أدوات أتمتة، أنظمة رؤية، مولدات محتوى، تحليلات، وحلول لغة طبيعية. راجع صفحة الخدمات لمزيد من التفاصيل.',
      he: 'אנו מספקים צ׳אטבוטים, כלי אוטומציה, מערכות ראייה, מחוללי תוכן, אנליטיקה ופתרונות שפה טבעית. ראו עמוד שירותים.'
    }
  },
  {
    question: {
      en: 'How do I request a personalized AI solution for my company?',
      ar: 'كيف أطلب حلاً مخصصاً للذكاء الاصطناعي لشركتي؟',
      he: 'איך מבקשים פתרון AI מותאם אישית לעסק?'
    },
    answer: {
      en: 'Reach out via our contact form or phone. Our team will review your needs and recommend a custom AI approach.',
      ar: 'تواصل معنا عبر نموذج الاتصال أو الهاتف. سيقوم فريقنا بمراجعة احتياجاتك واقتراح حل ذكاء اصطناعي مخصص.',
      he: 'פנו אלינו בטופס או בטלפון. הצוות שלנו יבחן את הצרכים שלכם וימליץ על פתרון מותאם.'
    }
  },
  {
    question: {
      en: 'Is technical support available for your AI products?',
      ar: 'هل يتوفر دعم فني لمنتجات الذكاء الاصطناعي الخاصة بكم؟',
      he: 'האם יש תמיכה טכנית למוצרי הבינה המלאכותית שלכם?'
    },
    answer: {
      en: 'Yes, we offer onboarding help, troubleshooting, and ongoing support for all our AI offerings.',
      ar: 'نعم، نقدم المساعدة في البدء، وحل المشكلات، والدعم المستمر لجميع منتجات الذكاء الاصطناعي لدينا.',
      he: 'כן, אנו מספקים עזרה בהטמעה, פתרון תקלות ותמיכה שוטפת.'
    }
  },
  {
    question: {
      en: 'How do you protect my data and privacy?',
      ar: 'كيف تحمون بياناتي وخصوصيتي؟',
      he: 'איך אתם מגנים על המידע והפרטיות שלי?'
    },
    answer: {
      en: 'We use advanced security measures, encryption, and follow strict compliance standards to safeguard your information.',
      ar: 'نستخدم تدابير أمان متقدمة وتشفير ونتبع معايير امتثال صارمة لحماية معلوماتك.',
      he: 'אנו משתמשים באמצעי אבטחה מתקדמים, הצפנה ותקני תאימות מחמירים.'
    }
  },
  {
    question: {
      en: 'Can your AI tools work with my current software?',
      ar: 'هل يمكن لأدوات الذكاء الاصطناعي الخاصة بكم العمل مع برامجي الحالية؟',
      he: 'האם כלי הבינה המלאכותית שלכם עובדים עם התוכנה שלי?'
    },
    answer: {
      en: 'Absolutely. Our AI solutions are built for seamless integration with existing platforms and custom systems using APIs.',
      ar: 'بكل تأكيد. حلول الذكاء الاصطناعي لدينا مصممة للاندماج السلس مع الأنظمة والمنصات الحالية باستخدام واجهات برمجة التطبيقات.',
      he: 'בהחלט. הפתרונות שלנו בנויים להשתלב בקלות עם מערכות קיימות באמצעות APIs.'
    }
  }
];

const Contact = () => {
  const { language, isRTL } = useLanguage();
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  // Query section state
  const [askQuery, setAskQuery] = useState('');
  const [askQuerySent, setAskQuerySent] = useState(false);
  // Newsletter section state
  const [newsletter, setNewsletter] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);
  const { theme } = useTheme();

  const handleSupportClick = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Query section handlers
  const handleAskQueryChange = (e) => setAskQuery(e.target.value);
  const handleAskQuerySubmit = (e) => {
    e.preventDefault();
    setAskQuerySent(true);
    setAskQuery('');
    setTimeout(() => setAskQuerySent(false), 4000);
  };
  // Newsletter section handlers
  const handleNewsletterChange = (e) => setNewsletter(e.target.value);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSent(true);
    setNewsletter('');
    setTimeout(() => setNewsletterSent(false), 4000);
  };

  return (
    <div className="w-full flex flex-col" style={{background: '#111211', minHeight: '100vh'}} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Background Video */}
      <section className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 bg-[#111211] overflow-hidden" style={{height: '100vh'}}>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={contacthero} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#111211] bg-opacity-70 z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide">
            <span className="text-[#bfc1be]">{lang === 'ar' ? 'تواصل' : lang === 'he' ? 'צור' : 'Contact'} </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              {lang === 'ar' ? 'معنا' : lang === 'he' ? 'קשר' : 'Us'}
            </span>
          </h1>
          <p className="text-white text-center text-lg max-w-2xl mx-auto">
            <div className="text-center">
              {lang === 'ar'
                ? 'هل تحتاج إلى خبير؟ اترك معلوماتك وسنتواصل معك قريباً.'
                : lang === 'he'
                ? 'צריך מומחה? השאר פרטים ונחזור אליך בקרוב.'
                : 'Need an expert? You are more than welcomed to leave your contact info and we will be in touch shortly.'}
            </div>
          </p>
        </div>
      </section>

      {/* Background Section with Gradient */}
      <section className="w-full" style={{background: '#000000'}}>
        {/* Modern Contact Form Section */}
        <section ref={formRef} className="w-full flex flex-col shadow-xl overflow-hidden" style={{background: '#000000'}}>
          {/* Contact Form Only - Full Width */}
          <div className={`w-full flex flex-col justify-start p-8 md:p-12 ${theme === 'dark' ? '' : 'bg-white'}`}>
            <h2 className={`text-3xl font-bold mb-2 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{lang === 'ar' ? 'استفسارات' : lang === 'he' ? 'פניות' : 'General'} </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
                }}
              >
                {lang === 'ar' ? 'عامة' : lang === 'he' ? 'כלליות' : 'Inquiries'}
              </span>
            </h2>
            <p className={`text-center mb-6 text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">
                {lang === 'ar'
                  ? 'أدخل بيانات الاتصال والرسالة أدناه'
                  : lang === 'he'
                  ? 'הזן את פרטי הקשר וההודעה שלך למטה'
                  : 'Enter your contact details and message below'}
              </div>
            </p>
            <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{lang === 'ar' ? 'اسمك' : lang === 'he' ? 'השם שלך' : 'Your Name'}</label>
                <input 
                  type="text" 
                  placeholder={lang === 'ar' ? 'جون ترانجيلي' : lang === 'he' ? 'ג׳ון טראנג׳לי' : 'John Trangely'} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211]" 
                  required 
                />
              </div>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{lang === 'ar' ? 'بريدك الإلكتروني' : lang === 'he' ? 'האימייל שלך' : 'Your Email'}</label>
                <input 
                  type="email" 
                  placeholder={lang === 'ar' ? 'hello@nurency.com' : lang === 'he' ? 'hello@nurency.com' : 'hello@nurency.com'} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211]" 
                  required 
                />
              </div>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{lang === 'ar' ? 'الموضوع' : lang === 'he' ? 'נושא' : 'Your Subject'}</label>
                <input 
                  type="text" 
                  placeholder={lang === 'ar' ? 'أريد توظيفك بسرعة' : lang === 'he' ? 'אני רוצה להעסיק אותך במהירות' : 'I want to hire you quickly'} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211]" 
                  required 
                />
              </div>
              <div>
                <label className={`block font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{lang === 'ar' ? 'رسالتك' : lang === 'he' ? 'הודעה' : 'Message'}</label>
                <textarea 
                  placeholder={lang === 'ar' ? 'اكتب رسالتك هنا' : lang === 'he' ? 'כתוב כאן את ההודעה שלך' : 'Write here your message'} 
                  className="w-full border border-[#8e878a] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] focus:border-[#04D9FF] text-[#111211] resize-none" 
                  rows={4} 
                  required 
                />
              </div>
              <div className="flex items-start gap-2 mt-2">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mt-1 w-4 h-4 text-[#04D9FF] border-[#8e878a] rounded focus:ring-[#04D9FF] focus:ring-2" 
                  required 
                />
                <label htmlFor="privacy" className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {lang === 'ar'
                    ? 'بتقديم هذا النموذج، أنت توافق على '
                    : lang === 'he'
                    ? 'בשליחת טופס זה, אתה מסכים ל'
                    : 'By submitting this form, you agree to the '}
                  <a href="#" className="text-[#04D9FF] underline hover:text-[#27bdb5]">
                    {lang === 'ar' ? 'سياسة الخصوصية' : lang === 'he' ? 'מדיניות הפרטיות' : 'Privacy Policy'}
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="mt-2 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
                }}
              >
                {lang === 'ar' ? 'إرسال الرسالة' : lang === 'he' ? 'שלח הודעה' : 'Send Message'}
              </button>
            </form>
            {submitted && (
              <div className="bg-[#04D9FF] bg-opacity-20 text-[#12716c] px-4 py-2 rounded mt-4 text-center font-semibold transition-all">
                {lang === 'ar' ? 'شكراً! تم إرسال رسالتك.' : lang === 'he' ? 'תודה! ההודעה נשלחה.' : 'Thank you! Your message has been sent.'}
              </div>
            )}
          </div>
        </section>
      </section>

      {/* FAQ Section: use specified linear gradient as background */}
      <section
        className="w-full py-20"
        style={{
          background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
        }}
      >
        <h2 className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {lang === 'ar' ? 'الأسئلة الشائعة' : lang === 'he' ? 'שאלות נפוצות' : 'Frequently Asked Questions'}
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-4 items-center">
          {/* Left: Image (visible on md+) */}
          <div className="hidden md:flex md:w-1/2 w-full items-center justify-center">
            <img src={formImg} alt="FAQ Visual" className="object-cover w-full max-w-md rounded-2xl shadow-xl" style={{maxHeight: '520px', minHeight: '400px', height: '100%'}} />
          </div>
          {/* Right: FAQ Items (all 6) */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            {faqs.slice(0, 6).map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none transform transition-transform duration-200 hover:scale-[1.02]"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <h3 className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{faq.question[lang]}</h3>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transform transition-all duration-200 hover:scale-110"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
                    }}
                  >
                    {openIndex === idx ? (
                      <span className="text-white font-bold text-lg transform transition-transform duration-200">-</span>
                    ) : (
                      <span className="text-white font-bold text-lg transform transition-transform duration-200">+</span>
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`} style={{transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'}}>
                  <div className={`mt-4 pt-4 border-t transform transition-transform duration-500 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}> 
                    <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{faq.answer[lang]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How can we help? section: white bg/black text in white theme, card images white bg in white theme */}
      <section className={`w-full py-16 ${theme === 'dark' ? '' : 'bg-white'}`} style={theme === 'dark' ? {background: '#111211'} : {}}>
        <h2 className={`text-3xl md:text-4xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
            {lang === 'ar' ? 'كيف يمكننا ' : lang === 'he' ? 'איך נוכל ' : 'How can we '}
          </span>
          <span style={{ color: 'rgb(219, 158, 111)' }}>
            {lang === 'ar' ? 'مساعدتك؟' : lang === 'he' ? 'לעזור?' : 'help?'}
          </span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Visit Us */}
          <div className={`flex flex-col items-center text-center p-8 border-r md:border-r md:border-[#222] last:border-none ${theme === 'dark' ? '' : 'bg-white'}`}>
            <div className={`w-14 h-14 mb-4 object-contain rounded-full flex items-center justify-center ${theme === 'dark' ? '' : 'bg-white'}`}>
              <img src={help1} loading="lazy" alt="Visit Us" className="w-14 h-14 object-contain rounded-lg" />
            </div>
            <h3
              className="text-lg font-bold mb-2 tracking-wider"
              style={{ color: 'rgb(219, 158, 111)' }}
            >
              {lang === 'ar' ? 'زرنا' : lang === 'he' ? 'בקר אותנו' : 'VISIT US'}
            </h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">
                {lang === 'ar'
                  ? 'قم بزيارة مركز الذكاء الاصطناعي لدينا لاستكشاف أحدث الحلول والتحدث مع فريقنا حول أهدافك الرقمية.'
                  : lang === 'he'
                  ? 'בוא למרכז הבינה המלאכותית שלנו, גלה פתרונות חדשים ודבר עם הצוות על היעדים הדיגיטליים שלך.'
                  : 'Stop by our AI experience hub to explore the latest solutions and talk with our team about your digital goals.'}
              </div>
            </p>
            <p
              className={`font-bold ${theme === 'dark' ? '' : 'text-black'}`}
              style={{ color: 'rgb(219, 158, 111)' }}
            >
              {lang === 'ar'
                ? '٢ شارع إليزابيث، لندن، المملكة المتحدة'
                : lang === 'he'
                ? 'אליזבת 2, לונדון, בריטניה'
                : '2 Elizabeth St. London, UK'}
            </p>
          </div>
          {/* Call Us */}
          <div className={`flex flex-col items-center text-center p-8 border-r md:border-r md:border-[#222] last:border-none ${theme === 'dark' ? '' : 'bg-white'}`}>
            <div className={`w-14 h-14 mb-4 object-contain rounded-full flex items-center justify-center ${theme === 'dark' ? '' : 'bg-white'}`}>
              <img src={help2} loading="lazy" alt="Call Us" className="w-14 h-14 object-contain rounded-lg" />
            </div>
            <h3
              className="text-lg font-bold mb-2 tracking-wider"
              style={{ color: 'rgb(219, 158, 111)' }}
            >
              {lang === 'ar' ? 'اتصل بنا' : lang === 'he' ? 'התקשר אלינו' : 'CALL US'}
            </h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">
                {lang === 'ar'
                  ? 'اتصل بخبرائنا للحصول على نصائح مخصصة ومعرفة كيف يمكن للذكاء الاصطناعي تحسين عملياتك وزيادة الكفاءة.'
                  : lang === 'he'
                  ? 'התקשר למומחים שלנו לייעוץ מותאם ולגלות איך AI יכול לשפר את התהליכים שלך.'
                  : 'Call our experts for tailored advice and to learn how AI can streamline your operations and boost efficiency.'}
              </div>
            </p>
            <p
              className={`font-bold ${theme === 'dark' ? '' : 'text-black'}`}
              style={{ color: 'rgb(219, 158, 111)' }}
            >
              +44 (0) 203 116 7711
            </p>
          </div>
          {/* Contact Us */}
          <div className={`flex flex-col items-center text-center p-8 ${theme === 'dark' ? '' : 'bg-white'}`}>
            <div className={`w-14 h-14 mb-4 object-contain rounded-full flex items-center justify-center ${theme === 'dark' ? '' : 'bg-white'}`}>
              <img src={help3} loading="lazy" alt="Contact Us" className="w-14 h-14 object-contain rounded-lg" />
            </div>
            <h3
              className="text-lg font-bold mb-2 tracking-wider"
              style={{ color: 'rgb(219, 158, 111)' }}
            >
              {lang === 'ar' ? 'تواصل معنا' : lang === 'he' ? 'צור קשר' : 'CONTACT US'}
            </h3>
            <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <div className="text-justify">
                {lang === 'ar'
                  ? 'شاركنا أفكار مشروعك وسنعود إليك بتوصيات مخصصة وخطواتك التالية في رحلة الذكاء الاصطناعي.'
                  : lang === 'he'
                  ? 'שתף אותנו ברעיונות לפרויקט ונחזור אליך עם המלצות מותאמות והצעדים הבאים.'
                  : 'Share your project ideas and we’ll get back to you with personalized recommendations and next steps for your AI journey.'}
              </div>
            </p>
            <p
              className={`font-bold ${theme === 'dark' ? '' : 'text-black'}`}
              style={{ color: 'rgb(219, 158, 111)' }}
            >
              stackly.com
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="w-full pt-8 pb-0"
        style={{
          background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
          margin: 0
        }}
      >
        <h2 className={`text-3xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-black' : 'text-white'}`}>
          {lang === 'ar' ? 'اعثر علينا' : lang === 'he' ? 'מצא אותנו' : 'Find '}<span className="text-white">{lang === 'ar' ? '' : lang === 'he' ? '' : 'Us'}</span>
        </h2>
        <div className="w-full" style={{height: '60vh'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5!2d31.2175!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzM5LjgiTiAzMcKwMTMnMDMuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
            width="100%"
            height="100%"
            style={{border: 0, width: '100%', height: '100%', display: 'block'}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </section>

      {/* Newsletter section: white bg/black text in white theme */}
      <section className={`w-full py-12 ${theme === 'dark' ? '' : 'bg-white'}`} style={theme === 'dark' ? {background: '#111211'} : {}}>
        <section className={`w-full rounded-2xl shadow-lg p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
            {lang === 'ar' ? 'اشترك في' : lang === 'he' ? 'הירשם ל' : 'Subscribe to our AI '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              {lang === 'ar' ? 'النشرة الإخبارية للذكاء الاصطناعي' : lang === 'he' ? 'ניוזלטר הבינה המלאכותית שלנו' : 'Newsletter'}
            </span>
          </h2>
          <p className={`mb-4 text-center ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
            <div className="text-justify">
              {lang === 'ar'
                ? 'احصل على آخر التحديثات واتجاهات الذكاء الاصطناعي والعروض الحصرية من فريقنا. لا رسائل مزعجة، فقط رؤى ذكية!'
                : lang === 'he'
                ? 'קבל עדכונים, טרנדים והצעות בלעדיות מהצוות שלנו. בלי ספאם, רק תובנות חכמות!'
                : 'Get the latest updates, AI trends, and exclusive offers from our team. No spam, just smart insights!'}
            </div>
          </p>
          <form className={`w-full flex flex-col sm:flex-row gap-4 items-center justify-center ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`} onSubmit={handleNewsletterSubmit}>
            <input type="email" className={`flex-1 border border-[#8e878a] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#04D9FF] ${theme === 'dark' ? 'bg-[#111211] text-[#bfc1be]' : 'bg-white text-black'}`} placeholder="Your email address" value={newsletter} onChange={handleNewsletterChange} required />
            <button
              type="submit"
              className="text-white font-bold px-6 py-2 rounded-lg shadow transition-all"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              {lang === 'ar' ? 'اشترك' : lang === 'he' ? 'הירשם' : 'Subscribe'}
            </button>
          </form>
          {newsletterSent && (
            <div className={`bg-[#04D9FF] bg-opacity-20 px-4 py-2 rounded mt-4 text-center font-semibold transition-all ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>
              {lang === 'ar' ? 'شكراً لاشتراكك!' : lang === 'he' ? 'תודה שנרשמת!' : 'Thank you for subscribing!'}
            </div>
          )}
        </section>
      </section>
    </div>
  );
};

export default Contact;