import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";
import aiImg from '../assets/ai.webp';
import heroVideo from "../assets/hero.mp4";

import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// ============================================================================
// HERO SECTION TRANSLATIONS
// ============================================================================
const heroTranslations = {
  title: {
    en: <><span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>AI</span> Tools That Truly Deliver</>,
    ar: <><span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>الذكاء الاصطناعي</span> أدوات تثبت فعاليتها</>,
    he: <><span className="bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>בינה מלאכותית</span> כלים שמביאים תוצאות</>
  },
  desc: {
    en: "Don’t settle for average. Explore the proven AI solutions trusted by leading professionals to dramatically boost productivity and results.",
    ar: "لا تكتفَ بالمألوف. استكشف حلول الذكاء الاصطناعي الموثوقة من قبل الخبراء لزيادة الإنتاجية والنتائج.",
    he: "אל תסתפק בבינוניות. גלה פתרונות בינה מלאכותית מוכחים שמובילים מקצועיים סומכים עליהם לשיפור תוצאות ופרודוקטיביות."
  }
};

const HeroSection = ({ language }) => {
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  return (
    <section className="relative text-white min-h-[600px] h-96 md:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Hero Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 text-center w-full px-4 md:px-8 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xllinear font-extrabold text-white mb-4"
        >
          {heroTranslations.title[lang]}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-8"
        >
          {heroTranslations.desc[lang]}
        </motion.p>
      </div>
    </section>
  );
};

// ============================================================================
// EDITOR'S PICKS COMPONENT
// ============================================================================

const editorsPicks = [
  {
    title: {
      en: "The Future of Work with AI Tools: How Technology is Redefining Productivity",
      ar: "مستقبل العمل مع أدوات الذكاء الاصطناعي: كيف تعيد التكنولوجيا تعريف الإنتاجية",
      he: "עתיד העבודה עם כלי בינה מלאכותית: כיצד הטכנולוגיה מגדירה מחדש את הפרודוקטיביות"
    },
    description: {
      en: "Explore how AI tools are transforming the workplace, automating tasks, and boosting efficiency for teams everywhere.",
      ar: "استكشف كيف تغير أدوات الذكاء الاصطناعي مكان العمل وتزيد من الكفاءة.",
      he: "גלה כיצד כלי בינה מלאכותית משנים את מקום העבודה ומגבירים יעילות."
    },
    author: {
      en: "Dr. Sarah Chen",
      ar: "د. سارة تشين",
      he: "ד\"ר שרה צ'ן"
    },
    readTime: {
      en: "8 min read",
      ar: "8 دقائق قراءة",
      he: "8 דקות קריאה"
    },
    image: healthcareImg
  },
  {
    title: {
      en: "Why Every Business Needs AI Chatbots & Virtual Assistants in 2025",
      ar: "لماذا يحتاج كل عمل إلى روبوتات الدردشة والمساعدين الافتراضيين في 2025",
      he: "למה כל עסק צריך צ'אטבוטים ועוזרים וירטואליים ב-2025"
    },
    description: {
      en: "Discover the benefits of AI chatbots and virtual assistants for customer service, sales, and business growth.",
      ar: "اكتشف فوائد روبوتات الدردشة والمساعدين الافتراضيين لخدمة العملاء ونمو الأعمال.",
      he: "גלה את היתרונות של צ'אטבוטים ועוזרים וירטואליים לשירות לקוחות וצמיחה עסקית."
    },
    author: {
      en: "Alex Rodriguez",
      ar: "أليكس رودريغيز",
      he: "אלכס רודריגז"
    },
    readTime: {
      en: "6 min read",
      ar: "6 دقائق قراءة",
      he: "6 דקות קריאה"
    },
    image: businessImg
  },
  {
    title: {
      en: "Top 5 AI Tools Every Creator Should Try This Year",
      ar: "أفضل 5 أدوات ذكاء اصطناعي يجب أن يجربها كل منشئ هذا العام",
      he: "5 כלי בינה מלאכותית שכל יוצר חייב לנסות השנה"
    },
    description: {
      en: "A curated list of the most innovative AI tools for creators, designers, and marketers in 2025.",
      ar: "قائمة مختارة من أكثر أدوات الذكاء الاصطناعي ابتكارًا للمنشئين والمصممين والمسوقين في 2025.",
      he: "רשימה נבחרת של כלי בינה מלאכותית חדשניים ליוצרים, מעצבים ומשווקים ב-2025."
    },
    author: {
      en: "Maria Johnson",
      ar: "ماريا جونسون",
      he: "מריה ג'ונסון"
    },
    readTime: {
      en: "7 min read",
      ar: "7 دقائق قراءة",
      he: "7 דקות קריאה"
    },
    image: openSourceImg
  }
];

