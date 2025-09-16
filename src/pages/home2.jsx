       
import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/SecondHome/home2.mp4";
import aiChatbotImg from "../assets/ai chatbots & assistants1.webp";
import workflowImg from "../assets/Automation & Workflow Tools2.jpg";
import dataAnalysisImg from "../assets/Data Analysis & Forecasting2.jpg";
import progressImg from "../assets/feature-analytics.png";
import customAIImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import { useTheme } from "../context/ThemeContext";
// import sofiaMuller from '../assets/SecondHome/Sofia Müller.jpg';
// ...existing code...
// (Remove this duplicate block entirely)
// import sofiaMuller from '../assets/SecondHome/Sofia Müller.jpg';
import drAlexCarter from '../assets/SecondHome/Dr. Alex Carter.jpg';
import ethanKim from '../assets/SecondHome/Ethan Kim .jpeg.jpg';
import lindaZhao from '../assets/SecondHome/Linda Zhao.jpg';
import miguelTorres from '../assets/SecondHome/Miguel Torres.webp';
import priyaSingh from '../assets/SecondHome/Priya Singh.webp';
import ceoImg from '../assets/SecondHome/ceo1.webp';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { ImpactMetricsNumbers } from '../components/ImpactMetricsNumbers';

// Removed custom useCountUp hook. ImpactMetricsNumbers uses react-countup for animation.

