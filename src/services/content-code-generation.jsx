import { motion } from "framer-motion";
import heroVideo from "../assets/content.mp4";
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
    en: "Content Generation",
    ar: "توليد المحتوى",
    he: "יצירת תוכן"
  },
  desc: {
    en: "Unlock creativity and productivity with AI-powered content generation tools. Instantly create articles, blogs, marketing copy, and more for any project or business need.",
    ar: "أطلق العنان للإبداع والإنتاجية مع أدوات الذكاء الاصطناعي لتوليد المحتوى. أنشئ مقالات ومدونات ونصوص تسويقية والمزيد لأي مشروع أو عمل.",
    he: "שחרר יצירתיות ופרודוקטיביות עם כלי AI ליצירת תוכן. צור מאמרים, בלוגים, טקסטים שיווקיים ועוד לכל צורך."
  },
  explore: {
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
            {heroTranslations.explore[lang]}
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
    { en: "Content Planning", ar: "تخطيط المحتوى", he: "תכנון תוכן" },
    { en: "Content Design", ar: "تصميم المحتوى", he: "עיצוב תוכן" },
    { en: "AI-Powered Generation", ar: "توليد مدعوم بالذكاء الاصطناعي", he: "יצירה מבוססת AI" },
    { en: "Review & Optimization", ar: "مراجعة وتحسين", he: "סקירה ואופטימיזציה" },
    { en: "Publish & Support", ar: "نشر ودعم", he: "פרסום ותמיכה" }
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
    en: "Our generative AI platform empowers you to produce original content, saving time and resources while maintaining quality and creativity. Enjoy seamless collaboration, instant editing, and built-in SEO optimization to maximize your content's impact.",
    ar: "منصتنا للذكاء الاصطناعي التوليدي تمكنك من إنتاج محتوى أصلي بسرعة مع الحفاظ على الجودة والإبداع. استمتع بالتعاون الفوري والتحرير الفوري وتحسين محركات البحث المدمج لتعظيم تأثير المحتوى.",
    he: "הפלטפורמה שלנו ל-AI גנרטיבי מאפשרת לך ליצור תוכן מקורי במהירות, תוך שמירה על איכות ויצירתיות. תהנה משיתוף פעולה מיידי, עריכה מיידית ואופטימיזציית SEO מובנית למקסום ההשפעה." 
  },
  features: [
    { en: 'Speed', ar: 'السرعة', he: 'מהירות' },
    { en: 'Quality', ar: 'الجودة', he: 'איכות' },
    { en: 'SEO', ar: 'تحسين محركات البحث', he: 'SEO' },
    { en: 'Global', ar: 'عالمي', he: 'גלובלי' },
    { en: 'Unique', ar: 'فريد', he: 'ייחודי' },
    { en: 'Simple', ar: 'بسيط', he: 'פשוט' }
  ],
  bullets: [
    { en: 'Generate content for any platform', ar: 'أنشئ محتوى لأي منصة', he: 'צור תוכן לכל פלטפורמה' },
    { en: 'Customize style and tone', ar: 'خصص الأسلوب والنبرة', he: 'התאם סגנון וטון' },
    { en: 'Collaborate with your team in real time', ar: 'تعاون مع فريقك في الوقت الفعلي', he: 'שתף פעולה עם הצוות בזמן אמת' },
    { en: 'Boost your online presence with SEO tools', ar: 'عزز حضورك الرقمي بأدوات تحسين محركات البحث', he: 'שפר נוכחות דיגיטלית עם כלי SEO' }
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
              className={`shadow-lg p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 min-w-[180px] min-h-[180px] relative ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
              style={{
                clipPath: 'polygon(50% 0%, 65% 15%, 90% 40%, 88% 70%, 80% 85%, 65% 95%, 50% 100%, 35% 95%, 20% 85%, 12% 70%, 10% 40%, 35% 15%)',
                boxShadow: '0 8px 32px 0 rgba(25,230,247,0.10)'
              }}
            >
              <div className={`font-bold text-xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{feature[lang]}</div>
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
    en: "Discover how generative AI is transforming content creation for businesses, educators, and creators. Our platform adapts to your needs, delivering quality and speed for any use case.",
    ar: "اكتشف كيف يغير الذكاء الاصطناعي التوليدي إنشاء المحتوى للأعمال والمعلمين والمبدعين. منصتنا تتكيف مع احتياجاتك وتوفر الجودة والسرعة لأي استخدام.",
    he: "גלה כיצד AI גנרטיבי משנה את יצירת התוכן לעסקים, מחנכים ויוצרים. הפלטפורמה שלנו מתאימה לצרכים שלך ומספקת איכות ומהירות לכל שימוש."
  },
  useCases: [
    {
      icon: blogCatTools,
      title: { en: 'Tech Blogs & Tutorials', ar: 'مدونات ودروس تقنية', he: 'בלוגים ומדריכים טכנולוגיים' },
      desc: { en: 'Generate technical articles, tutorials, and documentation for software products and platforms.', ar: 'أنشئ مقالات تقنية ودروساً ووثائق للمنتجات والمنصات البرمجية.', he: 'צור מאמרים טכניים, מדריכים ותיעוד למוצרים ופלטפורמות תוכנה.' }
    },
    {
      icon: blogCatTrends,
      title: { en: 'Marketing & SEO Content', ar: 'محتوى تسويقي وتحسين محركات البحث', he: 'תוכן שיווקי ו-SEO' },
      desc: { en: 'Create high-impact marketing copy, product descriptions, and SEO-optimized web content.', ar: 'أنشئ نصوص تسويقية قوية، ووصف المنتجات، ومحتوى ويب محسّن لمحركات البحث.', he: 'צור טקסטים שיווקיים, תיאורי מוצרים ותוכן אינטרנט מותאם SEO.' }
    },
    {
      icon: blogCatCase,
      title: { en: 'Case Studies & Reports', ar: 'دراسات حالة وتقارير', he: 'מחקרי מקרה ודוחות' },
      desc: { en: 'Produce detailed case studies, business reports, and whitepapers with data-driven insights.', ar: 'أنشئ دراسات حالة مفصلة وتقارير أعمال وأوراق بيضاء مع رؤى قائمة على البيانات.', he: 'הפק מחקרי מקרה מפורטים, דוחות עסקיים וניירות עמדה עם תובנות מבוססות נתונים.' }
    },
    {
      icon: blogCatThought,
      title: { en: 'Thought Leadership', ar: 'الريادة الفكرية', he: 'מנהיגות מחשבתית' },
      desc: { en: 'Publish expert opinions, analysis, and commentary to establish authority in your field.', ar: 'انشر آراء وتحليلات وتعليقات الخبراء لإثبات مكانتك في مجالك.', he: 'פרסם דעות מומחים, ניתוחים ופרשנויות לביסוס סמכותך בתחום.' }
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
      price: '$49',
      period: { en: '/month', ar: '/شهر', he: '/חודש' },
      desc: { en: 'For individuals & freelancers', ar: 'للأفراد والمستقلين', he: 'ליחידים ופרילנסרים' },
      features: [
        { en: 'Basic Content Generation', ar: 'توليد محتوى أساسي', he: 'יצירת תוכן בסיסית' },
        { en: 'Up to 500 outputs/month', ar: 'حتى 500 نتيجة/شهر', he: 'עד 500 תוצרים/חודש' },
        { en: 'Email Support', ar: 'دعم عبر البريد الإلكتروني', he: 'תמיכה במייל' },
        { en: 'Standard Templates', ar: 'قوالب قياسية', he: 'תבניות סטנדרטיות' },
        { en: 'Basic Collaboration', ar: 'تعاون أساسي', he: 'שיתוף פעולה בסיסי' }
      ],
      popular: false
    },
    {
      name: { en: 'Professional', ar: 'محترف', he: 'מקצועי' },
      price: '$149',
      period: { en: '/month', ar: '/شهر', he: '/חודש' },
      desc: { en: 'For teams & businesses', ar: 'للشركات والفرق', he: 'לעסקים וצוותים' },
      features: [
        { en: 'Advanced Content Generation', ar: 'توليد محتوى متقدم', he: 'יצירת תוכן מתקדמת' },
        { en: 'Unlimited outputs', ar: 'نتائج غير محدودة', he: 'תוצרים ללא הגבלה' },
        { en: 'Priority Support', ar: 'دعم أولوية', he: 'תמיכה מועדפת' },
        { en: 'Custom Templates', ar: 'قوالب مخصصة', he: 'תבניות מותאמות' },
        { en: 'Real-Time Collaboration', ar: 'تعاون في الوقت الفعلي', he: 'שיתוף פעולה בזמן אמת' },
        { en: 'API Access', ar: 'وصول API', he: 'גישה ל-API' }
      ],
      popular: true
    },
    {
      name: { en: 'Enterprise', ar: 'مؤسسة', he: 'ארגון' },
      price: 'Custom',
      period: { en: '', ar: '', he: '' },
      desc: { en: 'For large organizations', ar: 'للمنظمات الكبيرة', he: 'לארגונים גדולים' },
      features: [
        { en: 'Custom AI Models', ar: 'نماذج ذكاء اصطناعي مخصصة', he: 'מודלים מותאמים אישית' },
        { en: 'Dedicated Account Manager', ar: 'مدير حساب مخصص', he: 'מנהל חשבון ייעודי' },
        { en: '24/7 Phone Support', ar: 'دعم هاتفي 24/7', he: 'תמיכה טלפונית 24/7' },
        { en: 'On-premise Option', ar: 'خيار محلي', he: 'אפשרות מקומית' },
        { en: 'Advanced Security', ar: 'أمان متقدم', he: 'אבטחה מתקדמת' },
        { en: 'SLA Guarantee', ar: 'ضمان اتفاقية مستوى الخدمة', he: 'התחייבות SLA' },
        { en: 'Custom Integrations', ar: 'تكاملات مخصصة', he: 'אינטגרציות מותאמות' }
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
  title: { en: 'Create Content Instantly with AI', ar: 'أنشئ محتوى فورياً بالذكاء الاصطناعي', he: 'צור תוכן מיידית עם AI' },
  desc: { en: 'Generate high-quality articles, blogs, marketing copy, and more—faster than ever.', ar: 'أنشئ مقالات ومدونات ونصوص تسويقية عالية الجودة والمزيد—بسرعة غير مسبوقة.', he: 'צור מאמרים, בלוגים, טקסטים שיווקיים ועוד—מהר מתמיד.' },
  button: { en: 'Start Generating Content', ar: 'ابدأ في إنشاء المحتوى', he: 'התחל ליצור תוכן' }
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

const ContentCodeGeneration = () => {
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

export default ContentCodeGeneration;