const EditorsPicks = ({ links, language }) => {
  const { theme } = useTheme();
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  const t = {
    sectionTitle: {
      en: "Editor's Picks",
      ar: "اختيارات المحرر",
      he: "בחירות העורך"
    },
    readMore: {
      en: "Read More",
      ar: "اقرأ المزيد",
      he: "קרא עוד"
    },
    by: {
      en: "By",
      ar: "بواسطة",
      he: "מאת"
    }
  };
  return (
    <section className={`${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'} py-16 px-4 min-h-[600px]`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-transparent bg-clip-text text-center mb-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
          }}
        >
          {t.sectionTitle[lang]}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorsPicks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative h-80 cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(0deg)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'rotateY(180deg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'rotateY(0deg)';
                }}
              >
                {/* Front of card - Only Image */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <img
                    src={item.image}
                    alt={item.title[lang]}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Back of card - Content */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#232323] to-[#0a2342] rounded-2xl p-6 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title[lang]}</h3>
                    <p className="text-[#bfc1be] text-sm mb-4">{item.description[lang]}</p>
                    <div className="flex items-center gap-2 text-xs text-[#bfc1be] mb-2">
                      <span>{t.by[lang]}</span>
                      <span className="font-semibold">{item.author[lang]}</span>
                      <span>•</span>
                      <span>{item.readTime[lang]}</span>
                    </div>
                  </div>
                  <Link
                    to={links[index]}
                    className="mt-auto text-[#19e6f7] font-bold hover:underline text-sm"
                  >
                    {t.readMore[lang]}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const aiCategoriesTranslations = [
  {
    name: { en: "Smart Recommendations", ar: "توصيات ذكية", he: "המלצות חכמות" },
    description: { en: "Personalized suggestions powered by machine learning.", ar: "اقتراحات مخصصة مدعومة بالتعلم الآلي.", he: "המלצות מותאמות אישית בעזרת למידת מכונה." }
  },
  {
    name: { en: "Natural Language Systems", ar: "أنظمة اللغة الطبيعية", he: "מערכות שפה טבעית" },
    description: { en: "Seamless human-computer interaction.", ar: "تفاعل سلس بين الإنسان والحاسوب.", he: "אינטראקציה חלקה בין אדם למחשב." }
  },
  {
    name: { en: "Image Analysis", ar: "تحليل الصور", he: "ניתוח תמונה" },
    description: { en: "Image analysis, object recognition, and detection.", ar: "تحليل الصور، التعرف على الأشياء والكشف عنها.", he: "ניתוח תמונה, זיהוי אובייקטים וגילוי." }
  },
  {
    name: { en: "Smart Robotics", ar: "روبوتات ذكية", he: "רובוטיקה חכמה" },
    description: { en: "Autonomous robots, automation, and intelligent systems.", ar: "روبوتات مستقلة، أتمتة وأنظمة ذكية.", he: "רובוטים אוטונומיים, אוטומציה ומערכות חכמות." }
  },
  {
    name: { en: "AI Responsibility", ar: "مسؤولية الذكاء الاصطناعي", he: "אחריות בינה מלאכותית" },
    description: { en: "Fairness, ethics, and regulatory compliance in AI.", ar: "العدالة، الأخلاقيات والامتثال التنظيمي في الذكاء الاصطناعي.", he: "הגינות, אתיקה וציות רגולטורי בבינה מלאכותית." }
  },
  {
    name: { en: "Edge Intelligence", ar: "ذكاء الحافة", he: "בינה מלאכותית בקצה" },
    description: { en: "AI on devices, sensor networks, and distributed systems.", ar: "الذكاء الاصطناعي على الأجهزة، شبكات الاستشعار والأنظمة الموزعة.", he: "בינה מלאכותית במכשירים, רשתות חיישנים ומערכות מבוזרות." }
  }
];

const AICategoriesExplorer = ({ language }) => {
  const { theme } = useTheme();
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  const t = {
    sectionTitle: {
      en: "AI Categories Explorer",
      ar: "استكشاف فئات الذكاء الاصطناعي",
      he: "מגוון תחומי הבינה המלאכותית"
    },
    desc1: {
      en: "Explore the vast landscape of artificial intelligence, where each category highlights a unique area driving innovation and reshaping industries. Discover how specialized AI domains are leading to remarkable progress and new possibilities.",
      ar: "استكشف عالم الذكاء الاصطناعي الواسع، حيث تبرز كل فئة مجالاً فريداً يدفع الابتكار ويعيد تشكيل الصناعات.",
      he: "גלה את עולם הבינה המלאכותית, בו כל תחום מוביל חדשנות ומשנה תעשיות."
    },
    desc2: {
      en: "From advanced machine learning powering smart recommendations to natural language systems enabling seamless human-computer interaction, see how these AI fields are influencing tomorrow’s technology.",
      ar: "من التعلم الآلي المتقدم إلى أنظمة اللغة الطبيعية، شاهد كيف تؤثر هذه المجالات على تكنولوجيا الغد.",
      he: "מלמידת מכונה מתקדמת ועד מערכות שפה טבעית, ראה כיצד תחומים אלו משפיעים על טכנולוגיות המחר."
    },
    bullet1: {
      en: "In-depth insights into major AI fields",
      ar: "رؤى معمقة في مجالات الذكاء الاصطناعي الرئيسية",
      he: "תובנות מעמיקות לתחומי בינה מלאכותית מרכזיים"
    },
    bullet2: {
      en: "Emerging trends and key innovations",
      ar: "اتجاهات ناشئة وابتكارات رئيسية",
      he: "מגמות מתפתחות וחדשנויות עיקריות"
    },
    bullet3: {
      en: "Real-world solutions and industry examples",
      ar: "حلول واقعية وأمثلة صناعية",
      he: "פתרונות אמיתיים ודוגמאות מהתעשייה"
    }
  };
  return (
    <section
      className="text-white py-16 px-6"
      style={{
        background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
                 <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(219, 158, 111)' }}>{t.sectionTitle[lang]}</h2>
                 <p className="text-[#fff] text-lg leading-relaxed mb-6">
                   <div className="text-justify">
                     {t.desc1[lang]}
                   </div>
                 </p>
                 <p className="text-[#fff] text-base leading-relaxed mb-8">
                   <div className="text-justify">
                     {t.desc2[lang]}
                   </div>
                 </p>
                 <div className="space-y-4">
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                     <span className="text-[#fff]">{t.bullet1[lang]}</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                     <span className="text-[#fff]">{t.bullet2[lang]}</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                     <span className="text-[#fff]">{t.bullet3[lang]}</span>
                   </div>
                 </div>
            </motion.div>
          </div>
          {/* Right Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiCategoriesTranslations.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-xl p-6 cursor-pointer group transition-all duration-500 hover:scale-105 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                   <motion.h3
                     className={`text-lg font-semibold mb-2 group-hover:-translate-y-1 transition-transform duration-500`}
                     style={{ color: 'rgb(219, 158, 111)' }}
                     whileHover={{ y: -8 }}
                     transition={{ duration: 0.5 }}
                   >
                     {category.name[lang]}
                   </motion.h3>
                  <motion.p className={`text-sm group-hover:translate-y-1 transition-transform duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`} whileHover={{ y: 8 }} transition={{ duration: 0.5 }}>{category.description[lang]}</motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// AI MYTHS BUSTED COMPONENT
// ============================================================================

const aiMythFactPoints = {
  myths: [
    "AI is only accessible to large tech companies.",
    "AI always makes perfect decisions without errors.",
    "AI will replace all human jobs soon.",
    "AI can understand emotions just like humans.",
    "AI doesn't need any human supervision once deployed."
  ],
  facts: [
    "AI platforms and tools are available for individuals, startups, and organizations of all sizes.",
    "AI systems can make mistakes and require human oversight and quality data.",
    "AI is designed to assist and augment human work, not fully replace it.",
    "AI can analyze data patterns but does not truly feel emotions.",
    "Human monitoring and updates are essential for responsible AI use."
  ]
};

const aiMythFactTranslations = {
  myths: {
    en: [
      "AI is only accessible to large tech companies.",
      "AI always makes perfect decisions without errors.",
      "AI will replace all human jobs soon.",
      "AI can understand emotions just like humans.",
      "AI doesn't need any human supervision once deployed."
    ],
    ar: [
      "الذكاء الاصطناعي متاح فقط للشركات التقنية الكبرى.",
      "الذكاء الاصطناعي يتخذ قرارات مثالية دائماً دون أخطاء.",
      "الذكاء الاصطناعي سيستبدل جميع الوظائف البشرية قريباً.",
      "الذكاء الاصطناعي يفهم المشاعر مثل البشر.",
      "الذكاء الاصطناعي لا يحتاج لأي إشراف بشري بعد النشر."
    ],
    he: [
      "בינה מלאכותית נגישה רק לחברות טכנולוגיה גדולות.",
      "בינה מלאכותית תמיד מקבלת החלטות מושלמות ללא טעויות.",
      "בינה מלאכותית תחליף את כל העבודות בקרוב.",
      "בינה מלאכותית מבינה רגשות כמו בני אדם.",
      "בינה מלאכותית לא צריכה פיקוח אנושי לאחר ההפעלה."
    ]
  },
  facts: {
    en: [
      "AI platforms and tools are available for individuals, startups, and organizations of all sizes.",
      "AI systems can make mistakes and require human oversight and quality data.",
      "AI is designed to assist and augment human work, not fully replace it.",
      "AI can analyze data patterns but does not truly feel emotions.",
      "Human monitoring and updates are essential for responsible AI use."
    ],
    ar: [
      "منصات وأدوات الذكاء الاصطناعي متاحة للأفراد والشركات الناشئة والمؤسسات من جميع الأحجام.",
      "أنظمة الذكاء الاصطناعي قد تخطئ وتتطلب إشرافاً بشرياً وبيانات عالية الجودة.",
      "الذكاء الاصطناعي مصمم لمساعدة وتعزيز العمل البشري وليس لاستبداله بالكامل.",
      "الذكاء الاصطناعي يمكنه تحليل الأنماط لكنه لا يشعر فعلياً بالمشاعر.",
      "المراقبة البشرية والتحديثات ضرورية لاستخدام مسؤول للذكاء الاصطناعي."
    ],
    he: [
      "פלטפורמות וכלי בינה מלאכותית זמינים ליחידים, סטארטאפים וארגונים בכל גודל.",
      "מערכות בינה מלאכותית עלולות לטעות ודורשות פיקוח אנושי ונתונים איכותיים.",
      "בינה מלאכותית נועדה לסייע ולהעצים עבודה אנושית, לא להחליף אותה לחלוטין.",
      "בינה מלאכותית יכולה לנתח דפוסי נתונים אך לא באמת מרגישה רגשות.",
      "פיקוח אנושי ועדכונים חיוניים לשימוש אחראי בבינה מלאכותית."
    ]
  },
  mythsTitle: { en: "Myths", ar: "خرافات", he: "מיתוסים" },
  factsTitle: { en: "Facts", ar: "حقائق", he: "עובדות" },
  sectionTitle: { en: "Myths & Facts", ar: "خرافات وحقائق", he: "מיתוסים ועובדות" },
  myth: { en: "Myth:", ar: "خرافة:", he: "מיתוס:" },
  fact: { en: "Fact:", ar: "حقيقة:", he: "עובדה:" }
};

const AIMythsBusted = ({ language }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  return (
    <section
      className="py-16 px-4"
      style={{
        background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 tracking-tight"
        style={{ color: '#fff' }}
      >
        {aiMythFactTranslations.sectionTitle[lang]}
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Myths Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`${isDark ? 'bg-[#232323]' : 'bg-white'} rounded-2xl p-8 shadow-lg`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-[#FF4C4C]' : 'text-[#e53935]'}`}>{aiMythFactTranslations.mythsTitle[lang]}</h3>
          <ul className="space-y-6">
            {aiMythFactTranslations.myths[lang].map((myth, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`font-bold mr-2 ${isDark ? 'text-[#FF4C4C]' : 'text-[#e53935]'}`}>{aiMythFactTranslations.myth[lang]}</span>
                <span className={`${isDark ? 'text-white' : 'text-black'} text-lg`}>{myth}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Facts Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`${isDark ? 'bg-[#232323]' : 'bg-white'} rounded-2xl p-8 shadow-lg`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-[#19e6f7]' : 'text-[#179b8e]'}`}>{aiMythFactTranslations.factsTitle[lang]}</h3>
          <ul className="space-y-6">
            {aiMythFactTranslations.facts[lang].map((fact, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`font-bold mr-2 ${isDark ? 'text-[#19e6f7]' : 'text-[#179b8e]'}`}>{aiMythFactTranslations.fact[lang]}</span>
                <span className={`${isDark ? 'text-white' : 'text-black'} text-lg`}>{fact}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// TOOL COMPARISON TABLE COMPONENT
// ============================================================================


const aiTools = [
  {
    name: {
      en: "Synthesia",
      ar: "سينثيزيا",
      he: "סינתסיה"
    },
    category: {
      en: "Video Generation",
      ar: "إنشاء الفيديو",
      he: "יצירת וידאו"
    },
    pricing: {
      en: "Paid",
      ar: "مدفوع",
      he: "בתשלום"
    },
    bestFor: {
      en: "Creating AI-powered videos",
      ar: "إنشاء مقاطع فيديو مدعومة بالذكاء الاصطناعي",
      he: "יצירת סרטונים מונעי בינה מלאכותית"
    },
    rating: 4.4
  },
  {
    name: {
      en: "Copy.ai",
      ar: "كوبي.اي",
      he: "Copy.ai"
    },
    category: {
      en: "Content Creation",
      ar: "إنشاء المحتوى",
      he: "יצירת תוכן"
    },
    pricing: {
      en: "Free + Paid",
      ar: "مجاني + مدفوع",
      he: "חינם + בתשלום"
    },
    bestFor: {
      en: "Marketing, blogs, social media",
      ar: "التسويق، المدونات، وسائل التواصل الاجتماعي",
      he: "שיווק, בלוגים, רשתות חברתיות"
    },
    rating: 4.3
  },
  {
    name: {
      en: "Perplexity AI",
      ar: "بيربليكسيتي ايه آي",
      he: "Perplexity AI"
    },
    category: {
      en: "Research Assistant",
      ar: "مساعد بحثي",
      he: "עוזר מחקר"
    },
    pricing: {
      en: "Free",
      ar: "مجاني",
      he: "חינם"
    },
    bestFor: {
      en: "Finding information, summarizing",
      ar: "البحث عن المعلومات، التلخيص",
      he: "חיפוש מידע, סיכום"
    },
    rating: 4.8
  }
];

const toolComparisonTranslations = {
  sectionTitle: {
    en: "AI Tools Comparison",
    ar: "مقارنة أدوات الذكاء الاصطناعي",
    he: "השוואת כלי בינה מלאכותית"
  },
  desc: {
    en: "Compare popular AI tools and find the right one for your needs.",
    ar: "قارن بين أدوات الذكاء الاصطناعي الشائعة واعثر على الأنسب لاحتياجاتك.",
    he: "השווה כלים פופולריים ומצא את המתאים ביותר לצרכיך."
  },
  tool: { en: "Tool", ar: "أداة", he: "כלי" },
  category: { en: "Category", ar: "الفئة", he: "קטגוריה" },
  pricing: { en: "Pricing", ar: "التسعير", he: "תמחור" },
  bestFor: { en: "Best For", ar: "الأفضل لـ", he: "הכי מתאים ל" },
  rating: { en: "Rating", ar: "تقييم", he: "דירוג" }
};

const ToolComparisonTable = ({ language }) => {
  const { theme } = useTheme();
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  return (
    <section
      className={`${theme === 'dark' ? 'bg-[#232323] text-white' : 'bg-white text-black'} py-16 px-6`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2
          className="text-4xl font-bold mb-2 text-center bg-clip-text text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
          }}
        >
          {toolComparisonTranslations.sectionTitle[lang]}
        </h2>
        <p className={`text-lg mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{toolComparisonTranslations.desc[lang]}</p>
      </motion.div>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full bg-[#232323] rounded-lg overflow-hidden">
          <thead className="bg-[#181818]">
            <tr>
              <th className="text-white px-6 py-4 text-left font-semibold">{toolComparisonTranslations.tool[lang]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{toolComparisonTranslations.category[lang]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{toolComparisonTranslations.pricing[lang]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{toolComparisonTranslations.bestFor[lang]}</th>
              <th className="text-white px-6 py-4 text-left font-semibold">{toolComparisonTranslations.rating[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {aiTools.map((tool, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-[#181818] hover:bg-[#0a2342] transition-colors"
              >
                <td className="text-white px-6 py-4 font-semibold">{tool.name[lang]}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.category[lang]}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.pricing[lang]}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.bestFor[lang]}</td>
                <td className="text-white px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-[#19e6f7] font-semibold">{tool.rating}</span>
                    <span className="text-[#19e6f7] ml-1">★</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// ============================================================================
// WEEKLY POLL / DISCUSSION TOPIC COMPONENT
// ============================================================================

const weeklyPollTranslations = {
  sectionTitle: {
    en: "Weekly Discussion: AI's Future Impact",
    ar: "نقاش الأسبوع: تأثير الذكاء الاصطناعي المستقبلي",
    he: "דיון שבועי: השפעת הבינה המלאכותית בעתיד"
  },
  question: {
    en: "How do you think AI will change our daily lives and society in the next decade?",
    ar: "كيف تعتقد أن الذكاء الاصطناعي سيغير حياتنا اليومية والمجتمع في العقد القادم؟",
    he: "איך לדעתך תשנה הבינה המלאכותית את חיינו ואת החברה בעשור הקרוב?"
  },
  pollOptions: [
    {
      en: "AI will transform education and learning experiences",
      ar: "الذكاء الاصطناعي سيغير التعليم وتجارب التعلم",
      he: "בינה מלאכותית תשנה את החינוך וחוויות הלמידה"
    },
    {
      en: "AI will help solve climate and environmental challenges",
      ar: "الذكاء الاصطناعي سيساعد في حل تحديات المناخ والبيئة",
      he: "בינה מלאכותית תסייע בפתרון אתגרי אקלים וסביבה"
    },
    {
      en: "AI should be transparent and explainable in all decisions",
      ar: "يجب أن يكون الذكاء الاصطناعي شفافًا وقابلًا للتفسير في جميع القرارات",
      he: "בינה מלאכותית צריכה להיות שקופה וברורה בכל החלטה"
    },
    {
      en: "AI will become a daily assistant for most people by 2030",
      ar: "الذكاء الاصطناعي سيصبح مساعدًا يوميًا لمعظم الناس بحلول 2030",
      he: "בינה מלאכותית תהפוך לעוזר יומיומי לרוב האנשים עד 2030"
    }
  ],
  submit: { en: "Submit", ar: "إرسال", he: "שלח" },
  totalVotes: { en: "Total votes", ar: "إجمالي الأصوات", he: "סך ההצבעות" },
  pollCloses: { en: "Poll closes in 3 days", ar: "ينتهي التصويت خلال 3 أيام", he: "הסקר נסגר בעוד 3 ימים" },
  questionLabel: { en: "Question:", ar: "سؤال:", he: "שאלה:" }
};

const WeeklyPoll = ({ language }) => {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [hasVoted, setHasVoted] = React.useState(false);
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';

  const pollOptions = weeklyPollTranslations.pollOptions.map((opt, idx) => ({
    id: idx + 1,
    text: opt[lang],
    votes: [40, 36, 29, 18][idx]
  }));

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = () => {
    if (selectedOption && !hasVoted) {
      setHasVoted(true);
    }
  };

  return (
    <section className={`${theme === 'dark' ? 'bg-[#232323] text-white' : 'bg-white text-black'} py-16 px-4`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h2
          className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
          }}
        >
          {weeklyPollTranslations.sectionTitle[lang]}
        </h2>
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{weeklyPollTranslations.questionLabel[lang]}</h2>
          <p className={`text-xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{weeklyPollTranslations.question[lang]}</p>
        </div>
        {!hasVoted ? (
          <form
            onSubmit={e => {
              e.preventDefault();
              handleVote();
            }}
            className="space-y-4"
          >
            {pollOptions.map(option => (
              <label
                key={option.id}
                className={`block p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  selectedOption === option.id
                    ? 'border-[#19e6f7] bg-[#19e6f7]/10'
                    : 'border-[#232323] hover:border-[#19e6f7]'
                }`}
              >
                <input
                  type="radio"
                  name="poll"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="mr-3 accent-[#19e6f7]"
                />
                <span className="font-medium">{option.text}</span>
              </label>
            ))}
            <button
              type="submit"
              disabled={!selectedOption}
              className="mt-4 font-bold py-2 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 text-black"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              {weeklyPollTranslations.submit[lang]}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            {pollOptions.map(option => {
              const percentage = Math.round((option.votes / totalVotes) * 100);
              const isSelected = selectedOption === option.id;
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: option.id * 0.1 }}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-[#19e6f7] bg-[#19e6f7]/10'
                      : 'border-[#232323] hover:border-[#19e6f7]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{option.text}</span>
                    <span className="text-[#19e6f7] font-semibold">{percentage}%</span>
                  </div>
                  <div className="w-full bg-[#232323] rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#19e6f7] to-[#19bba6] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-sm text-[#bfc1be] mt-1">
                    {option.votes} {weeklyPollTranslations.totalVotes[lang]}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        <div className="text-center mt-8">
          <p className="text-[#bfc1be] text-sm">
            {weeklyPollTranslations.totalVotes[lang]}: {totalVotes} • {weeklyPollTranslations.pollCloses[lang]}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

// ============================================================================
// EXPORTS
// ============================================================================

// Blog page default export
const Blog = () => {
  const { theme } = useTheme();
  const { language, isRTL } = useLanguage();
  const links = ["/editor-pick/1", "/editor-pick/2", "/editor-pick/3"];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <HeroSection language={language} />
      <EditorsPicks links={links} language={language} />
      <AICategoriesExplorer language={language} />
      <WeeklyPoll language={language} />
      <AIMythsBusted language={language} />
      <ToolComparisonTable language={language} />
    </div>
  );
};

export default Blog;