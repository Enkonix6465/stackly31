import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";

const picks = [
  {
    id: "1",
    title: {
      en: "The Future of Work with AI Tools: How Technology is Redefining Productivity",
      ar: "مستقبل العمل مع أدوات الذكاء الاصطناعي: كيف تعيد التكنولوجيا تعريف الإنتاجية",
      he: "עתיד העבודה עם כלי בינה מלאכותית: כיצד הטכנולוגיה מגדירה מחדש את הפרודוקטיביות"
    },
    author: {
      en: "Priya Mehta",
      ar: "برية ميهتا",
      he: "פריה מהטה"
    },
    readTime: {
      en: "7 min read",
      ar: "7 دقائق قراءة",
      he: "7 דקות קריאה"
    },
    image: healthcareImg,
    intro: {
      en: "AI tools are rapidly changing the way we work, making teams more productive, collaborative, and innovative. From automating repetitive tasks to enabling smarter decision-making, AI is at the heart of the modern workplace transformation.",
      ar: "تغير أدوات الذكاء الاصطناعي بسرعة طريقة عملنا، مما يجعل الفرق أكثر إنتاجية وابتكاراً. من أتمتة المهام المتكررة إلى اتخاذ قرارات أكثر ذكاءً، الذكاء الاصطناعي في قلب التحول الحديث في مكان العمل.",
      he: "כלי בינה מלאכותית משנים במהירות את הדרך בה אנו עובדים, והופכים צוותים לפרודוקטיביים וחדשניים יותר. מאוטומציה של משימות חוזרות ועד קבלת החלטות חכמה, AI הוא בלב השינוי במקומות העבודה."
    },
    sections: [
      {
        heading: {
          en: "How AI is Transforming Work",
          ar: "كيف يغير الذكاء الاصطناعي العمل",
          he: "איך AI משנה את העבודה"
        },
        content: [
          { en: "Automating routine tasks to free up time for creative work", ar: "أتمتة المهام الروتينية لتوفير الوقت للعمل الإبداعي", he: "אוטומציה של משימות שגרתיות לפינוי זמן לעבודה יצירתית" },
          { en: "Enhancing collaboration with smart assistants and chatbots", ar: "تعزيز التعاون مع المساعدين الأذكياء وروبوتات الدردشة", he: "שיפור שיתוף הפעולה עם עוזרים חכמים וצ׳אטבוטים" },
          { en: "Improving project management through predictive analytics", ar: "تحسين إدارة المشاريع من خلال التحليلات التنبؤية", he: "שיפור ניהול פרויקטים באמצעות אנליטיקה חזויה" },
          { en: "Personalizing workflows for individual productivity", ar: "تخصيص سير العمل لزيادة إنتاجية الأفراد", he: "התאמת תהליכי עבודה לפרודוקטיביות אישית" },
          { en: "Enabling remote work with intelligent tools", ar: "تمكين العمل عن بعد باستخدام أدوات ذكية", he: "העצמת עבודה מרחוק עם כלים חכמים" }
        ]
      },
      {
        heading: {
          en: "Benefits for Teams & Businesses",
          ar: "الفوائد للفرق والشركات",
          he: "יתרונות לצוותים ולעסקים"
        },
        content: [
          { en: "Faster decision-making with real-time insights", ar: "اتخاذ قرارات أسرع مع رؤى فورية", he: "קבלת החלטות מהירה יותר עם תובנות בזמן אמת" },
          { en: "Reduced operational costs", ar: "خفض التكاليف التشغيلية", he: "הפחתת עלויות תפעול" },
          { en: "Greater employee satisfaction and engagement", ar: "رضا ومشاركة أكبر للموظفين", he: "שביעות רצון ומעורבות עובדים גבוהה יותר" },
          { en: "Scalable solutions for growing businesses", ar: "حلول قابلة للتوسع للشركات النامية", he: "פתרונות הניתנים להרחבה לעסקים מתפתחים" },
          { en: "Competitive advantage in a digital economy", ar: "ميزة تنافسية في الاقتصاد الرقمي", he: "יתרון תחרותי בכלכלה דיגיטלית" }
        ]
      },
      {
        heading: {
          en: "Challenges & Opportunities",
          ar: "التحديات والفرص",
          he: "אתגרים והזדמנויות"
        },
        content: [
          { en: "Adapting to new technologies and workflows", ar: "التكيف مع التقنيات وسير العمل الجديدة", he: "הסתגלות לטכנולוגיות ותהליכים חדשים" },
          { en: "Ensuring data privacy and security", ar: "ضمان خصوصية البيانات وأمانها", he: "הבטחת פרטיות ואבטחת מידע" },
          { en: "Upskilling employees for AI-powered roles", ar: "تطوير مهارات الموظفين لأدوار مدعومة بالذكاء الاصطناعي", he: "הכשרת עובדים לתפקידים מבוססי AI" },
          { en: "Balancing automation with human creativity", ar: "تحقيق التوازن بين الأتمتة والإبداع البشري", he: "איזון בין אוטומציה ליצירתיות אנושית" }
        ]
      }
    ],
    quote: {
      text: {
        en: "AI is not just a tool—it’s a catalyst for a new era of productivity and innovation.",
        ar: "الذكاء الاصطناعي ليس مجرد أداة—إنه محفز لعصر جديد من الإنتاجية والابتكار.",
        he: "בינה מלאכותית היא לא רק כלי—היא זרז לעידן חדש של פרודוקטיביות וחדשנות."
      },
      author: {
        en: "Priya Mehta",
        ar: "برية ميهتا",
        he: "פריה מהטה"
      }
    },
    conclusion: {
      en: "Embracing AI in the workplace means unlocking new levels of efficiency, creativity, and growth. The future of work is here, and it’s powered by intelligent technology.",
      ar: "اعتماد الذكاء الاصطناعي في مكان العمل يعني فتح مستويات جديدة من الكفاءة والإبداع والنمو. المستقبل هنا، وهو مدعوم بالتكنولوجيا الذكية.",
      he: "אימוץ בינה מלאכותית בעבודה משמעו פתיחת רמות חדשות של יעילות, יצירתיות וצמיחה. העתיד כבר כאן, והוא מונע על ידי טכנולוגיה חכמה."
    }
  },
  // ...repeat for picks 2 and 3, same structure as above, with translations for all fields...
];

