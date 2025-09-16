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
// import dataanalysis from "./ai-voice-and-vedio-tools";


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
const HeroSection = ({ theme, translations }) => (
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
          {translations.cv_heroTitle || "Data & Analytics"}
        </motion.h1>
      <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
        {translations.cv_heroDesc || "Unlock insights and drive smarter decisions with AI-powered data analytics tools. Instantly analyze, visualize, and forecast data for any business need."}
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
            {translations.cv_exploreFeatures || "Explore Features"}
          </button>
      </motion.div>
    </div>
  </motion.section>
);

// 2. HOW IT WORKS SECTION
const HowItWorksSection = ({ theme, translations }) => (
  <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-gray-100'}`}>
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
  <div className="text-[#312525] text-sm font-semibold mb-2 tracking-wider">{translations.cv_process || "PROCESS"}</div>
  <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{translations.cv_howItWorks || "How It Works"}</h2>
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
            <div className="font-bold text-lg mb-1 text-center">{translations.cv_step1 || "Connect Your Data"}</div>
           </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaPencilRuler className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{translations.cv_step2 || "Analyze & Explore"}</div>
           </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaCogs className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{translations.cv_step3 || "Visualize Insights"}</div>
           </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaLaptopCode className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{translations.cv_step4 || "Forecast & Predict"}</div>
           </div>
          {/* Step 5 */}
          <div className="flex flex-col items-center w-1/5">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
              <FaRocket className="text-white text-3xl" />
            </div>
            <div className="font-bold text-lg mb-1 text-center">{translations.cv_step5 || "Share & Collaborate"}</div>
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
const FeaturesBenefitsSection = ({ theme, translations }) => {
  const features = [
    { title: translations.cv_feature1 || 'Data Integration' },
    { title: translations.cv_feature2 || 'Advanced Analytics' },
    { title: translations.cv_feature3 || 'Visualization' },
    { title: translations.cv_feature4 || 'Forecasting' },
    { title: translations.cv_feature5 || 'Collaboration' },
    { title: translations.cv_feature6 || 'Reporting' }
  ];
  return (
  <section id="features-section" className="w-full h-full pt-0 pb-0 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 items-center relative z-10 -space-x-8">
        <div className="flex-1 flex flex-col justify-center items-start mb-10 md:mb-0 md:pr-8">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-2 mt-0 ${theme === 'dark' ? 'text-black' : 'text-white'}`}>{translations.cv_featuresTitle || "Features & Benefits"}</h2>
           <p className={`text-xl mb-6 max-w-lg ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{translations.cv_featuresDesc || "Our data & analytics platform helps you connect, analyze, and visualize data from any source.\n\nUse advanced analytics, forecasting, and reporting tools to uncover trends and make data-driven decisions.\n\nCollaborate with your team and share insights instantly."}</p>
          <ul className={`list-disc pl-5 text-lg mb-8 space-y-2 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
            <li>{translations.cv_benefit1 || "Integrate data from multiple sources"}</li>
            <li>{translations.cv_benefit2 || "Advanced analytics and machine learning"}</li>
            <li>{translations.cv_benefit3 || "Interactive dashboards and visualizations"}</li>
            <li>{translations.cv_benefit4 || "Automated reporting and sharing"}</li>
          </ul>
        </div>
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-8 w-full pt-20 pb-20 justify-items-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`shadow-lg p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105 min-w-[180px] min-h-[180px] relative ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
              style={{
                clipPath: 'polygon(50% 0%, 65% 15%, 90% 40%, 88% 70%, 80% 85%, 65% 95%, 50% 100%, 35% 95%, 20% 85%, 12% 70%, 10% 40%, 35% 15%)',
                boxShadow: '0 8px 32px 0 rgba(25,230,247,0.10)'
              }}
            >
              <div className={`font-bold text-xl w-full flex items-center justify-center text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{feature.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. BENEFITS SECTION (modern two-column layout)
const BenefitsSection = ({ theme, translations }) => {
  const benefits = [
    translations.cv_benefit5 || "Make data-driven decisions with confidence",
    translations.cv_benefit6 || "Automate reporting and save time",
    translations.cv_benefit7 || "Uncover hidden trends and opportunities",
    translations.cv_benefit8 || "Collaborate and share insights instantly",
    translations.cv_benefit9 || "Predict outcomes and optimize operations"
  ];
  return (
    <section className={`w-full py-20 px-4 ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-8 ${theme === "dark" ? "text-white" : "text-black"}`}>{translations.cv_benefitsTitle || "Benefits of Data & Analytics"}</h2>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        <div className="flex-1 flex flex-col justify-center h-full">
          <div className="text-justify h-full flex flex-col justify-center">
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#19e6f7] text-2xl font-bold mr-3">•</span>
                  <span className={`text-base leading-relaxed text-justify ${theme === "dark" ? "text-white" : "text-black"}`}>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. REAL LIFE USE CASES & APPLICATIONS SECTION
const UseCasesSection = ({ theme, translations }) => {
  const useCases = [
    {
      icon: blogCatTools,
      title: translations.cv_usecase1_title || 'Business Intelligence',
      desc: translations.cv_usecase1_desc || 'Analyze sales, operations, and customer data to drive business growth.'
    },
    {
      icon: blogCatTrends,
      title: translations.cv_usecase2_title || 'Financial Forecasting',
      desc: translations.cv_usecase2_desc || 'Predict revenue, expenses, and market trends with AI-powered models.'
    },
    {
      icon: blogCatCase,
      title: translations.cv_usecase3_title || 'Customer Analytics',
      desc: translations.cv_usecase3_desc || 'Segment customers, track behavior, and personalize marketing.'
    },
    {
      icon: blogCatThought,
      title: translations.cv_usecase4_title || 'Operational Efficiency',
      desc: translations.cv_usecase4_desc || 'Optimize supply chain, inventory, and resource allocation.'
    }
  ];

  return (
    <section className="py-20 px-6" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-5xl font-extrabold mb-2 bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}>
            {translations.cv_usecasesTitle || "Real-Life Use Cases & Applications"}
          </h2>
           <p className="text-lg text-white max-w-2xl mb-8 leading-relaxed">
            {translations.cv_usecasesDesc || "Discover how data & analytics is transforming decision-making for businesses, healthcare, and more.\nOur platform adapts to your needs, delivering insights and speed for any use case."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="w-full bg-[linear-gradient(to_right,_#63342e,_#312525,_#d6ab88,_#c58d6a,_#9a644a,_#63342e,_#312525)] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-4 shadow-md">
                <img src={useCase.icon} loading="lazy" alt={useCase.title} className="w-10 h-10 object-contain" />
              </div>
              <div className="font-bold text-lg text-white mb-2">{useCase.title}</div>
              <div className="text-sm text-white leading-relaxed">{useCase.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. PRICING SECTION
const PricingSection = ({ theme, translations }) => {
  const plans = [
    {
      name: translations.cv_pricing_starter || "Starter",
      price: "$39",
      period: translations.cv_pricing_month || "/month",
      desc: translations.cv_pricing_starter_desc || "For individuals & small teams",
      features: [
        translations.cv_pricing_starter_f1 || "Basic Data Integration",
        translations.cv_pricing_starter_f2 || "Up to 10 dashboards",
        translations.cv_pricing_starter_f3 || "Standard Analytics",
        translations.cv_pricing_starter_f4 || "Email Support",
        translations.cv_pricing_starter_f5 || "Export to CSV/PDF"
      ],
      popular: false
    },
    {
      name: translations.cv_pricing_professional || "Professional",
      price: "$129",
      period: translations.cv_pricing_month || "/month",
      desc: translations.cv_pricing_professional_desc || "For growing businesses",
      features: [
        translations.cv_pricing_professional_f1 || "Advanced Analytics & ML",
        translations.cv_pricing_professional_f2 || "Unlimited dashboards",
        translations.cv_pricing_professional_f3 || "Collaboration Tools",
        translations.cv_pricing_professional_f4 || "Priority Support",
        translations.cv_pricing_professional_f5 || "Custom Integrations"
      ],
      popular: true
    },
    {
      name: translations.cv_pricing_enterprise || "Enterprise",
      price: translations.cv_pricing_enterprise_price || "Custom",
      period: "",
      desc: translations.cv_pricing_enterprise_desc || "For large organizations",
      features: [
        translations.cv_pricing_enterprise_f1 || "Dedicated Account Manager",
        translations.cv_pricing_enterprise_f2 || "On-premise Option",
        translations.cv_pricing_enterprise_f3 || "Advanced Security",
        translations.cv_pricing_enterprise_f4 || "SLA Guarantee",
        translations.cv_pricing_enterprise_f5 || "24/7 Phone Support",
        translations.cv_pricing_enterprise_f6 || "Unlimited Data Sources"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing-section" className="py-20 px-6" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center mb-16">
          <span style={{ color: 'black' }}>{translations.cv_pricing_title || "Pricing"}</span> {translations.cv_pricing_plans || "Plans"}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
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
                  {translations.cv_pricing_most_popular || "Most Popular"}
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 text-white`}>{plan.name}</h3>
                <p className="mb-4 text-white/80">{plan.desc}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold" style={{ color: 'rgb(219, 158, 111)' }}>{plan.price}</span>
                  <span className="ml-1 text-white/80">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2" style={{ background: 'rgb(219, 158, 111)' }}></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-[rgb(219,158,111)] text-white hover:bg-[#179b8e]'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}>
                {plan.name === (translations.cv_pricing_enterprise || "Enterprise")
                  ? (translations.cv_pricing_contact_sales || "Contact Sales")
                  : (translations.cv_pricing_get_started || "Get Started")}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Main Component
const CTASection = ({ translations }) => (
  <section className={`py-16 px-4 w-full`} style={{background: 'white'}}>
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#312525]">{translations.cv_ctaTitle || "Unlock the Power of Computer Vision"}</h2>
      <p className={`text-lg mb-8 max-w-2xl text-black`}>
        {translations.cv_ctaDesc || "Analyze images and videos, detect objects, automate inspections, and gain actionable insights with advanced computer vision solutions."}
       </p>
      <a href="/contact" className="inline-block font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-200 text-white" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
        {translations.cv_ctaButton || "Start with Computer Vision"}
      </a>
    </div>
  </section>
);

const DataAnalytics = () => {
  const { theme } = useTheme();
  const { isRTL, translations } = useLanguage();
  return (
    <main className={`${theme === "dark" ? "bg-[#0a0a0a] text-white" : "bg-white text-black"}`} dir={isRTL ? "rtl" : "ltr"}>
      <HeroSection theme={theme} translations={translations} />
      <HowItWorksSection theme={theme} translations={translations} />
      <FeaturesBenefitsSection theme={theme} translations={translations} />
      <BenefitsSection theme={theme} translations={translations} />
      <UseCasesSection theme={theme} translations={translations} />
      <PricingSection theme={theme} translations={translations} />
      <CTASection translations={translations} />
    </main>
  );
};

export default DataAnalytics;