import bankingPng from '../assets/banking.jpg';
import ecomersPng from '../assets/ecomers.jpg';
import realEstatePng from '../assets/real estate.jpg';
import travelPng from '../assets/travel.jpg';
import medicalPng from '../assets/medical.jpg';
import educationPng from '../assets/education.jpg';
import { motion } from "framer-motion";
import heroVideo from "../assets/imagehero.mp4";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import howItWorksImg from '../assets/Content & Code Generation1.webp';
import agentImg from '../assets/Content & Code Generation2.png';
import { FaRegHandshake, FaPencilRuler, FaCogs, FaLaptopCode, FaRocket } from 'react-icons/fa';
import blogCatTools from '../assets/blog-cat-tools.png';
import blogCatTrends from '../assets/blog-cat-trends.png';
import blogCatTutorial from '../assets/blog-cat-tutorial.png';
import blogCatCase from '../assets/blog-cat-case.png';
import blogCatIndustry from '../assets/blog-cat-industry.png';
import blogCatThought from '../assets/blog-cat-thought.png';


// Global styles for animations and effects
const styleSheet = `
  @keyframes wave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .benefit-glow {
    box-shadow: 0 4px 24px 0 #19e6f755, 0 1.5px 8px 0 #0002;
    transition: box-shadow 0.4s, transform 0.4s;
  }
  .feature-card {
    transition: all 0.3s ease;
  }
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(25, 230, 247, 0.2);
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('automation-style')) {
  const style = document.createElement('style');
  style.id = 'automation-style';
  style.innerHTML = styleSheet;
  document.head.appendChild(style);
}

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

// 1. HERO SECTION
const heroTranslations = {
  title: {
    en: "AI Chatbots & Assistants",
    ar: "الدردشة الذكية والمساعدون الذكيون",
    he: "צ'אטבוטים ועוזרים חכמים"
  },
  desc: {
    en: "Deliver instant, personalized support and automate customer interactions with intelligent AI chatbots and assistants.",
    ar: "قدّم دعماً فورياً وشخصياً وحقق أتمتة للتفاعلات مع العملاء باستخدام روبوتات الدردشة والمساعدين الذكيين.",
    he: "ספק תמיכה מיידית ומותאמת אישית ואוטומציה לאינטראקציות עם לקוחות בעזרת צ'אטבוטים ועוזרים חכמים."
  },
  button: {
    en: "Explore Features",
    ar: "استكشف الميزات",
    he: "גלה תכונות"
  }
};
const HeroSection = ({ theme, lang }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={fadeUp}
    className="relative text-white py-20 text-center shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 bg-black min-h-[700px]"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={heroVideo}
      style={{ opacity: 0.7, filter: 'brightness(1.4)' }}
    />
    <div className="bg-black bg-opacity-60 absolute inset-0"></div>
    <div className="relative z-10 pt-20">
        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold mb-6 text-white">
          {heroTranslations.title[lang]}
        </motion.h1>
      <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
        {heroTranslations.desc[lang]}
      </motion.p>
      <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              const featuresSection = document.getElementById('features-section');
              featuresSection.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.75rem',
              fontWeight: '600',
              fontSize: '1.125rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              border: 'none',
            }}
          >
            {heroTranslations.button[lang]}
          </button>
      </motion.div>
    </div>
  </motion.section>
);

// 2. HOW IT WORKS SECTION
const howItWorksTranslations = {
  process: { en: "PROCESS", ar: "العملية", he: "תהליך" },
  title: { en: "How It Works", ar: "كيف يعمل", he: "איך זה עובד" },
  steps: [
    { en: "Upload or Create", ar: "رفع أو إنشاء", he: "העלה או צור" },
    { en: "Edit & Enhance", ar: "تعديل وتحسين", he: "ערוך ושפר" },
    { en: "Generate AI Art", ar: "توليد فن بالذكاء الاصطناعي", he: "צור אמנות בינה מלאכותית" },
    { en: "Brand & Customize", ar: "تخصيص العلامة التجارية", he: "מיתוג והתאמה אישית" },
    { en: "Export & Share", ar: "تصدير ومشاركة", he: "ייצא ושתף" }
  ]
};
const HowItWorksSection = ({ theme, lang }) => (
  <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-gray-100'}`}>
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-[#312525] text-sm font-semibold mb-2 tracking-wider">{howItWorksTranslations.process[lang]}</div>
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{howItWorksTranslations.title[lang]}</h2>
      </div>
      <div className="relative flex flex-col items-center">
        {/* Horizontal line */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-black/70" style={{zIndex:0}}></div>
        <div className="flex w-full justify-between items-start relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaRegHandshake className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{howItWorksTranslations.steps[0][lang]}</div>
           </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaPencilRuler className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{howItWorksTranslations.steps[1][lang]}</div>
           </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaCogs className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{howItWorksTranslations.steps[2][lang]}</div>
           </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaLaptopCode className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{howItWorksTranslations.steps[3][lang]}</div>
           </div>
          {/* Step 5 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaRocket className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{howItWorksTranslations.steps[4][lang]}</div>
           </div>
        </div>
        {/* Dots on the line */}
        <div className="absolute top-16 left-0 w-full flex justify-between px-8" style={{zIndex:1}}>
          {[...Array(5)].map((_,i)=>(
            <div key={i} className="w-4 h-4 rounded-full bg-black border-2 border-white"></div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// 3. KEY FEATURES & BENEFITS SECTION (modern card layout)
const featuresTranslations = {
  title: { en: 'Features & Benefits', ar: 'الميزات والفوائد', he: 'תכונות ויתרונות' },
  desc: {
    en: "Our AI chatbots and assistants deliver instant, personalized support, automate routine tasks, and improve customer satisfaction across all channels. Integrate with websites, apps, and messaging platforms for seamless customer experiences. Benefit from advanced NLP, contextual memory, and real-time analytics to optimize every interaction.",
    ar: "روبوتات الدردشة والمساعدون الذكيون لدينا يقدمون دعماً فورياً وشخصياً، ويؤتمتون المهام الروتينية، ويحسنون رضا العملاء عبر جميع القنوات. دمج سلس مع المواقع والتطبيقات ومنصات الرسائل. استفد من معالجة اللغة الطبيعية المتقدمة، والذاكرة السياقية، والتحليلات الفورية لتحسين كل تفاعل.",
    he: "הצ'אטבוטים והעוזרים החכמים שלנו מספקים תמיכה מיידית ומותאמת אישית, ממטבים משימות שגרתיות ומשפרים את שביעות רצון הלקוחות בכל הערוצים. השתלב בקלות עם אתרים, אפליקציות ופלטפורמות מסרים. נצל NLP מתקדם, זיכרון הקשרי וניתוח בזמן אמת לאופטימיזציה של כל אינטראקציה."
  },
  features: [
    { en: 'Natural Language Processing', ar: 'معالجة اللغة الطبيعية', he: 'עיבוד שפה טבעית' },
    { en: 'Multi-Platform Integration', ar: 'تكامل متعدد المنصات', he: 'אינטגרציה רב-פלטפורמית' },
    { en: '24/7 Availability', ar: 'متوفر 24/7', he: 'זמינות 24/7' },
    { en: 'Contextual Memory', ar: 'ذاكرة سياقية', he: 'זיכרון הקשרי' },
    { en: 'Smart Escalation', ar: 'تصعيد ذكي', he: 'הסלמה חכמה' },
    { en: 'Analytics & Insights', ar: 'تحليلات ورؤى', he: 'אנליטיקה ותובנות' }
  ],
  bullets: [
    { en: '24/7 automated customer support', ar: 'دعم عملاء آلي 24/7', he: 'תמיכת לקוחות אוטומטית 24/7' },
    { en: 'Human-like conversations powered by NLP', ar: 'محادثات شبيهة بالبشر مدعومة بمعالجة اللغة الطبيعية', he: 'שיחות דמויות אדם מונעות NLP' },
    { en: 'Seamless integration with websites, apps, and messaging platforms', ar: 'تكامل سلس مع المواقع والتطبيقات ومنصات الرسائل', he: 'אינטגרציה חלקה עם אתרים, אפליקציות ופלטפורמות מסרים' },
    { en: 'Scalable to handle unlimited users and queries', ar: 'قابلية التوسع للتعامل مع عدد غير محدود من المستخدمين والاستفسارات', he: 'יכולת הרחבה לטיפול במשתמשים ושאילתות ללא הגבלה' }
  ]
};
const FeaturesBenefitsSection = ({ theme, lang }) => {
  return (
  <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{featuresTranslations.title[lang]}</h2>
           <p className={`text-xl mb-6 max-w-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{featuresTranslations.desc[lang]}</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            {featuresTranslations.bullets.map((b, i) => <li key={i}>{b[lang]}</li>)}
          </ul>
        </div>
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-20 pb-20 justify-items-center">
          {featuresTranslations.features.map((feature, idx) => (
            <div
              key={idx}
              className={`shadow-lg p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 min-w-[180px] min-h-[180px] relative ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
              style={{
                clipPath: 'polygon(50% 0%, 65% 15%, 90% 40%, 88% 70%, 80% 85%, 65% 95%, 50% 100%, 35% 95%, 20% 85%, 12% 70%, 10% 40%, 35% 15%)',
                boxShadow: '0 8px 32px 0 rgba(25,230,247,0.10)'
              }}
            >
              <div className={`font-bold text-xl w-full flex items-center justify-center text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{feature[lang]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. BENEFITS SECTION (modern two-column layout)

// 6. REAL LIFE USE CASES & APPLICATIONS SECTION
const useCasesTranslations = {
  title: { en: 'Real-Life Use Cases & Applications', ar: 'حالات الاستخدام والتطبيقات الواقعية', he: 'שימושים ויישומים אמיתיים' },
  desc: {
    en: "Explore how AI chatbots and assistants are transforming real-world business operations, customer service, and user engagement.",
    ar: "استكشف كيف تغير روبوتات الدردشة والمساعدون الذكيون عمليات الأعمال وخدمة العملاء وتفاعل المستخدمين في العالم الحقيقي.",
    he: "גלה כיצד צ'אטבוטים ועוזרים חכמים משנים את פעילות העסקים, שירות הלקוחות ומעורבות המשתמשים בעולם האמיתי."
  },
  useCases: [
    {
      icon: bankingPng,
      title: { en: 'Customer Support', ar: 'دعم العملاء', he: 'תמיכת לקוחות' },
      desc: { en: 'Automate FAQs, resolve issues, and provide instant help for users on any channel.', ar: 'أتمتة الأسئلة الشائعة، حل المشكلات، وتقديم المساعدة الفورية للمستخدمين على أي قناة.', he: 'הפוך שאלות נפוצות לאוטומטיות, פתר בעיות וספק עזרה מיידית בכל ערוץ.' }
    },
    {
      icon: ecomersPng,
      title: { en: 'Sales & Lead Generation', ar: 'المبيعات وتوليد العملاء', he: 'מכירות והפקת לידים' },
      desc: { en: 'Engage visitors, qualify leads, and guide customers through the buying process.', ar: 'تفاعل مع الزوار، أهل العملاء، ووجههم خلال عملية الشراء.', he: 'הפעל מבקרים, סנן לידים והדרך לקוחות בתהליך הרכישה.' }
    },
    {
      icon: realEstatePng,
      title: { en: 'Appointment & Booking', ar: 'المواعيد والحجوزات', he: 'קביעת פגישות והזמנות' },
      desc: { en: 'Schedule meetings, book services, and send reminders automatically.', ar: 'جدولة الاجتماعات، حجز الخدمات، وإرسال التذكيرات تلقائياً.', he: 'קבע פגישות, הזמן שירותים ושלח תזכורות אוטומטית.' }
    },
    {
      icon: travelPng,
      title: { en: 'Personalized Recommendations', ar: 'توصيات مخصصة', he: 'המלצות מותאמות אישית' },
      desc: { en: 'Suggest products, services, or content based on user preferences and history.', ar: 'اقترح منتجات أو خدمات أو محتوى بناءً على تفضيلات وسجل المستخدم.', he: 'הצע מוצרים, שירותים או תוכן לפי העדפות והיסטוריית המשתמש.' }
    }
  ]
};
const UseCasesSection = ({ theme, lang }) => {
  return (
    <section className="py-20 px-6" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}>
            {useCasesTranslations.title[lang]}
          </h2>
           <p className="text-lg text-white max-w-2xl mb-8 leading-relaxed">
            {useCasesTranslations.desc[lang]}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCasesTranslations.useCases.map((useCase, idx) => (
            <div key={idx} className="w-full bg-[linear-gradient(to_right,_#63342e,_#312525,_#d6ab88,_#c58d6a,_#9a644a,_#63342e,_#312525)] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-4 shadow-md">
                <img src={useCase.icon} loading="lazy" alt={useCase.title[lang]} className="w-10 h-10 object-contain" />
              </div>
              <div className="font-bold text-lg text-white mb-2">{useCase.title[lang]}</div>
              <div className="text-sm text-white leading-relaxed">{useCase.desc[lang]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. PRICING SECTION
const pricingTranslations = {
  title: { en: 'Pricing Plans', ar: 'خطط الأسعار', he: 'תוכניות תמחור' },
  mostPopular: { en: 'Most Popular', ar: 'الأكثر شيوعاً', he: 'הפופולרי ביותר' },
  plans: [
    {
      name: { en: 'Starter', ar: 'مبتدئ', he: 'מתחיל' },
      price: '$29',
      period: { en: '/month', ar: '/شهر', he: '/חודש' },
      desc: { en: 'For hobbyists & creators', ar: 'للهواة والمبدعين', he: 'לחובבים ויוצרים' },
      features: [
        { en: 'Basic Image Editing', ar: 'تحرير الصور الأساسي', he: 'עריכת תמונות בסיסית' },
        { en: 'Up to 200 designs/month', ar: 'حتى 200 تصميم/شهر', he: 'עד 200 עיצובים/חודש' },
        { en: 'Template Library Access', ar: 'الوصول إلى مكتبة القوالب', he: 'גישה לספריית תבניות' },
        { en: 'Standard Export Options', ar: 'خيارات تصدير قياسية', he: 'אפשרויות ייצוא סטנדרטיות' },
        { en: 'Email Support', ar: 'دعم عبر البريد الإلكتروني', he: 'תמיכה במייל' }
      ],
      popular: false
    },
    {
      name: { en: 'Professional', ar: 'محترف', he: 'מקצועי' },
      price: '$99',
      period: { en: '/month', ar: '/شهر', he: '/חודש' },
      desc: { en: 'For designers & small teams', ar: 'للمصممين والفرق الصغيرة', he: 'למעצבים וצוותים קטנים' },
      features: [
        { en: 'Advanced Editing Tools', ar: 'أدوات تحرير متقدمة', he: 'כלי עריכה מתקדמים' },
        { en: 'Unlimited designs', ar: 'تصاميم غير محدودة', he: 'עיצובים ללא הגבלה' },
        { en: 'AI Art Generation', ar: 'توليد فن بالذكاء الاصطناعي', he: 'יצירת אמנות בינה מלאכותית' },
        { en: 'Branding Automation', ar: 'أتمتة العلامة التجارية', he: 'אוטומציית מיתוג' },
        { en: 'Priority Support', ar: 'دعم أولوية', he: 'תמיכה מועדפת' },
        { en: 'Custom Templates', ar: 'قوالب مخصصة', he: 'תבניות מותאמות' }
      ],
      popular: true
    },
    {
      name: { en: 'Enterprise', ar: 'مؤسسة', he: 'ארגון' },
      price: 'Custom',
      period: { en: '', ar: '', he: '' },
      desc: { en: 'For agencies & organizations', ar: 'للوكالات والمؤسسات', he: 'לסוכנויות וארגונים' },
      features: [
        { en: 'Dedicated Account Manager', ar: 'مدير حساب مخصص', he: 'מנהל חשבון ייעודי' },
        { en: 'Custom Integrations', ar: 'تكاملات مخصصة', he: 'אינטגרציות מותאמות' },
        { en: 'On-premise Option', ar: 'خيار محلي', he: 'אפשרות מקומית' },
        { en: 'Advanced Security', ar: 'أمان متقدم', he: 'אבטחה מתקדמת' },
        { en: 'SLA Guarantee', ar: 'ضمان اتفاقية مستوى الخدمة', he: 'התחייבות SLA' },
        { en: '24/7 Phone Support', ar: 'دعم هاتفي 24/7', he: 'תמיכה טלפונית 24/7' },
        { en: 'Unlimited Exports', ar: 'تصدير غير محدود', he: 'ייצוא ללא הגבלה' }
      ],
      popular: false
    }
  ],
  getStarted: { en: 'Get Started', ar: 'ابدأ الآن', he: 'התחל עכשיו' },
  contactSales: { en: 'Contact Sales', ar: 'تواصل مع المبيعات', he: 'צור קשר עם מכירות' }
};
const PricingSection = ({ theme, lang }) => {
  return (
    <section id="pricing-section" className="py-20 px-6" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          {pricingTranslations.title[lang]}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingTranslations.plans.map((plan, index) => (
    <motion.div
              key={index}
              variants={fadeUp}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col h-full ${
                plan.popular 
                  ? 'border-[rgb(219,158,111)] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] -mt-8 z-10'
                  : 'border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]'
              } hover:scale-110 hover:shadow-2xl hover:shadow-[#19e6f7]/40`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full font-semibold text-sm" style={{
                  background: 'rgb(219, 158, 111)',
                  color: 'white',
                  border: 'none'
                }}>
                  {pricingTranslations.mostPopular[lang]}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 text-white`}>{plan.name[lang]}</h3>
                <p className="mb-4 text-white/80">{plan.desc[lang]}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold" style={{ color: 'rgb(219, 158, 111)' }}>{plan.price}</span>
                  <span className="ml-1 text-white/80">{plan.period[lang]}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2" style={{ background: 'rgb(219, 158, 111)' }}></div>
                    <span className="text-gray-300">{feature[lang]}</span>
                  </li>
                ))}
            </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-[rgb(219,158,111)] text-white hover:bg-[#179b8e]'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                {plan.name.en === "Enterprise" ? pricingTranslations.contactSales[lang] : pricingTranslations.getStarted[lang]}
              </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
  
);
};

// Main Component
const ctaTranslations = {
  title: { en: 'Empower Your Business with AI Chatbots', ar: 'عزز عملك بروبوتات الدردشة الذكية', he: 'העצם את העסק שלך עם צ׳אטבוטים חכמים' },
  desc: { en: 'Deliver instant, personalized support and automate customer interactions with intelligent AI chatbots and assistants.', ar: 'قدّم دعماً فورياً وشخصياً وحقق أتمتة للتفاعلات مع العملاء باستخدام روبوتات الدردشة والمساعدين الذكيين.', he: 'ספק תמיכה מיידית ומותאמת אישית ואוטומציה לאינטראקציות עם לקוחות בעזרת צ׳אטבוטים ועוזרים חכמים.' },
  button: { en: 'Launch Your Chatbot', ar: 'أطلق روبوت الدردشة الخاص بك', he: 'השק את הצ׳אטבוט שלך' }
};
const CTASection = ({ lang }) => (
  <section className={`py-16 px-4 w-full`} style={{background: 'white'}}>
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#312525]">{ctaTranslations.title[lang]}</h2>
      <p className={`text-lg mb-8 max-w-2xl text-black`}>
        {ctaTranslations.desc[lang]}
      </p>
      <a href="/contact" className="inline-block font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-200 text-white" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
        {ctaTranslations.button[lang]}
      </a>
    </div>
  </section>
);

const AIChatbotsAssistants = () => {
  const { theme } = useTheme();
  const { language, isRTL } = useLanguage();
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  return (
    <main className={`${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <HeroSection theme={theme} lang={lang} />
      <HowItWorksSection theme={theme} lang={lang} />
      <FeaturesBenefitsSection theme={theme} lang={lang} />
      <UseCasesSection theme={theme} lang={lang} />
      <PricingSection theme={theme} lang={lang} />
      <CTASection lang={lang} />
    </main>
  );
};

export default AIChatbotsAssistants;