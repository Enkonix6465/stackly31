// ...existing code...
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRocket, FaBrain, FaEye, FaComments, FaChartLine, FaCogs, FaLightbulb, FaShieldAlt, FaUsers, FaGlobe, FaCode, FaDatabase, FaStar, FaAward, FaBolt, FaMagic, FaArrowRight, FaArrowLeft, FaPlay, FaCheck, FaIndustry, FaHospital, FaGraduationCap, FaShoppingCart, FaBuilding, FaMobile, FaLaptop, FaServer, FaCloud, FaLock, FaSync, FaChartBar, FaRobot, FaMicrochip, FaTruck, FaEnvelope, FaHome, FaClock, FaCommentDots, FaRegHandshake, FaPencilRuler, FaLaptopCode } from 'react-icons/fa';
import serviceHero from '../assets/servicehero.jpg'; // Import hero background image
import serviceHeroVideo from '../assets/servicehero.mp4'; // Import hero background video
import aiChatbotsImg from '../assets/AI Chatbots & Assistants.png';
import computerVisionImg from '../assets/Computer Vision Solutions.jpeg';
import dataAnalysisImg from '../assets/Data Analysis & Forecasting.jpg';
import nlpImg from '../assets/NLP & Language Intelligence.jpg';
import automationImg from '../assets/Automation & Workflow Tools.jpg';
import contentCodeImg from '../assets/Content & Code Generation.jpg';
import discoveryAnalysisImg from '../assets/Discovery & Analysis.jpg';
import strategyPlanningImg from '../assets/Strategy & Planning.jpg';
import developmentTrainingImg from '../assets/Development & Training.jpg';
import deploymentSupportImg from '../assets/Deployment & Support.jpg';
import manufacturingImg from '../assets/manufacturing.jpg';
import healthcareImg from '../assets/healthcare.jpg';
import serviceCtaImg from '../assets/servicecta.jpg';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { useTheme } from '../context/ThemeContext';

export default function Services() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);
  const [currentProcess, setCurrentProcess] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Scroll to top when component mounts
  useScrollToTop();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

