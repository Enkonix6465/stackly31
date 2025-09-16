import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from "./context/LanguageContext";
import { useNavigate } from 'react-router-dom';
import homeHero from './assets/homehero2.png';
import homeHeroVideo from './assets/homepagehero.mp4';
import ctaHome from './assets/robot.jpg';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useTheme } from './context/ThemeContext';
import robot from './assets/robot.png';
import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.webp';
import img5 from './assets/5.jpeg';
import img6 from './assets/6.png';
import img7 from './assets/7.webp';
import img8 from './assets/8.webp';
import img9 from './assets/9.webp';
import img10 from './assets/10.jpg';

export default function HomePage() {
  const { language, isRTL, translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Array of imported images
  const logos = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
  ];

  const servicesTranslations = {
    english: [
      {
        title: 'Content Generation',
        desc: 'Generate high-quality written content for blogs, marketing, and more with advanced AI tools.'
      },
      {
        title: 'Image & Design Tools',
        desc: 'Create stunning images, graphics, and designs using AI-powered creativity and automation.'
      },
      {
        title: 'AI Chatbots & Virtual Assistants',
        desc: 'Automate customer support and engagement with intelligent chatbots and virtual assistants.'
      },
      {
        title: 'AI Code Assistants',
        desc: 'Boost your coding productivity with AI-powered code completion, review, and generation.'
      },
      {
        title: 'Data & Analytics',
        desc: 'Analyze data, generate insights, and forecast trends for smarter business decisions.'
      },
      {
        title: 'AI Voice & Video Tools',
        desc: 'Transform audio and video content with AI-driven editing, enhancement, and automation.'
      }
    ],
    arabic: [
      {
        title: 'إنشاء المحتوى',
        desc: 'أنشئ محتوى مكتوب عالي الجودة للمدونات والتسويق والمزيد باستخدام أدوات الذكاء الاصطناعي المتقدمة.'
      },
      {
        title: 'أدوات الصور والتصميم',
        desc: 'أنشئ صورًا وتصاميم رائعة باستخدام الإبداع والأتمتة المدعومة بالذكاء الاصطناعي.'
      },
      {
        title: 'الدردشة الذكية والمساعدون الافتراضيون',
        desc: 'قم بأتمتة دعم العملاء والتفاعل معهم باستخدام الدردشة الذكية والمساعدين الافتراضيين.'
      },
      {
        title: 'مساعدو البرمجة بالذكاء الاصطناعي',
        desc: 'عزز إنتاجيتك البرمجية باستخدام الإكمال والمراجعة وإنشاء الكود المدعوم بالذكاء الاصطناعي.'
      },
      {
        title: 'البيانات والتحليلات',
        desc: 'حلل البيانات، واستخرج الرؤى، وتوقع الاتجاهات لاتخاذ قرارات أعمال أكثر ذكاءً.'
      },
      {
        title: 'أدوات الصوت والفيديو بالذكاء الاصطناعي',
        desc: 'حوّل المحتوى الصوتي والمرئي باستخدام التحرير والتحسين والأتمتة المدعومة بالذكاء الاصطناعي.'
      }
    ],
    hebrew: [
      {
        title: 'יצירת תוכן',
        desc: 'צור תוכן כתוב איכותי לבלוגים, שיווק ועוד עם כלי AI מתקדמים.'
      },
      {
        title: 'כלי תמונה ועיצוב',
        desc: 'צור תמונות, גרפיקה ועיצובים מדהימים באמצעות יצירתיות ואוטומציה מבוססת AI.'
      },
      {
        title: 'צ׳אטבוטים ועוזרים וירטואליים',
        desc: 'אוטומציה של תמיכת לקוחות ומעורבות עם צ׳אטבוטים ועוזרים וירטואליים חכמים.'
      },
      {
        title: 'עוזרי קוד מבוססי AI',
        desc: 'שפר את הפרודוקטיביות שלך עם השלמת קוד, סקירה ויצירה מבוססי AI.'
      },
      {
        title: 'נתונים וניתוחים',
        desc: 'נתח נתונים, הפק תובנות וחזה מגמות לקבלת החלטות עסקיות חכמות יותר.'
      },
      {
        title: 'כלי קול ווידאו מבוססי AI',
        desc: 'הפוך תוכן אודיו ווידאו עם עריכה, שיפור ואוטומציה מבוססי AI.'
      }
    ]
  };
  const services = servicesTranslations[language];

  // Scroll to top when component mounts
  useScrollToTop();

  // Additional scroll to top effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const testimonialsData = {
    english: [
      {
        id: 1,
        name: "Aarav",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        stars: "★★★★★",
        text: "Joining this platform was the best decision for my business. The expert AI tools and personalized support helped me automate workflows!",
        handle: "@aarav.brown"
      },
      {
        id: 2,
        name: "Hindley Ernshaw",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        stars: "★★★★★",
        text: "The AI-powered chatbots and workflow tools are a game changer. Highly recommend for any business looking to scale with AI.",
        handle: "@hindley.es"
      },
      {
        id: 3,
        name: "Victoria Weirro",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: "★★★★★",
        text: "The AI analytics dashboard gave me insights I never had before. The support team is unmatched!",
        handle: "Femmetrain Oslo Co."
      },
      {
        id: 4,
        name: "Lina Gomez",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        stars: "★★★★★",
        text: "The transformation programs are amazing! I gained confidence and strength with this amazing platform.",
        handle: "Member"
      },
      {
        id: 5,
        name: "Basil Nishved",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        stars: "★★★★★",
        text: "The AI tools and expert advice keep me on track. I have never felt more supported in my business journey!",
        handle: "Co-Founder Grandcoz"
      },
      {
        id: 6,
        name: "Samuel Lee",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        stars: "★★★★★",
        text: "Exceptional platform! The range of AI tools available has helped our team innovate faster and deliver better results.",
        handle: "@samuel.lee"
      }
    ],
    arabic: [
      {
        id: 1,
        name: "أرناف",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        stars: "★★★★★",
        text: "الانضمام إلى هذه المنصة كان أفضل قرار لعملي. أدوات الذكاء الاصطناعي والدعم الشخصي ساعدوني في أتمتة سير العمل!",
        handle: "@aarav.brown"
      },
      {
        id: 2,
        name: "هندلي إيرنشو",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        stars: "★★★★★",
        text: "الدردشة الذكية وأدوات سير العمل غيرت قواعد اللعبة. أنصح بها لأي عمل يريد النمو بالذكاء الاصطناعي.",
        handle: "@hindley.es"
      },
      {
        id: 3,
        name: "فيكتوريا ويرو",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: "★★★★★",
        text: "لوحة تحليلات الذكاء الاصطناعي أعطتني رؤى لم أحصل عليها من قبل. فريق الدعم رائع!",
        handle: "Femmetrain Oslo Co."
      },
      {
        id: 4,
        name: "لينا غوميز",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        stars: "★★★★★",
        text: "برامج التحول رائعة! اكتسبت ثقة وقوة مع هذه المنصة المذهلة.",
        handle: "عضو"
      },
      {
        id: 5,
        name: "باسل نيشفيد",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        stars: "★★★★★",
        text: "أدوات الذكاء الاصطناعي والنصائح الخبيرة تبقيني على المسار الصحيح. لم أشعر بالدعم أكثر في رحلتي العملية!",
        handle: "المؤسس المشارك Grandcoz"
      },
      {
        id: 6,
        name: "صموئيل لي",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        stars: "★★★★★",
        text: "منصة استثنائية! مجموعة أدوات الذكاء الاصطناعي ساعدت فريقنا على الابتكار بسرعة وتحقيق نتائج أفضل.",
        handle: "@samuel.lee"
      }
    ],
    hebrew: [
      {
        id: 1,
        name: "אראב",
        image: "https://randomuser.me/api/portraits/men/31.jpg",
        stars: "★★★★★",
        text: "ההצטרפות לפלטפורמה הזו הייתה ההחלטה הטובה ביותר לעסק שלי. כלי ה-AI והתמיכה האישית עזרו לי לאוטומט תהליכים!",
        handle: "@aarav.brown"
      },
      {
        id: 2,
        name: "הינדלי ארנשו",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        stars: "★★★★★",
        text: "הצ'אטבוטים החכמים וכלי העבודה שינו את כללי המשחק. ממליצה לכל עסק שרוצה לצמוח עם AI.",
        handle: "@hindley.es"
      },
      {
        id: 3,
        name: "ויקטוריה ויירו",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        stars: "★★★★★",
        text: "לוח הבקרה האנליטי של ה-AI נתן לי תובנות שלא היו לי קודם. צוות התמיכה מדהים!",
        handle: "Femmetrain Oslo Co."
      },
      {
        id: 4,
        name: "לינה גומז",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        stars: "★★★★★",
        text: "תוכניות השינוי מדהימות! קיבלתי ביטחון וכוח עם הפלטפורמה המדהימה הזו.",
        handle: "חבר"
      },
      {
        id: 5,
        name: "באסיל נישווד",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        stars: "★★★★★",
        text: "כלי ה-AI והעצות המקצועיות שומרים אותי במסלול. מעולם לא הרגשתי נתמך יותר במסע העסקי שלי!",
        handle: "מייסד שותף Grandcoz"
      },
      {
        id: 6,
        name: "סמואל לי",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        stars: "★★★★★",
        text: "פלטפורמה יוצאת דופן! מגוון כלי ה-AI עזרו לצוות שלנו לחדש מהר יותר ולהשיג תוצאות טובות יותר.",
        handle: "@samuel.lee"
      }
    ]
  };
  const testimonials = testimonialsData[language];

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause auto-play when user manually navigates
    setIsAutoPlaying(false);
    // Resume auto-play after 3 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const { theme } = useTheme();

  return (
  <div dir={isRTL ? "rtl" : "ltr"}>
      <section
        className="w-full h-screen flex items-center px-4 pt-16 md:pt-20 overflow-hidden relative"
        style={{
          background: theme === 'dark'
            ? '#000'
            : 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
          color: theme === 'dark' ? 'white' : 'black',
        }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            style={{ filter: theme === 'dark' ? 'brightness(0.6)' : 'brightness(0.9)' }}
          >
            <source src={homeHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-start items-center z-10 max-w-full w-full mx-auto pl-8 md:pl-0 pt-8 mt-0">
          <div className="mb-4">
             
          </div>
          <h1 className="font-extrabold mb-6 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight max-w-6xl">
            {translations.heroTitle}
          </h1>
          <p
            className="mb-8 text-center text-lg max-w-lg"
            style={{ color: theme === 'dark' ? 'white' : 'white' }}
          >
            {translations.heroDesc}<br />
          </p>
          <div className="flex justify-center mb-8 mt-4 w-full">
            <button
              onClick={() => handleNavigation('/services')}
              className="font-bold rounded-full px-10 py-3 text-lg shadow-lg"
              style={theme === 'dark'
                ? { background: 'white', color: 'black' }
                : {
                  background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                  color: 'white'
                }
              }
            >
              {translations.explore}
            </button>
          </div>
        </div>
      </section>

      <section
        className="w-full py-16 px-4 flex flex-col md:flex-row items-stretch justify-center gap-8 mx-auto"
        style={{
          background: 'white',
          color: theme === 'dark' ? 'white' : 'black',
        }}
      >
        {/* Left: Image */}
        <div className="flex-1 max-w-lg pl-4 md:pl-8 flex items-stretch">
          <img
            src={robot}
            alt="AI Robot"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 max-w-xl pr-4 md:pr-8 flex flex-col justify-center">
          <div className="text-[rgb(59,28,10)] text-sm font-semibold mb-2 tracking-wider">
            {translations.whoWeAre}
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ color: theme === 'dark' ? 'white' : 'brown' }}
          >
            {translations.empower}
          </h2>
          <p
            className={`${theme === 'dark' ? 'text-white' : 'text-black'
              } text-base md:text-lg mb-6 text-justify`}
          >
            {translations.about}
          </p>
          <p
            className={`${theme === 'dark' ? 'text-white' : 'text-black'
              } text-base md:text-lg mb-6 text-justify`}
          >
            {translations.about2}
          </p>
          <button
            onClick={() => handleNavigation('/about-us')}
            className="font-bold rounded-full px-6 py-2 text-base shadow transition-colors border-none outline-none mt-auto"
            style={theme === 'dark'
              ? { background: 'white', color: 'black' }
              : {
                background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                color: 'white'
              }
            }
          >
            {translations.learnMore}
          </button>
        </div>
      </section>

      <section
        className="w-full py-20 px-4 transition-colors duration-300"
        style={{
          background: 'rgb(219, 158, 111)',
          color: theme === 'dark' ? 'white' : 'black',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-12"
            style={{ color: 'rgb(59,28,10)' }}
          >
            {translations.ourService}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, i) => (
                <div key={i} className="flex items-start">
                  {/* Circle */}
                  <div
                    className="flex items-center justify-center rounded-full mr-4"
                    style={{
                      backgroundColor: 'rgb(59,28,10)',
                      width: '56px',
                      height: '56px',
                      fontWeight: '700',
                      fontSize: '1.25rem',
                      minWidth: '56px',
                      minHeight: '56px',
                      lineHeight: '56px',
                      textAlign: 'center',
                      userSelect: 'none',
                    }}
                  >
                    <span style={{ color: 'rgb(219, 158, 111)' }}>{i < 9 ? `0${i + 1}` : i + 1}</span>
                  </div>
                  {/* Text */}
                  <div>
                    <div
                      className="text-lg font-bold mb-1"
                      style={{ color: theme === 'dark' ? 'white' : 'brown' }}
                    >
                      {service.title}
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: theme === 'dark' ? '#d6ab88' : 'brown' }}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>



      <section
        className="w-full py-16 px-4 transition-colors duration-300"
        style={{
          background: 'white',
          color: theme === 'dark' ? 'white' : 'black',
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-2"
            style={{ color: theme === 'dark' ? 'white' : 'brown' }}
          >
            {translations.trusted}
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: theme === 'dark' ? 'white' : 'black' }}
          >
            {translations.trustedDesc}
          </p>

          {/* Scrolling container */}
          <div className="overflow-hidden relative">
            <div
              className="flex space-x-8 animate-marquee"
              style={{ width: 'max-content' }}
            >
              {/* Repeat logos twice for seamless scrolling */}
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-white rounded-lg shadow-md p-4 flex items-center justify-center"
                  style={{ width: 140, height: 80 }}
                >
                  <img
                    src={logo}
                    alt={`Partner ${idx + 1}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tailwind CSS custom animation */}
  <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      </section>



      <section className="w-full py-20 px-4" style={{ background: 'rgb(219, 158, 111)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12" style={{ color: theme === 'dark' ? 'white' : 'brown' }}>{translations.whatUsersSay}</h2>
          {/* Carousel Container with 3-card scrolling effect */}
          <div className="relative">
            <div className="flex justify-center items-center gap-8 px-16 mb-8 overflow-hidden" style={{ minHeight: '340px' }}>
              <div className="flex gap-8 transition-all duration-700 ease-in-out" style={{ transform: 'translateX(0)' }}>
                {(() => {
                  const leftIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
                  const rightIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
                  const visible = [leftIndex, currentIndex, rightIndex];
                  return visible.map((idx, i) => (
                    <div
                      key={testimonials[idx].id}
                      className={`w-96 rounded-xl shadow-lg p-8 text-center transition-all duration-500 ease-in-out flex-shrink-0 ${i === 1
                          ? `${theme === 'dark' ? 'bg-[#111211] scale-110 opacity-100 z-10 shadow-2xl shadow-[#d6ab88]' : 'bg-white scale-110 opacity-100 z-10 shadow-2xl shadow-[#d6ab88]'}`
                          : `${theme === 'dark' ? 'bg-[#111211] scale-90 opacity-60 z-0 blur-sm' : 'bg-white scale-90 opacity-60 z-0 blur-sm'}`
                        }`}
                      style={{
                        transform: i === 1 ? 'translateY(0)' : 'translateY(10px)',
                        filter: i === 1 ? 'none' : 'blur(2px)'
                      }}
                    >
                      <img
                        src={testimonials[idx].image}
                        alt={testimonials[idx].name}
                        loading="lazy"
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-4 transition-all duration-300"
                        style={{
                          border: '4px solid',
                          borderImage: 'linear-gradient(to right, #63342e, #d6ab88, #c58d6a, #9a644a, #63342e) 1',
                          borderRadius: '50%'
                        }}
                      />
                      <div className={`font-bold text-lg mb-2 transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{testimonials[idx].name}</div>
                      <div className="flex justify-center mb-3">
                        <span className="text-[#d6ab88] text-xl transition-all duration-300">{testimonials[idx].stars}</span>
                      </div>
                      <div className={`text-sm mb-3 transition-all duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>"{testimonials[idx].text}"</div>
                       <div className="text-[#d6ab88] text-xs transition-all duration-300">{testimonials[idx].handle}</div>
                    </div>
                  ));
                })()}
              </div>
            </div>
            {/* Number Navigation */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${currentIndex === index
                      ? 'bg-gradient-to-r from-[#d6ab88] to-[#9a644a] text-white shadow-lg'
                      : theme === 'dark'
                        ? 'bg-gradient-to-r from-black to-[#312525] text-[#d6ab88] hover:bg-[#d6ab88] hover:text-white'
                        : 'bg-gradient-to-r from-gray-200 to-[#d6ab88] text-[#9a644a] hover:bg-[#d6ab88] hover:text-white'
                    }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="w-full px-4 py-20 md:py-28 transition-colors duration-300"
        style={{
          background: 'white',
          color: theme === 'dark' ? 'white' : 'black',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: theme === 'dark' ? 'white' : 'brown' }}
            >
              {translations.empowerWorkflow}
            </h2>

            <p
              className="text-lg leading-relaxed mb-10 text-justify"
              style={{ color: theme === 'dark' ? 'white' : 'black' }}
            >
              {translations.empowerDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNavigation('/services')}
                className="font-bold rounded-lg px-8 py-3 text-base shadow transition-colors"
                style={theme === 'dark'
                  ? { background: 'white', color: 'black' }
                  : {
                    background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                    color: 'white'
                  }
                }
              >
                {translations.exploreTools}
              </button>
              <button
                onClick={() => handleNavigation('/about-us')}
                className="font-bold rounded-lg px-8 py-3 text-base shadow transition-colors"
                style={theme === 'dark'
                  ? { background: 'white', color: 'black' }
                  : {
                    background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                    color: 'white'
                  }
                }
              >
                {translations.learnMoreArrow}
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-full">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                loading="lazy"
                src={ctaHome}
                alt="AI Workflow"
                className="w-full h-full object-cover rounded-lg"
                style={{ filter: 'brightness(1.2)' }}
              />
            </div>
          </div>
        </div>
      </section>


  </div>
  );
} 