// ImpactMetricsNumbers now imported from components/ImpactMetricsNumbers.jsx
// Add a world map SVG or PNG to your assets
function ExpertCard({ img, name, title, bio }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div 
      className={`expert-card${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={img} loading="lazy" alt={name} className="expert-img" />
      <div className={`expert-info-container${hovered ? ' show' : ''}`}>
        <span className="expert-name">{name}</span>
        <span className="expert-underline"></span>
        <span className="expert-title">{title}</span>
        <span className="expert-bio">{bio}</span>
        <div className="expert-social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

const SecondHome = () => {
  const { language, isRTL, translations } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const webinarCarouselRef = useRef(null);
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    event: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showHorizontal, setShowHorizontal] = useState(false);
  
  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  
    return null; // Add a return statement to avoid errors
    return null; // Add a return statement to avoid errors
  }

  // Registration form handlers
  const handleRegisterClick = (eventName) => {
    setRegistrationData(prev => ({ ...prev, event: eventName }));
    setShowRegistrationForm(true);
  };

  // Uncomment the following line if you want to include the EventCarousel component in the return statement
  // <EventCarousel />

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setRegistrationData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        event: ''
      });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setShowRegistrationForm(false);
        setSubmitSuccess(false);
      }, 2000);
    }, 1500);
  };

  const closeModal = () => {
    setShowRegistrationForm(false);
    setSubmitSuccess(false);
    setRegistrationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      event: ''
    });
  };

  // Scroll to top when component mounts
  useScrollToTop();

  // Expert data
  const experts = [
    { img: drAlexCarter, name: 'Dr. Alex Carter', title: 'Lead AI Scientist', bio: 'Specializes in generative AI, machine learning, and automation for business transformation.' },
    { img: priyaSingh, name: 'Priya Singh', title: 'Chief Data Officer', bio: 'Expert in data analytics, security, and actionable insights for enterprise clients.' },
    { img: miguelTorres, name: 'Miguel Torres', title: 'AI Solutions Architect', bio: 'Designs scalable AI systems for workflow automation and client success.' },
    { img: lindaZhao, name: 'Linda Zhao', title: 'Data Science Lead', bio: 'Leads teams to deliver predictive analytics and drive business growth.' },
    { img: ethanKim, name: 'Ethan Kim', title: 'AI Product Manager', bio: 'Bridges business needs and technology, delivering user-focused AI products.' },
    { img: drAlexCarter, name: 'Sofia Müller', title: 'Cloud AI Engineer', bio: 'Ensures seamless cloud-native AI integration and deployment for global clients.' }
  ];

  const nextExpert = () => {
    setCurrentExpertIndex((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setCurrentExpertIndex((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const getExpertIndex = (offset) => {
    return (currentExpertIndex + offset + experts.length) % experts.length;
  };

  const scrollWebinars = (direction) => {
    const container = webinarCarouselRef.current;
    if (!container) return;
    const scrollAmount = 440; // slightly more than card min-width
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Webinar data for the calendar grid
  const webinarData = [
    {
      date: {
        english: "June 28, 2024",
        arabic: "٢٨ يونيو ٢٠٢٤",
        hebrew: "28 ביוני 2024"
      },
      title: {
        english: "AI in Action: Transforming Business Operations",
        arabic: "الذكاء الاصطناعي في العمل: تحويل العمليات التجارية",
        hebrew: "בינה מלאכותית בפעולה: שינוי תהליכים עסקיים"
      },
      time: {
        english: "4:00 PM GMT",
        arabic: "٤:٠٠ مساءً بتوقيت غرينتش",
        hebrew: "16:00 שעון גריניץ'"
      },
      image: aiChatbotImg
    },
    {
      date: {
        english: "July 12, 2024",
        arabic: "١٢ يوليو ٢٠٢٤",
        hebrew: "12 ביולי 2024"
      },
      title: {
        english: "NLP for Business: Unlocking Language Data",
        arabic: "معالجة اللغة الطبيعية للأعمال: فتح بيانات اللغة",
        hebrew: "NLP לעסקים: פתיחת נתוני שפה"
      },
      time: {
        english: "3:00 PM GMT",
        arabic: "٣:٠٠ مساءً بتوقيت غرينتش",
        hebrew: "15:00 שעון גריניץ'"
      },
      image: workflowImg
    },
    {
      date: {
        english: "July 26, 2024",
        arabic: "٢٦ يوليو ٢٠٢٤",
        hebrew: "26 ביולי 2024"
      },
      title: {
        english: "Automation & Workflow Tools in Practice",
        arabic: "أدوات الأتمتة وسير العمل في التطبيق",
        hebrew: "כלי אוטומציה וזרימת עבודה בפועל"
      },
      time: {
        english: "5:00 PM GMT",
        arabic: "٥:٠٠ مساءً بتوقيت غرينتش",
        hebrew: "17:00 שעון גריניץ'"
      },
      image: dataAnalysisImg
    },
    {
      date: {
        english: "August 9, 2024",
        arabic: "٩ أغسطس ٢٠٢٤",
        hebrew: "9 באוגוסט 2024"
      },
      title: {
        english: "Data Analysis & Forecasting with AI",
        arabic: "تحليل البيانات والتنبؤ باستخدام الذكاء الاصطناعي",
        hebrew: "ניתוח נתונים וחיזוי עם בינה מלאכותית"
      },
      time: {
        english: "2:00 PM GMT",
        arabic: "٢:٠٠ مساءً بتوقيت غرينتش",
        hebrew: "14:00 שעון גריניץ'"
      },
      image: customAIImg
    },
    // Add more webinars as needed
  ];

  const WebinarFeaturedList = () => {
    const [featured, ...others] = webinarData;
    return (
      <section className="py-20 px-4 min-h-[400px] flex flex-col items-center justify-center bg-gradient-to-br from-[#19bba6] to-[#0a2342]">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">Upcoming <span className="text-[#19e6f7]">Webinars</span></h2>
        {/* Featured Webinar */}
        <div className={`max-w-3xl w-full rounded-2xl shadow-2xl p-8 mb-10 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}>
          <div className="text-[#19e6f7] text-lg font-bold mb-2">{featured.date} &bull; {featured.time}</div>
          <div className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{featured.title}</div>
          <p className={`mb-6 ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>{featured.description}</p>
          <button 
            onClick={() => handleRegisterClick(featured.title)}
            className="inline-block font-bold text-lg px-10 py-4 rounded-lg shadow transition text-white hover:scale-105" 
            style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}
          >
            Register
          </button>
        </div>
        {/* List of Other Webinars */}
        <div className="max-w-6xl w-full flex flex-row gap-6 justify-center items-stretch">
          {others.map((webinar, idx) => (
            <div key={idx} className={`flex-1 max-w-xs rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'}`}>
              <div className="text-[#19e6f7] text-base font-bold mb-1">{webinar.date} &bull; {webinar.time}</div>
              <div className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{webinar.title}</div>
              <button 
                onClick={() => handleRegisterClick(webinar.title)}
                className="mt-4 inline-block font-bold text-base px-6 py-2 rounded-lg shadow transition text-white hover:scale-105" 
                style={{background: 'linear-gradient(135deg, #0a3a4a 0%, #179b8e 100%)'}}
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };



  // Sticky stack cards for upcoming webinars/events
  
  // Use webinarData for carouselEvents
  const EventCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselEvents = webinarData;

    // Translation strings for section
    const sectionTitles = {
      english: { future: "Future", events: "Events", register: "Register Now" },
      arabic: { future: "الفعاليات", events: "القادمة", register: "سجل الآن" },
      hebrew: { future: "אירועים", events: "קרובים", register: "הרשם עכשיו" },
    };
    const t = sectionTitles[language] || sectionTitles.english;

    // Auto-advance every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === carouselEvents.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }, [carouselEvents.length]);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselEvents.length - 1 ? 0 : prevIndex + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? carouselEvents.length - 1 : prevIndex - 1
      );
    };

    const getCardIndex = (offset) => {
      const index = (currentIndex + offset + carouselEvents.length) % carouselEvents.length;
      return index;
    };

    // RTL style for section
    const sectionDir = isRTL ? "rtl" : "ltr";

    return (
      <section className="pt-20 pb-0 px-0 w-full" style={{ background: 'linear-gradient(135deg, #63342e 0%, #c58d6a 100%)' }} dir={sectionDir}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center w-full">
          {t.future} <span className="text-[#19e6f7]">{t.events}</span>
        </h2>
        <div className="relative flex items-center justify-center w-full">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            aria-label={language === 'arabic' ? 'السابق' : language === 'hebrew' ? 'הקודם' : 'Previous'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 z-20 w-12 h-12 bg-[#19e6f7] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#0a3a4a] transition-colors duration-300"
            aria-label={language === 'arabic' ? 'التالي' : language === 'hebrew' ? 'הבא' : 'Next'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Cards */}
          <div className="flex items-center justify-center gap-8 relative">
            {/* Left Card */}
            <div className="relative transform transition-all duration-500 ease-in-out">
              <div className="w-72 h-[20rem] bg-[#232323] rounded-2xl shadow-xl overflow-hidden opacity-60 blur-sm scale-75 -translate-y-8">
                <div className="w-full h-[50%] relative">
                  <img 
                    src={carouselEvents[getCardIndex(-1)].image}
                    loading="lazy"
                    alt={carouselEvents[getCardIndex(-1)].title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="w-full h-[50%] p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm mb-2">{carouselEvents[getCardIndex(-1)].title[language]}</h3>
                    <p className="text-[#19e6f7] text-xs mb-2">{carouselEvents[getCardIndex(-1)].date[language]} • {carouselEvents[getCardIndex(-1)].time[language]}</p>
                  </div>
                  <button 
                    onClick={() => handleRegisterClick(carouselEvents[getCardIndex(-1)].title)}
                    className="inline-block font-bold text-base px-6 py-3 rounded-lg shadow-lg transition text-white hover:scale-105 text-center border-2 border-white" 
                    style={{background: 'linear-gradient(135deg, #63342e 0%, #c58d6a 100%)', boxShadow: '0 4px 16px #63342e55'}}
                  >
                    {t.register}
                  </button>
                </div>
              </div>
            </div>

            {/* Center Card (Main) */}
            <div className="relative transform transition-all duration-500 ease-in-out z-10">
              <div className="w-[22rem] h-[24rem] bg-[#232323] rounded-2xl shadow-2xl overflow-hidden scale-110">
                <div className="w-full h-[50%] relative">
                  <img 
                    src={carouselEvents[currentIndex].image}
                    loading="lazy"
                    alt={carouselEvents[currentIndex].title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="w-full h-[50%] p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{carouselEvents[currentIndex].title[language]}</h3>
                    <p className="text-[#19e6f7] text-sm mb-2">{carouselEvents[currentIndex].date[language]} • {carouselEvents[currentIndex].time[language]}</p>
                    <p className="text-[#bfc1be] text-sm">{carouselEvents[currentIndex].description}</p>
                  </div>
                  <button 
                    onClick={() => handleRegisterClick(carouselEvents[currentIndex].title)}
                    className="inline-block font-bold text-base px-8 py-3 rounded-lg shadow-lg transition text-white text-center hover:scale-105 border-2 border-white" 
                    style={{background: 'linear-gradient(135deg, #63342e 0%, #c58d6a 100%)', boxShadow: '0 4px 16px #63342e55'}}
                  >
                    {t.register}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative transform transition-all duration-500 ease-in-out">
              <div className="w-72 h-[20rem] bg-[#232323] rounded-2xl shadow-xl overflow-hidden opacity-60 blur-sm scale-75 -translate-y-8">
                <div className="w-full h-[50%] relative">
                  <img 
                    src={carouselEvents[getCardIndex(1)].image}
                    loading="lazy"
                    alt={carouselEvents[getCardIndex(1)].title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="w-full h-[50%] p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm mb-2">{carouselEvents[getCardIndex(1)].title[language]}</h3>
                    <p className="text-[#19e6f7] text-xs mb-2">{carouselEvents[getCardIndex(1)].date[language]} • {carouselEvents[getCardIndex(1)].time[language]}</p>
                  </div>
                  <button 
                    onClick={() => handleRegisterClick(carouselEvents[getCardIndex(1)].title)}
                    className="inline-block font-bold text-base px-6 py-3 rounded-lg shadow-lg transition text-white hover:scale-105 text-center border-2 border-white" 
                    style={{background: 'linear-gradient(135deg, #63342e 0%, #c58d6a 100%)', boxShadow: '0 4px 16px #63342e55'}}
                  >
                    {t.register}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
 


  return (
  <div className={`${theme === "dark" ? "bg-[#121212] text-white" : "bg-[#121212]  text-black"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* 1. Hero/Intro Section */}
     <section
  className="relative text-white py-12 shadow-2xl overflow-hidden w-full px-4 md:px-8 lg:px-16 min-h-[700px] flex items-center justify-center bg-[#121212]"
  style={{
    backgroundImage: `url(${heroVideo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black bg-opacity-60' : 'bg-black bg-opacity-60'}`}></div>
        <div className="relative z-10 max-w-3xl px-4 py-8 flex flex-col items-center justify-center text-center mx-auto" style={{textShadow: theme === 'dark' ? '0 2px 16px #000, 0 1px 2px #000' : 'none'}}>
          <span className="uppercase text-sm font-semibold tracking-widest mb-6" style={{
            background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
            display: 'inline-block',
          }}>{language === "arabic" ? "حلول الذكاء الاصطناعي" : language === "hebrew" ? "פתרונות בינה מלאכותית" : "AI Solutions"}</span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight whitespace-nowrap text-white">
            <span style={{
              background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              display: 'inline-block',
            }}>
              {language === "arabic"
                ? "حوّل سير عملك مع الذكاء الاصطناعي"
                : language === "hebrew"
                ? "שנה את זרימת העבודה שלך עם בינה מלאכותית"
                : "Transform Your Workflow with AI"}
            </span>
          </h1>
          <h2 className="text-2xl md:text-2xl font-semibold mb-6 text-white">
            {language === "arabic"
              ? "اكتشف إمكانيات الذكاء الاصطناعي المتقدم لتبسيط العمليات، وتعزيز الرؤى، وتسريع النمو."
              : language === "hebrew"
              ? "גלה את הפוטנציאל של בינה מלאכותית מתקדמת לייעול תהליכים, שיפור תובנות והאצת הצמיחה."
              : "Unlock the potential of cutting-edge artificial intelligence to streamline processes, boost insights, and speed up growth."}
          </h2>
           <button 
            onClick={() => handleNavigation('/contact-us')}
            className="inline-block px-10 py-4 rounded-full font-bold text-lg text-white hover:scale-105 transition-transform duration-300"
            style={{
              background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
              marginBottom: '0.5rem'
            }}>
            {language === "arabic" ? "ابدأ مجانًا" : language === "hebrew" ? "התחל בחינם" : "Get Started Free"}
          </button>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 px-4" style={{ background: '#f7f3ed' }}>
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: '#3b1c0a' }}>
            {language === "arabic" ? "لماذا تختارنا" : language === "hebrew" ? "למה לבחור בנו" : "Why Choose Us"}
          </h2>
          <p className="text-lg text-center mb-10" style={{ color: '#3b1c0a', maxWidth: 600 }}>
            {language === "arabic"
              ? "اكتشف كيف تساعد منصتنا المدعومة بالذكاء الاصطناعي الشركات على أتمتة المهام، واكتساب الرؤى، والتعاون بشكل أكثر ذكاءً. ميزاتنا مصممة للإنتاجية والأمان والنمو."
              : language === "hebrew"
              ? "גלה כיצד הפלטפורמה שלנו מבוססת AI מסייעת לעסקים לאוטומט משימות, לקבל תובנות ולשתף פעולה בצורה חכמה יותר. התכונות שלנו נועדו לפרודוקטיביות, אבטחה וצמיחה."
              : "Discover how our AI-powered platform helps businesses automate tasks, gain insights, and collaborate smarter. Our features are designed for productivity, security, and growth."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full" style={{ maxWidth: 1100 }}>
            <div className="rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col justify-end min-h-[220px] relative" style={{ gridColumn: 'span 2', background: 'linear-gradient(90deg, #e7dbc7 60%, #fff 100%)' }}>
              <img src={aiChatbotImg} alt="Cutting-Edge AI Technology" className="absolute inset-0 w-full h-full object-cover opacity-70" />
              <div className="relative z-10 p-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "تقنية الذكاء الاصطناعي المتقدمة"
                    : language === "hebrew"
                    ? "טכנולוגיית AI מתקדמת"
                    : "Cutting-Edge AI Technology"}
                </h3>
                <p className="text-sm" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "مدعومة بأحدث نماذج التعلم الآلي والذكاء الاصطناعي التوليدي لتقديم نتائج دقيقة وموثوقة."
                    : language === "hebrew"
                    ? "מופעל על ידי מודלים מתקדמים של למידת מכונה ו-AI גנרטיבי לתוצאות מדויקות ואמינות."
                    : "Powered by the latest machine learning and generative AI models to deliver accurate, reliable results."}
                </p>
              </div>
            </div>
            <div className="rounded-2xl shadow-lg bg-[#ede9e3] flex flex-col justify-end min-h-[220px] relative overflow-hidden">
              <img src={workflowImg} alt="User-Friendly & Intuitive" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10 p-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "سهل الاستخدام وبديهي"
                    : language === "hebrew"
                    ? "ידידותי למשתמש ואינטואיטיבי"
                    : "User-Friendly & Intuitive"}
                </h3>
                <p className="text-sm" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "لا حاجة للخبرة التقنية — أدواتنا مصممة للجميع، من المبتدئين إلى المحترفين."
                    : language === "hebrew"
                    ? "אין צורך בידע טכנולוגי — הכלים שלנו מתאימים לכולם, ממתחילים ועד מקצוענים."
                    : "No tech expertise required — our tools are designed for everyone, from beginners to professionals."}
                </p>
              </div>
            </div>
            <div className="rounded-2xl shadow-lg bg-[#e7dbc7] flex flex-col justify-end min-h-[220px] relative overflow-hidden">
              <img src={dataAnalysisImg} alt="All-in-One Platform" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10 p-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "منصة شاملة"
                    : language === "hebrew"
                    ? "פלטפורמה כוללת"
                    : "All-in-One Platform"}
                </h3>
                <p className="text-sm" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "الوصول إلى حلول الذكاء الاصطناعي المتعددة (المحتوى، التصميم، التحليلات، الدردشة، الصوت، البرمجة) في مكان واحد."
                    : language === "hebrew"
                    ? "גישה למגוון פתרונות AI (תוכן, עיצוב, אנליטיקה, צ'אט, קול, קוד) במקום אחד."
                    : "Access multiple AI solutions (content, design, analytics, chat, voice, code) in one place."}
                </p>
              </div>
            </div>
            <div className="rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col justify-end min-h-[220px] relative" style={{ gridColumn: 'span 2', background: 'linear-gradient(90deg, #e7dbc7 60%, #fff 100%)' }}>
              <img src={customAIImg} alt="Trusted by Professionals Worldwide" className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="relative z-10 p-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "موثوق به من قبل المحترفين حول العالم"
                    : language === "hebrew"
                    ? "נמצא בשימוש מקצוענים ברחבי העולם"
                    : "Trusted by Professionals Worldwide"}
                </h3>
                <p className="text-sm" style={{ color: '#3b1c0a' }}>
                  {language === "arabic"
                    ? "يستخدمه منشئو المحتوى والمطورون والمسوقون والشركات في مختلف الصناعات."
                    : language === "hebrew"
                    ? "בשימוש יוצרי תוכן, מפתחים, משווקים ועסקים במגוון תחומים."
                    : "Used by content creators, developers, marketers, and businesses across industries."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .expert-card {
          position: relative;
          max-width: 250px;
          height: 350px;
          border-radius: 10px;
          overflow: hidden;
          background: #181818;
          transition: transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.4s;
          box-shadow: 0 4px 24px 0 #0004;
        }
        .expert-card:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 32px 0 #0006;
        }
        .expert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: filter 0.5s cubic-bezier(.4,2,.6,1);
        }
        .expert-card.hovered .expert-img {
          filter: blur(4px) brightness(0.7);
        }
        .expert-info-container {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          background: rgba(24,24,24,0.7);
          padding: 1.5rem 1rem 1rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 0.5s, transform 0.5s;
        }
        .expert-card.hovered .expert-info-container {
          opacity: 1;
          transform: translateY(0);
        }
        .expert-name {
          color: #fff;
          font-size: 1.15rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 2;
        }
        .expert-underline {
          height: 3px;
          background: #19e6f7;
          width: 0;
          margin-top: 4px;
          border-radius: 2px;
          transition: width 0.4s cubic-bezier(.4,2,.6,1);
        }
        .expert-card.hovered .expert-underline {
          width: 100%;
        }
        .expert-title {
          color: #19e6f7;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          margin-top: 0.75rem;
        }
        .expert-bio {
          color: #bfc1be;
          font-size: 0.85rem;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .expert-btn {
          background: #19e6f7;
          color: #181818;
          font-weight: bold;
          border-radius: 4px;
          padding: 0.25rem 0.75rem;
          font-size: 0.95rem;
        }
        .expert-social-icons {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s, transform 0.5s;
        }
        .expert-card.hovered .expert-social-icons {
          opacity: 1;
          transform: translateY(0);
        }
        .social-icon {
          color: #19e6f7;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 50%;
          background: rgba(25, 230, 247, 0.1);
        }
        .social-icon:hover {
          color: #fff;
          background: #19e6f7;
          transform: scale(1.1);
        }
      `}</style>
      <section className="py-16 px-0" style={{ background: '#f7f3ed' }}>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">
            <span className="text-black">Meet Our </span>
            <span style={{
              background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 'bold',
              display: 'inline-block',
            }}>Experts</span>
          </h2>
          <div
            className={`w-full flex justify-center items-end mb-8 relative ${showHorizontal ? 'flex-row items-center' : ''}`}
            style={showHorizontal ? {
              height: '400px', minWidth: '100vw', maxWidth: '100vw', overflow: 'visible', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'relative'
            } : {
              height: '400px', minWidth: '100vw', maxWidth: '100vw', overflow: 'visible', position: 'relative'
            }}
            onMouseEnter={() => setShowHorizontal(true)}
            onMouseLeave={() => setShowHorizontal(false)}
          >
            {experts.slice(0,6).map((expert, idx) => {
              let style;
              if (showHorizontal) {
                style = {
                  position: 'relative',
                  left: 'unset',
                  bottom: 'unset',
                  transform: 'none',
                  boxShadow: '0 8px 32px 0 #0002',
                  background: '#fff',
                  borderRadius: '32px',
                  width: '220px',
                  minHeight: '320px',
                  margin: '0 12px',
                  zIndex: 2,
                  transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                };
              } else {
                // Arc layout
                const arc = [
                  {rotate: -55, translateY: 170, scale: 1.12, z: 1, left: '-13vw'},
                  {rotate: -32, translateY: 100, scale: 1.18, z: 2, left: '-7vw'},
                  {rotate: -12, translateY: 40, scale: 1.22, z: 3, left: '-2vw'},
                  {rotate: 0, translateY: 0, scale: 1.28, z: 4, left: '0'},
                  {rotate: 12, translateY: 40, scale: 1.22, z: 3, left: '2vw'},
                  {rotate: 32, translateY: 100, scale: 1.18, z: 2, left: '7vw'},
                  {rotate: 55, translateY: 170, scale: 1.12, z: 1, left: '13vw'},
                ];
                style = {
                  position: 'absolute',
                  left: `calc(50% + ${arc[idx].left})`,
                  bottom: 0,
                  transform: `translateX(-50%) rotate(${arc[idx].rotate}deg) translateY(${arc[idx].translateY}px) scale(${arc[idx].scale})`,
                  boxShadow: '0 8px 32px 0 #0002',
                  background: '#fff',
                  borderRadius: '32px',
                  width: '17vw',
                  minWidth: '180px',
                  maxWidth: '220px',
                  minHeight: '320px',
                  zIndex: arc[idx].z,
                  transition: 'all 0.5s cubic-bezier(.4,2,.6,1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                };
              }
              return (
                <div key={idx} style={style} className="flex flex-col items-center p-6">
                  <img src={expert.img} alt={expert.name} className="w-full h-56 object-cover rounded-xl mb-4" />
                  <div className="text-center">
                    <div className="font-bold text-lg mb-1" style={{color: '#3b1c0a'}}>
                      {language === "arabic"
                        ? expert.name === "Dr. Alex Carter" ? "د. أليكس كارتر"
                          : expert.name === "Priya Singh" ? "بريا سينغ"
                          : expert.name === "Miguel Torres" ? "ميغيل توريس"
                          : expert.name === "Linda Zhao" ? "ليندا تشاو"
                          : expert.name === "Ethan Kim" ? "إيثان كيم"
                          : expert.name === "Sofia Müller" ? "صوفيا مولر"
                          : expert.name
                        : language === "hebrew"
                          ? expert.name === "Dr. Alex Carter" ? "ד\"ר אלכס קרטר"
                            : expert.name === "Priya Singh" ? "פריה סינג"
                            : expert.name === "Miguel Torres" ? "מיגל טורס"
                            : expert.name === "Linda Zhao" ? "לינדה ז'או"
                            : expert.name === "Ethan Kim" ? "אית'ן קים"
                            : expert.name === "Sofia Müller" ? "סופיה מולר"
                            : expert.name
                          : expert.name}
                    </div>
                    <div className="text-base mb-1" style={{color: '#c58d6a'}}>
                      {language === "arabic"
                        ? expert.title === "Lead AI Scientist" ? "كبير علماء الذكاء الاصطناعي"
                          : expert.title === "Chief Data Officer" ? "رئيس قسم البيانات"
                          : expert.title === "AI Solutions Architect" ? "مهندس حلول الذكاء الاصطناعي"
                          : expert.title === "Data Science Lead" ? "قائد علوم البيانات"
                          : expert.title === "AI Product Manager" ? "مدير منتجات الذكاء الاصطناعي"
                          : expert.title === "Cloud AI Engineer" ? "مهندس الذكاء الاصطناعي السحابي"
                          : expert.title
                        : language === "hebrew"
                          ? expert.title === "Lead AI Scientist" ? "מדען ראשי בתחום הבינה המלאכותית"
                            : expert.title === "Chief Data Officer" ? "מנהל נתונים ראשי"
                            : expert.title === "AI Solutions Architect" ? "ארכיטקט פתרונות AI"
                            : expert.title === "Data Science Lead" ? "ראש תחום מדעי הנתונים"
                            : expert.title === "AI Product Manager" ? "מנהל מוצרי AI"
                            : expert.title === "Cloud AI Engineer" ? "מהנדס AI בענן"
                            : expert.title
                          : expert.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black leading-tight">
              {language === "arabic"
                ? "تمكين الشركات بالحلول الذكية للذكاء الاصطناعي"
                : language === "hebrew"
                ? "מעצימים עסקים עם פתרונות AI"
                : <>Empowering Businesses<br />with AI Solutions</>}
            </h2>
          </div>
          <div>
            <p className="mb-6 text-black text-lg">
              {language === "arabic"
                ? "من الأتمتة الذكية إلى التحليلات المتقدمة، تساعد منصتنا الشركات على تبسيط العمليات، وزيادة الإنتاجية، وفتح فرص نمو جديدة."
                : language === "hebrew"
                ? "מאוטומציה חכמה ועד אנליטיקה מתקדמת, הפלטפורמה שלנו עוזרת לחברות לייעל תהליכים, לשפר פרודוקטיביות ולפתוח הזדמנויות צמיחה חדשות."
                : "From intelligent automation to advanced analytics, our platform helps companies streamline operations, boost productivity, and unlock new growth opportunities."}
            </p>
            <button className="px-6 py-3 rounded font-semibold text-white" style={{background: 'linear-gradient(to right, #63342e, #c58d6a)'}}>
              {language === "arabic" ? "تعرف أكثر علينا" : language === "hebrew" ? "למידע נוסף עלינו" : "Learn More About Us"}
            </button>
          </div>
        </div>
        <ImpactMetricsNumbers
          labels={{
            clientSatisfaction:
              language === "arabic"
                ? "رضا العملاء"
                : language === "hebrew"
                ? "שביעות רצון לקוחות"
                : "Client Satisfaction",
            yearsExperience:
              language === "arabic"
                ? "سنوات خبرة الذكاء الاصطناعي"
                : language === "hebrew"
                ? "שנות ניסיון ב-AI"
                : "Years of AI Experience",
            businessClients:
              language === "arabic"
                ? "عملاء الأعمال"
                : language === "hebrew"
                ? "לקוחות עסקיים"
                : "Business Clients",
            projectsDelivered:
              language === "arabic"
                ? "مشاريع الذكاء الاصطناعي المنجزة"
                : language === "hebrew"
                ? "פרויקטי AI שסופקו"
                : "AI Projects Delivered"
          }}
        />
      </section>

      {/* Upcoming Webinars Section (Slideshow) */}

  <section className="w-full" style={{background: 'linear-gradient(135deg, #63342e 0%, #c58d6a 100%)'}}>
    <EventCarousel />
  </section>

      {/* CTA Section  */}
      <section className="w-full pt-8 pb-16 px-4 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            {language === "arabic"
              ? "هل أنت مستعد لتحويل عملك؟"
              : language === "hebrew"
              ? "מוכן לשנות את העסק שלך?"
              : "Ready to Transform Your Business?"}
          </h2>
          <p className="text-lg text-white mb-8">
            {language === "arabic"
              ? "اكتشف قوة الأتمتة والتحليلات وأدوات سير العمل المدعومة بالذكاء الاصطناعي. ابدأ رحلتك نحو عمليات أكثر ذكاءً وسرعة وكفاءة اليوم."
              : language === "hebrew"
              ? "גלה את כוח האוטומציה, האנליטיקה וכלי העבודה מבוססי AI. התחל את המסע שלך לפעילות חכמה, מהירה ויעילה יותר כבר היום."
              : "Unlock the power of AI-driven automation, analytics, and workflow tools. Start your journey to smarter, faster, and more efficient operations today."}
          </p>
          <button
            onClick={() => handleNavigation('/contact-us')}
            className="inline-block px-10 py-4 rounded-full font-bold text-lg text-white shadow-lg hover:scale-105 transition-transform duration-300"
            style={{
              background: 'linear-gradient(90deg, #63342e 0%, #c58d6a 100%)',
              boxShadow: '0 4px 16px #63342e55',
              marginBottom: '0.5rem'
            }}
          >
            {language === "arabic" ? "ابدأ مجانًا" : language === "hebrew" ? "התחל בחינם" : "Get Started Free"}
          </button>
        </div>
      </section>


      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`relative w-full max-w-md ${theme === 'dark' ? 'bg-[#232323]' : 'bg-white'} rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto`}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ×
            </button>

            {!submitSuccess ? (
              <>
                <h2 className="text-2xl font-bold text-center mb-6 text-[#19e6f7]">Event Registration</h2>
                {registrationData.event && (
                  <p className="text-center mb-6 text-sm text-gray-400">
                    Registering for: <span className="font-semibold text-[#19e6f7]">{registrationData.event}</span>
                  </p>
                )}
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={registrationData.firstName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                          theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={registrationData.lastName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                          theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={registrationData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                        theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={registrationData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#19e6f7] ${
                        theme === 'dark' ? 'bg-[#333] text-white border-gray-600' : 'bg-white text-black'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#19e6f7] to-[#19bba6] text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Register for Event'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#19e6f7] mb-2">Registration Successful!</h3>
                <p className="text-gray-400">
                  Thank you for registering. We'll send you a confirmation email with event details.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Insights Blog */}
      
    </div>
  );
};

export default SecondHome;