const services = [
  {
    id: 1,
    title: "Content Generation",
    description: "AI-powered tools for generating high-quality written content, articles, blogs, and marketing copy to accelerate your creative process.",
    icon: FaCode,
    path: "/services/content-generation",
    category: "creation"
  },
  {
    id: 2,
    title: "Image & Design Tools",
    description: "Create stunning visuals, graphics, and designs with AI-driven image editing and design platforms for professionals and creators.",
    icon: FaMagic,
    path: "/services/image-design-tools",
    category: "design"
  },
  {
    id: 3,
    title: "AI Chatbots & Virtual Assistants",
    description: "Automate customer support and engagement with intelligent chatbots and virtual assistants that understand and respond naturally.",
    icon: FaComments,
    path: "/services/ai-chatbots",
    category: "automation"
  },
  {
    id: 4,
    title: "AI Code Assistants",
    description: "Boost developer productivity with AI-powered code completion, review, and optimization tools for faster, smarter coding.",
    icon: FaCode,
    path: "/services/ai-code-assistants",
    category: "development"
  },
  {
    id: 5,
    title: "Data & Analytics",
    description: "Unlock insights and make data-driven decisions with advanced analytics, forecasting, and visualization powered by AI.",
    icon: FaChartLine,
    path: "/services/data-analytics",
    category: "analytics"
  },
  {
    id: 6,
    title: "AI Voice & Video Tools",
    description: "Transform audio and video content with AI-based voice synthesis, transcription, and video editing solutions.",
    icon: FaPlay,
    path: "/services/ai-voice-video-tools",
    category: "media"
  }
];

  const categories = [
    { id: 'all', name: 'All Services', icon: FaRocket, color: '#27bdb5' },
    { id: 'automation', name: 'Automation', icon: FaCogs, color: '#1de9b6' },
    { id: 'vision', name: 'Computer Vision', icon: FaEye, color: '#27bdb5' },
    { id: 'analytics', name: 'Analytics', icon: FaChartLine, color: '#1de9b6' },
    { id: 'language', name: 'NLP', icon: FaBrain, color: '#27bdb5' },
    { id: 'creation', name: 'Creation', icon: FaCode, color: '#1de9b6' }
  ];

  const industries = [
    { name: "Healthcare", icon: FaHospital, color: "#27bdb5", desc: "AI-powered diagnostics and patient care" },
    { name: "Education", icon: FaGraduationCap, color: "#1de9b6", desc: "Personalized learning experiences" },
    { name: "E-commerce", icon: FaShoppingCart, color: "#27bdb5", desc: "Smart recommendations and automation" },
    { name: "Finance", icon: FaBuilding, color: "#1de9b6", desc: "Risk assessment and fraud detection" },
    { name: "Manufacturing", icon: FaIndustry, color: "#27bdb5", desc: "Predictive maintenance and quality control" },
    { name: "Technology", icon: FaMicrochip, color: "#1de9b6", desc: "Software development and testing" }
  ];

  const techStack = [
    { name: "Python", icon: FaCode, color: "#27bdb5" },
    { name: "TensorFlow", icon: FaBrain, color: "#1de9b6" },
    { name: "React", icon: FaLaptop, color: "#27bdb5" },
    { name: "AWS", icon: FaCloud, color: "#1de9b6" },
    { name: "Docker", icon: FaServer, color: "#27bdb5" },
    { name: "PostgreSQL", icon: FaDatabase, color: "#1de9b6" }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  return (
    <div className={`min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-gray-50 text-black'}`}>
      {/* Hero Section with Parallax Effect */}
      <section className="relative py-32 px-4 z-10 overflow-hidden min-h-[545px] flex flex-col items-center justify-center text-center">
      {/* Background Video */}
        <div className="absolute inset-0 z-0">
      <video
        autoPlay
            muted 
        loop
            className="w-full h-full object-cover"
            style={{ filter: theme === 'dark' ? 'brightness(0.5)' : 'brightness(0.7)' }}
      >
            <source src={serviceHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="mb-4">
             
          </div>
          <h1 className="font-extrabold mb-6 text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-5xl">
            Unlock the Power of AI for Your Business
          </h1>
          <p className="mb-8 text-center text-white text-lg max-w-2xl mx-auto">
            Access a full range of intelligent AI solutions to streamline, enhance, and revolutionize your business operations.
          </p>
          <div className="flex justify-center w-full">
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services-section');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white font-bold rounded-full px-10 py-3 text-lg shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              View All Services
            </button>
          </div>
      </div>
    </section>
    
      {/* Our Services Section - 2x3 Grid Cards */}
  <section id="services-section" className="w-full py-24 px-4" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => {
            // Alternate backgrounds: even = gradient, odd = white
            const isGradient = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className={`relative shadow-xl p-8 flex flex-col justify-between min-h-[220px] overflow-hidden`}
                style={{
                  borderTopLeftRadius: '8rem',
                  borderBottomRightRadius: '8rem',
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  background: isGradient ? 'rgb(219, 158, 111)' : 'black'
                }}
              >
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <service.icon className={`text-3xl ${isGradient ? 'text-white' : 'text-[#312525]'}`} />
                  <h3
                    className={`font-bold text-2xl ${isGradient ? 'bg-clip-text text-transparent' : 'text-white'}`}
                    style={isGradient ? {
                      backgroundImage:
                        'linear-gradient(to right, #63342e, #312525, #9a644a, #63342e, #312525)'
                    } : {}}
                  >
                    {service.title}
                  </h3>
                </div>
                <p className={`text-base ${isGradient ? 'text-white' : 'text-white'} mb-2 relative z-10`}>{service.description}</p>
                {/* Learn More button removed as requested */}
              </div>
            );
          })}
        </div>
      </section>



      {/* How It Works Section - AI Services Process */}
      <section
        className="w-full py-24 px-4"
        style={{
          background: 'linear-gradient(to right, #63342e, #312525, #9a644a, #63342e, #312525)',
          color: 'white'
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-white text-sm font-semibold mb-2 tracking-wider">PROCESS</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">How It Works</h2>
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
                <div className="font-bold text-lg mb-1 text-center">Discovery & Planning</div>
                <div className="text-xs text-center text-white">We understand your business and AI needs to create a tailored strategy.</div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <FaPencilRuler className="text-white text-3xl" />
                </div>
                <div className="font-bold text-lg mb-1 text-center">Solution Design</div>
                <div className="text-xs text-center text-white">We design custom AI solutions aligned with your business goals.</div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <FaCogs className="text-white text-3xl" />
                </div>
                <div className="font-bold text-lg mb-1 text-center">Development & Integration</div>
                <div className="text-xs text-center text-white">We build and integrate AI tools into your existing workflows.</div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <FaLaptopCode className="text-white text-3xl" />
                </div>
                <div className="font-bold text-lg mb-1 text-center">Testing & Optimization</div>
                <div className="text-xs text-center text-white">We rigorously test and optimize for accuracy and performance.</div>
              </div>
              {/* Step 5 */}
              <div className="flex flex-col items-center w-1/5">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4">
                  <FaRocket className="text-white text-3xl" />
                </div>
                <div className="font-bold text-lg mb-1 text-center">Launch & Support</div>
                <div className="text-xs text-center text-white">We deploy your AI solution and provide ongoing support.</div>
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



      {/* Industries We Serve Section - Infographic Style 2x2 Grid */}
      <section className={`w-full py-24 px-4 ${theme === 'dark' ? 'bg-[#111211]' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              Industries We Serve
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-black'}`}>Our AI solutions empower a wide range of industries to innovate, automate, and grow. Explore the sectors we help transform with intelligent technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Top Left: Manufacturing */}
            <div className="flex gap-6 items-start">
              {/* Gradient Box */}
              <div className="rounded-xl p-6 flex flex-col items-center justify-center shadow-lg min-w-[140px]" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
                <span className="text-3xl font-bold text-white mb-2">01</span>
                <FaIndustry className="text-white text-3xl mb-2" />
                <span className="font-bold text-white text-lg">Manufacturing</span>
              </div>
              {/* Speech Bubble */}
              <div className="bg-white rounded-xl p-6 shadow-lg relative flex-1">
                {/* Removed step label for cleaner look */}
                <div className="text-gray-700 text-base mb-2">AI-powered robotics, predictive maintenance, and process optimization for factories and supply chains.</div>
                <div className="text-black font-semibold">Increase Efficiency</div>
                {/* Speech bubble arrow */}
                <div className="absolute left-[-16px] top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
              </div>
            </div>
            {/* Top Right: Healthcare */}
            <div className="flex gap-6 items-start">
              {/* Gradient Box */}
              <div className="rounded-xl p-6 flex flex-col items-center justify-center shadow-lg min-w-[140px]" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
                <span className="text-3xl font-bold text-white mb-2">02</span>
                <FaHospital className="text-white text-3xl mb-2" />
                <span className="font-bold text-white text-lg">Healthcare</span>
              </div>
              {/* Speech Bubble */}
              <div className="bg-white rounded-xl p-6 shadow-lg relative flex-1">
                {/* Removed step label for cleaner look */}
                <div className="text-gray-700 text-base mb-2">AI for diagnostics, patient monitoring, medical imaging, and personalized treatment recommendations.</div>
                <div className="text-black font-semibold">Improve Patient Outcomes</div>
                {/* Speech bubble arrow */}
                <div className="absolute left-[-16px] top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
              </div>
            </div>
            {/* Bottom Left: Communication */}
            <div className="flex gap-6 items-start">
              {/* Gradient Box */}
              <div className="rounded-xl p-6 flex flex-col items-center justify-center shadow-lg min-w-[140px]" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
                <span className="text-3xl font-bold text-white mb-2">03</span>
                <FaCommentDots className="text-white text-3xl mb-2" />
                <span className="font-bold text-white text-lg">Communication</span>
              </div>
              {/* Speech Bubble */}
              <div className="bg-white rounded-xl p-6 shadow-lg relative flex-1">
                {/* Removed step label for cleaner look */}
                <div className="text-gray-700 text-base mb-2">AI chatbots, virtual assistants, and automated customer support for seamless engagement.</div>
                <div className="text-black font-semibold">Enhance Engagement</div>
                {/* Speech bubble arrow */}
                <div className="absolute left-[-16px] top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
              </div>
            </div>
            {/* Bottom Right: Outreach & Marketing */}
            <div className="flex gap-6 items-start">
              {/* Gradient Box - ensure same min-width and layout as others */}
              <div className="rounded-xl p-6 flex flex-col items-center justify-center shadow-lg min-w-[140px]" style={{background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'}}>
                <span className="text-3xl font-bold text-white mb-2">04</span>
                <FaEnvelope className="text-white text-3xl mb-2" />
                <span className="font-bold text-white text-lg">Marketing</span>
              </div>
              {/* Speech Bubble */}
              <div className="bg-white rounded-xl p-6 shadow-lg relative flex-1">
                {/* Removed step label for cleaner look */}
                <div className="text-gray-700 text-base mb-2">AI-driven email campaigns, personalized marketing, and automated notifications to grow your business.</div>
                <div className="text-black font-semibold">Drive Growth</div>
                {/* Speech bubble arrow */}
                <div className="absolute left-[-16px] top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Ethical AI & Privacy Section - Two Cards, Same Size */}
  <section className="w-full py-24 px-4" style={{ background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Card */}
          <div className="bg-white shadow-xl border border-[#27bdb5] flex justify-center items-center h-full p-0 overflow-hidden" style={{borderTopLeftRadius: '8rem', borderBottomRightRadius: '8rem', borderTopRightRadius: 0, borderBottomLeftRadius: 0}}>
            <img src={serviceCtaImg} alt="Ethical AI & Privacy" className="w-full h-full object-cover" style={{borderTopLeftRadius: '6rem', borderBottomRightRadius: '6rem', borderTopRightRadius: 0, borderBottomLeftRadius: 0}} />
          </div>
          {/* Content Card */}
          <div className="bg-white p-8 shadow-xl border border-[#27bdb5] flex flex-col justify-center h-full" style={{borderTopRightRadius: '8rem', borderBottomLeftRadius: '8rem', borderTopLeftRadius: 0, borderBottomRightRadius: 0}}>
            <div className="text-[#1de9b6] text-sm font-semibold mb-2 tracking-wider">OUR COMMITMENT</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-6">Ethical AI & Privacy</h2>
            <p className="text-lg leading-relaxed mb-4 text-gray-600">We believe in responsible AI development that prioritizes transparency, fairness, and data protection. Our commitment to ethical practices ensures trust and reliability in every solution we deliver.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Enterprise-grade encryption & secure data handling</li>
              <li>Bias-free AI development & regular audits</li>
              <li>Transparent, explainable models</li>
              <li>Compliance with GDPR, CCPA, and privacy laws</li>
              <li>Human-centric, responsible innovation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get Started with AI Today Section - Content Only */}
  <section className="w-full py-24 px-4" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              <span style={{
                background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent'
              }}>Get Started with AI Today</span>
            </h2>
            <p className={`text-lg mb-6 leading-relaxed max-w-2xl ${theme === 'dark' ? 'text-[#bfc1be]' : 'text-gray-600'}`}>Ready to implement AI solutions? Our expert team will guide you through every step, from initial assessment to seamless integration and ongoing support. Whether you need chatbots, analytics, or automation, we deliver tailored recommendations for your business goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services-section');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors border-none outline-none w-full sm:w-auto"
                style={{
                  background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
                }}
              >
                Start Your AI Journey
              </button>
              <button 
                onClick={() => handleNavigation('/contact-us')}
                className="bg-transparent border border-[rgb(59,28,10)] text-[rgb(59,28,10)] hover:bg-[rgb(59,28,10)] hover:text-white font-bold rounded-lg px-8 py-3 text-base shadow transition-colors w-full sm:w-auto"
              >
                Contact Our Experts &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
  </div>
  );
}
