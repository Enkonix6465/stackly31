import React from "react";
import { useLanguage } from "../context/LanguageContext";
import abouthero from '../assets/aboutbg.mp4';
import { useTheme } from "../context/ThemeContext";
import ourvalues from '../assets/our values.jpeg';
import empathyImg from '../assets/empathy.jpeg';
import defineImg from '../assets/define.jpeg';
import ideasImg from '../assets/ideas.jpeg';
import feedbackImg from '../assets/feedback.jpeg';
import prototypeImg from '../assets/prototype.jpeg';
import testImg from '../assets/test.jpeg';
import { useScrollToTop } from '../hooks/useScrollToTop';
import awards from '../assets/awards.jpg';
import ceoImg from '../assets/ceo.jpg';
const AboutUs = () => {
  const { theme } = useTheme();
  const { language, isRTL } = useLanguage();
  
  // Scroll to top when component mounts
  useScrollToTop();

  const growthYears = [
    {
      year: "2020",
      title: {
        english: "PLATFORM LAUNCH",
        arabic: "إطلاق المنصة",
        hebrew: "השקת הפלטפורמה"
      },
      description: {
        english: "Launched our first AI tools platform with 10 core solutions",
        arabic: "إطلاق أول منصة أدوات ذكاء اصطناعي مع 10 حلول أساسية",
        hebrew: "השקנו את פלטפורמת כלי ה-AI הראשונה שלנו עם 10 פתרונות עיקריים"
      },
      icon: "🚀"
    },
    {
      year: "2021",
      title: {
        english: "AI EXPANSION",
        arabic: "توسيع الذكاء الاصطناعي",
        hebrew: "הרחבת ה-AI"
      },
      description: {
        english: "Expanded to 25+ AI tools and reached 500+ users",
        arabic: "توسيع المنصة إلى أكثر من 25 أداة ذكاء اصطناعي والوصول إلى أكثر من 500 مستخدم",
        hebrew: "התרחבנו ל-25+ כלי AI והגענו ל-500+ משתמשים"
      },
      icon: "💡"
    },
    {
      year: "2022",
      title: {
        english: "GLOBAL REACH",
        arabic: "الوصول العالمي",
        hebrew: "הגעה גלובלית"
      },
      description: {
        english: "Served 1000+ clients across 10+ countries",
        arabic: "خدمة أكثر من 1000 عميل في أكثر من 10 دول",
        hebrew: "שירתנו מעל 1000 לקוחות ב-10+ מדינות"
      },
      icon: "📈"
    },
    {
      year: "2023",
      title: {
        english: "INNOVATION HUB",
        arabic: "مركز الابتكار",
        hebrew: "מרכז החדשנות"
      },
      description: {
        english: "Launched AI Innovation Hub with 50+ cutting-edge tools",
        arabic: "إطلاق مركز الابتكار للذكاء الاصطناعي مع أكثر من 50 أداة متقدمة",
        hebrew: "השקנו מרכז חדשנות AI עם 50+ כלים מתקדמים"
      },
      icon: "🔬"
    },
    {
      year: "2024",
      title: {
        english: "ENTERPRISE FOCUS",
        arabic: "التركيز على المؤسسات",
        hebrew: "התמקדות בארגונים"
      },
      description: {
        english: "Partnered with Fortune 500 companies",
        arabic: "شراكة مع شركات فورتشن 500",
        hebrew: "שיתופי פעולה עם חברות Fortune 500"
      },
      icon: "🌍"
    },
    {
      year: "2025",
      title: {
        english: "QUANTUM AI",
        arabic: "الذكاء الاصطناعي الكمي",
        hebrew: "בינה מלאכותית קוונטית"
      },
      description: {
        english: "Pioneering next-generation AI solutions",
        arabic: "ريادة حلول الذكاء الاصطناعي من الجيل التالي",
        hebrew: "פורצי דרך בפתרונות AI מהדור הבא"
      },
      icon: "⚡"
    }
  ];
  const VisionSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <defs>
      <linearGradient id="visionGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#63342e" />
        <stop offset="20%" stopColor="#312525" />
        <stop offset="40%" stopColor="#d6ab88" />
        <stop offset="60%" stopColor="#c58d6a" />
        <stop offset="80%" stopColor="#9a644a" />
        <stop offset="100%" stopColor="#312525" />
      </linearGradient>
    </defs>
    <path d="M12 4.5c-7.732 0-10.5 7.5-10.5 7.5s2.768 7.5 10.5 7.5 10.5-7.5 10.5-7.5-2.768-7.5-10.5-7.5zm0 12.5a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
    <circle cx="12" cy="12" r="2.5" fill="url(#visionGradient)" />
  </svg>
);
const MissionSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
    <defs>
      <linearGradient id="missionGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#63342e" />
        <stop offset="20%" stopColor="#312525" />
        <stop offset="40%" stopColor="#d6ab88" />
        <stop offset="60%" stopColor="#c58d6a" />
        <stop offset="80%" stopColor="#9a644a" />
        <stop offset="100%" stopColor="#312525" />
      </linearGradient>
    </defs>
    <path d="M12 2C6.485 2 2 6.485 2 12h2a8 8 0 1 1 8 8v2c5.515 0 10-4.485 10-10S17.515 2 12 2zm0 4a6 6 0 0 0-6 6h2a4 4 0 1 1 4 4v2a6 6 0 0 0 0-12zm0 4a2 2 0 0 0-2 2h2v2a2 2 0 0 0 0-4z" fill="url(#missionGradient)"/>
  </svg>
);


  return (
    <div className={theme === "dark" ? "bg-[#121212] text-white" : "bg-gray-50 text-black"} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative h-[545px] overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={abouthero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-30' : ''} z-10`}></div>
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            <span className={`text-white`}>
              {language === "arabic" ? "من نحن" : language === "hebrew" ? "עלינו" : "About"}
            </span>
            <span style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
              {language === "arabic" ? "الشركة" : language === "hebrew" ? "החברה" : "Us"}
            </span>
          </h1>
          <p className="text-lg font-medium mb-4" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>
            {language === "arabic"
              ? "تمكين الابتكار من خلال التميز في الذكاء الاصطناعي"
              : language === "hebrew"
              ? "העצמת חדשנות באמצעות מצוינות ב-AI"
              : "Empowering Innovation Through AI Excellence"}
          </p>
          <p className={`text-2xl md:text-3xl mb-6 font-medium max-w-xl mx-auto text-white`}>
            {language === "arabic"
              ? "تعرف على رحلتنا وقيمنا والفريق الذي يقود الابتكار في الذكاء الاصطناعي والحلول الرقمية."
              : language === "hebrew"
              ? "הכירו את המסע שלנו, הערכים והצוות שמוביל חדשנות ב-AI ופתרונות דיגיטליים."
              : "Learn about our journey, values, and the team driving innovation in AI and digital solutions."}
          </p>
        </div>
      </section>

      {/* Our Growth Through Years Section - Centered Image with Hexagons */}
      <section className={theme === "dark" ? "py-20 px-4 bg-[#181818] relative overflow-x-hidden" : "py-20 px-4 bg-gray-100 relative overflow-x-hidden"}>
        <div className="w-full max-w-6xl mx-auto relative z-20">
          <h2 className={`text-4xl font-bold mb-8 text-center`} style={{ color: 'rgb(59,28,10)' }}>
            {language === "arabic"
              ? "نموّنا عبر السنوات"
              : language === "hebrew"
              ? "הצמיחה שלנו לאורך השנים"
              : "Our Growth Through Years"}
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
            <div className="flex flex-col gap-8">
              {growthYears.slice(0, 3).map((item, index) => (
                <div key={index} className="mx-2">
                  <div className="hexagon text-white flex flex-col items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)', minWidth: '160px', minHeight: '140px' }}>
                    <div className="text-sm font-semibold mb-2 text-center" style={{ color: '#fbeee6' }}>{item.title[language]}</div>
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-6 h-px bg-white mx-2"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xl font-bold">{item.year}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center mx-4">
              <img src="/src/assets/ai.webp" alt="AI Teamwork" className="rounded-3xl shadow-lg object-cover w-full max-w-2xl h-[550px]" />
            </div>
            <div className="flex flex-col gap-8">
              {growthYears.slice(3, 6).map((item, index) => (
                <div key={index + 3} className="mx-2">
                  <div className="hexagon text-white flex flex-col items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)', minWidth: '160px', minHeight: '140px' }}>
                    <div className="text-sm font-semibold mb-2 text-center" style={{ color: '#fbeee6' }}>{item.title[language]}</div>
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-6 h-px bg-white mx-2"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="text-xl font-bold">{item.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our CEO Section */}
      <section className="py-20 px-4 w-full" style={{background: 'linear-gradient(90deg, #fbeee6 0%, #f7e6ef 100%)'}}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative flex items-center justify-center md:w-1/2 w-full mb-8 md:mb-0">
            <div className="w-[22rem] h-[22rem] rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg border-4 border-[#f7e6ef]">
              <img src={ceoImg} alt="Demish Tornado" className="w-full h-full object-cover" />
            </div>
            <div className="absolute left-0 bottom-8 md:-left-16 md:bottom-8 bg-[#f7cfc2] px-8 py-3 rounded-xl shadow-lg flex flex-col items-start" style={{minWidth: '180px'}}>
              <span className="font-bold text-lg text-[#4b3f2a]">Demish Tornado</span>
              <span className="text-sm text-[#a67c52]">CEO & Founder</span>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4b3f2a] leading-tight">
              {language === "arabic"
                ? "تعرف على المدير التنفيذي"
                : language === "hebrew"
                ? 'הכירו את המנכ"ל שלנו'
                : "Meet Our CEO"}
            </h2>
            <hr className="w-24 border-t-2 border-[#a67c52] mb-4 mx-auto md:mx-0" />
            <div className="text-xl font-semibold mb-2 text-[#4b3f2a]">
              {language === "arabic"
                ? "عن المدير التنفيذي"
                : language === "hebrew"
                ? 'על המנכ"ל שלנו'
                : "About Our CEO"}
            </div>
            <p className="text-base text-[#6d5c3e] max-w-md mb-8">
              {language === "arabic"
                ? "في قلب رحلتنا يوجد المدير التنفيذي، الذي يسعى لجعل الذكاء الاصطناعي متاحًا وأخلاقيًا وذا تأثير للجميع. يقود فريقنا بشغف والتزام، ويؤمن بالابتكار وحلول تركز على المستخدم، مما يدفعنا لإنشاء أدوات تمكّن الشركات والمبدعين والأفراد حول العالم."
                : language === "hebrew"
                ? 'בלב המסע שלנו עומד המנכ"ל, ששואף להפוך את הבינה המלאכותית לנגישה, אתית ובעלת השפעה לכולם. הוא מוביל את הצוות שלנו בתשוקה ומחויבות, מאמין בחדשנות ופתרונות ממוקדי משתמש, ודוחף אותנו ליצור כלים שמעצימים עסקים, יוצרים ויחידים ברחבי העולם.'
                : "At the heart of our journey is our CEO, whose vision is to make AI accessible, ethical, and impactful for everyone. With a strong belief in innovation and user-centric solutions, they lead our team with passion and commitment, driving us to create tools that empower businesses, creators, and individuals worldwide."}
            </p>
            <button className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#f7cfc2] text-[#a67c52] rounded-full w-10 h-10 flex items-center justify-center shadow-md border-none" aria-label="Next">
              <span className="text-2xl">&#8594;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision Statement Section */}
      <section
        className="py-20 px-4 w-full"
        style={{ background: 'linear-gradient(135deg, #63342e 0%, #312525 20%, #d6ab88 40%, #c58d6a 60%, #9a644a 80%, #63342e 100%)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center mb-12">
          <h2 className="text-5xl font-extrabold text-center mb-4 text-[#fff]">
            {language === "arabic"
              ? "بيان مهمتنا ورؤيتنا"
              : language === "hebrew"
              ? "הצהרת המשימה והחזון שלנו"
              : "Our Mission and Vision Statement"}
          </h2>
          <p className={`text-lg text-center max-w-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-300'}`}>
            {language === "arabic"
              ? "تعرض هذه الصفحة مهمة ورؤية شركتنا في مجال الذكاء الاصطناعي، وتوضح أهدافنا المستقبلية وخبراتنا."
              : language === "hebrew"
              ? "חלק זה מציג את המשימה והחזון של חברת ה-AI שלנו, כולל מטרות עתידיות ומומחיות."
              : "This section presents the mission and vision of our AI company, outlining our purpose, future goals, and expertise."}
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Card */}
          <div className={`${theme === 'dark' ? 'bg-[#222]' : 'bg-white'} rounded-3xl shadow-lg flex flex-col items-center p-10 text-center`}>
            <div className="w-20 h-20 flex items-center justify-center rounded-full" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
              <VisionSVG />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#312525] dark:text-white">
              {language === "arabic" ? "الرؤية" : language === "hebrew" ? "חזון" : "Vision"}
            </h3>
            <p className={`mb-2 text-justify ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === "arabic"
                ? "أن نكون المزود الأكثر ثقة لحلول الذكاء الاصطناعي في العالم، ونمكّن المؤسسات من الابتكار والنمو وتحقيق التميز من خلال التكنولوجيا المتاحة والمتحولة."
                : language === "hebrew"
                ? "להיות הספק האמין ביותר בעולם לפתרונות מבוססי AI, להעצים ארגונים לחדש, לצמוח ולהשיג מצוינות באמצעות טכנולוגיה נגישה ומשנה."
                : "To be the world’s most trusted provider of AI-driven solutions, empowering organizations to innovate, grow, and achieve excellence through accessible and transformative technology."}
            </p>
          </div>
          {/* Center Image */}
          <div className="flex items-center justify-center">
            <img src="/src/assets/ai.webp" alt="AI Teamwork" className="rounded-3xl shadow-lg object-cover w-full h-84 md:h-80" />
          </div>
          {/* Mission Card */}
          <div className={`${theme === 'dark' ? 'bg-[#222]' : 'bg-white'} rounded-3xl shadow-lg flex flex-col items-center p-10 text-center`}>
            <div className="w-20 h-20 flex items-center justify-center rounded-full" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
              <MissionSVG />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#312525] dark:text-white">
              {language === "arabic" ? "المهمة" : language === "hebrew" ? "משימה" : "Mission"}
            </h3>
            <p className={`mb-2 text-justify ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === "arabic"
                ? "تقديم أدوات ذكاء اصطناعي موثوقة ومتطورة وسهلة الاستخدام تساعد الشركات من جميع الأحجام على اكتشاف فرص جديدة، وزيادة الكفاءة، والبقاء في المقدمة في عالم رقمي سريع التطور، مع الالتزام بأعلى معايير الجودة والشفافية والنزاهة."
                : language === "hebrew"
                ? "לספק כלים אמינים, מתקדמים וידידותיים למשתמש בתחום ה-AI, המסייעים לעסקים בכל הגדלים לגלות הזדמנויות חדשות, להניע יעילות ולהישאר מובילים בעולם דיגיטלי מתפתח במהירות — תוך שמירה על הסטנדרטים הגבוהים ביותר של איכות, שקיפות ויושרה."
                : "To deliver reliable, cutting-edge, and user-friendly AI tools that help businesses of all sizes unlock new opportunities, drive efficiency, and stay ahead in a rapidly evolving digital world—while upholding the highest standards of quality, transparency, and integrity."}
            </p>
          </div>
        </div>
      </section>

          {/* What Makes Us Unique Section - Creative Layout */}
  <section className={`py-20 px-4 w-full`} style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className={`text-5xl font-extrabold mb-8 text-center text-[#312525]`}>
            {language === "arabic"
              ? "ما الذي يجعلنا مميزين"
              : language === "hebrew"
              ? "מה מייחד אותנו"
              : "What Makes Us Unique"}
          </h2>
          <p className={`text-lg text-center mb-12 max-w-2xl mx-auto text-white`}>
            {language === "arabic"
              ? "اكتشف الصفات التي تميزنا وتقود نجاحنا في صناعة الذكاء الاصطناعي."
              : language === "hebrew"
              ? "גלה את התכונות שמבדילות אותנו ומובילות להצלחתנו בתעשיית ה-AI."
              : "Discover the qualities that set us apart and drive our success in the AI industry."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
            <div className="hexagon-creative motion-card-creative bg-white p-8 flex flex-col items-center justify-center shadow-xl rounded-2xl">
              <div className="font-bold text-2xl mb-2 text-[#312525]">
                {language === "arabic"
                  ? "خبرة مثبتة"
                  : language === "hebrew"
                  ? "מומחיות מוכחת"
                  : "Proven Expertise"}
              </div>
              <div className="text-black text-center">
                {language === "arabic"
                  ? "يتمتع فريقنا بسنوات من الخبرة العملية في تقديم حلول ذكاء اصطناعي مؤثرة عبر صناعات متنوعة."
                  : language === "hebrew"
                  ? "הצוות שלנו מביא שנים של ניסיון מעשי במתן פתרונות AI משמעותיים במגוון תעשיות."
                  : "Our team brings years of hands-on experience delivering impactful AI solutions across diverse industries."}
              </div>
            </div>
            <div className="hexagon-creative motion-card-creative bg-white p-8 flex flex-col items-center justify-center shadow-xl rounded-2xl">
              <div className="font-bold text-2xl mb-2 text-[#312525]">
                {language === "arabic"
                  ? "حلول شاملة"
                  : language === "hebrew"
                  ? "פתרונות מקצה לקצה"
                  : "End-to-End Solutions"}
              </div>
              <div className="text-black text-center">
                {language === "arabic"
                  ? "نقدم خدمات شاملة، من الاستراتيجية والتطوير إلى النشر والدعم المستمر."
                  : language === "hebrew"
                  ? "אנו מציעים שירותים מקיפים, מאסטרטגיה ופיתוח ועד לפריסה ותמיכה שוטפת."
                  : "We offer comprehensive services, from strategy and development to deployment and ongoing support."}
              </div>
            </div>
            <div className="hexagon-creative motion-card-creative bg-white p-8 flex flex-col items-center justify-center shadow-xl rounded-2xl">
              <div className="font-bold text-2xl mb-2 text-[#312525]">
                {language === "arabic"
                  ? "تركيز على العميل"
                  : language === "hebrew"
                  ? "מיקוד בלקוח"
                  : "Client-Centric Focus"}
              </div>
              <div className="text-black text-center">
                {language === "arabic"
                  ? "نخصص كل مشروع لاحتياجات عملائنا الفريدة، ونضمن قيمة ورضا قابلين للقياس."
                  : language === "hebrew"
                  ? "אנו מתאימים כל פרויקט לצרכים הייחודיים של לקוחותינו, ומבטיחים ערך ומדידה."
                  : "We tailor every project to our clients’ unique needs, ensuring measurable value and satisfaction."}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-10">
            <div className="hexagon-creative motion-card-creative bg-white p-8 flex flex-col items-center justify-center shadow-xl rounded-2xl">
              <div className="font-bold text-2xl mb-2 text-[#312525]">
                {language === "arabic"
                  ? "مرن ومبتكر"
                  : language === "hebrew"
                  ? "זריז וחדשני"
                  : "Agile & Innovative"}
              </div>
              <div className="text-black text-center">
                {language === "arabic"
                  ? "نحتضن التغيير ونتكيف بسرعة ونبتكر لنحافظ على تقدم عملائنا."
                  : language === "hebrew"
                  ? "אנו מאמצים שינוי, מסתגלים במהירות ומחדשים כדי לשמור על לקוחותינו מובילים."
                  : "We embrace change, rapidly adapting and innovating to keep our clients ahead of the curve."}
              </div>
            </div>
            <div className="hexagon-creative motion-card-creative bg-white p-8 flex flex-col items-center justify-center shadow-xl rounded-2xl">
              <div className="font-bold text-2xl mb-2 text-[#312525]">
                {language === "arabic"
                  ? "شراكات موثوقة"
                  : language === "hebrew"
                  ? "שותפויות אמינות"
                  : "Trusted Partnerships"}
              </div>
              <div className="text-black text-center">
                {language === "arabic"
                  ? "نبني علاقات طويلة الأمد قائمة على الشفافية والموثوقية والنجاح المشترك."
                  : language === "hebrew"
                  ? "אנו בונים מערכות יחסים ארוכות טווח המבוססות על שקיפות, אמינות והצלחה משותפת."
                  : "We build long-term relationships based on transparency, reliability, and shared success."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className={`py-16 px-4 w-full`} style={{background: 'white'}}>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#312525]">
            {language === "arabic"
              ? "هل أنت مستعد لتحويل عملك؟"
              : language === "hebrew"
              ? "מוכן לשנות את העסק שלך?"
              : "Ready to Transform Your Business?"}
          </h2>
          <p className={`text-lg mb-8 max-w-2xl text-black`}>
            {language === "arabic"
              ? "تواصل معنا اليوم لاكتشاف كيف يمكن لحلول الذكاء الاصطناعي لدينا أن تدفع الابتكار والكفاءة والنمو لمؤسستك."
              : language === "hebrew"
              ? "צור קשר עוד היום כדי לגלות כיצד פתרונות ה-AI שלנו יכולים להניע חדשנות, יעילות וצמיחה לארגון שלך."
              : "Contact us today to discover how our AI solutions can drive innovation, efficiency, and growth for your organization."}
          </p>
          <a href="/contact" className="inline-block font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-200 text-white" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
            {language === "arabic"
              ? "ابدأ الآن"
              : language === "hebrew"
              ? "התחל עכשיו"
              : "Get Started"}
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