const EditorPickDetails = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const { language, isRTL } = useLanguage();
  const lang = language === 'arabic' ? 'ar' : language === 'hebrew' ? 'he' : 'en';
  const pick = picks.find((p) => p.id === id) || picks[0];

  return (
    <section className={`w-screen min-h-screen p-0 m-0 ${theme === 'dark' ? 'bg-[#181818] text-white' : 'bg-white text-black'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header with back button */}
      <div className="w-full py-6 px-6">
        <Link
          to="/blog"
          className={`font-bold text-lg hover:underline transition px-4 py-2 rounded-lg inline-block bg-clip-text text-transparent ${theme === 'dark' ? '' : ''}`}
          style={{
            backgroundImage:
              'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
          }}
        >
          {lang === 'ar' ? '← العودة للمدونة' : lang === 'he' ? '← חזרה לבלוג' : '← Back to Blog'}
        </Link>
      </div>

      {/* Centered small image */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full max-w-2xl px-4">
          <img
            src={pick.image}
            loading="lazy"
            alt={pick.title[lang]}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Title and author info */}
      <div className="w-full text-center mb-12 px-4">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{pick.title[lang]}</h1>
        <div
          className="flex items-center justify-center gap-4 text-lg bg-clip-text text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
          }}
        >
          <span>{lang === 'ar' ? 'بواسطة' : lang === 'he' ? 'מאת' : 'By'} {pick.author[lang]}</span>
          <span>•</span>
          <span>{pick.readTime[lang]}</span>
        </div>
      </div>

      {/* Full-width content */}
      <div className="w-screen min-h-[55vh] py-12 px-4 md:px-24">
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
            }}
          >
            {lang === 'ar' ? 'مقدمة' : lang === 'he' ? 'הקדמה' : 'Introduction'}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.intro[lang]}</p>
        </section>
        {pick.sections.map((section, idx) => (
          <section className="mb-10" key={idx}>
            <h2
              className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              {section.heading[lang]}
            </h2>
            <ul className={`list-disc pl-6 mb-4 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>
              {section.content.map((item, i) => (
                <li key={i}>{item[lang]}</li>
              ))}
            </ul>
          </section>
        ))}
        <section className="mb-10">
          <h2
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
            }}
          >
            {lang === 'ar' ? 'اقتباس خبير' : lang === 'he' ? 'ציטוט מומחה' : 'Expert Quote'}
          </h2>
          <blockquote className={`border-l-4 pl-4 italic ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}
            style={{ borderLeft: '4px solid', borderImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525) 1' }}>
            "{pick.quote.text[lang]}"<br />
            <span
              className="font-semibold bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              — {pick.quote.author[lang]}
            </span>
          </blockquote>
        </section>
        <section>
          <h2
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
            }}
          >
            {lang === 'ar' ? 'الخلاصة' : lang === 'he' ? 'סיכום' : 'Conclusion'}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-700'}`}>{pick.conclusion[lang]}</p>
        </section>
      </div>
    </section>
  );
};

export default EditorPickDetails;