import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import healthcareImg from "../assets/AI in Healthcare- Real Case Studies.webp";
import businessImg from "../assets/Building Custom AI Assistants for Business.png";
import openSourceImg from "../assets/Open Source AI Projects to Watch.webp";
import aiImg from '../assets/ai.webp';
import heroVideo from "../assets/hero.mp4";
import { useTheme } from "../context/ThemeContext";

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================

const HeroSection = () => {
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
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
              }}
            >
              AI
            </span>{' '}Tools That Truly Deliver
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto mb-8"
        >
          Don’t settle for average. Explore the proven AI solutions trusted by leading professionals to dramatically boost productivity and results.
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
  // Default to English if language or language.code is not provided
  const langCode = language && language.code ? language.code : 'en';
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
    {t.sectionTitle[langCode]}
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateY(180deg)';
                }}
                onMouseLeave={(e) => {
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
                    alt={item.title[langCode]}
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
                    <h3 className="text-xl font-bold text-white mb-3">{item.title[langCode]}</h3>
                    <p className="text-[#bfc1be] text-sm mb-4">{item.description[langCode]}</p>
                    <div
                      className="flex items-center gap-4 text-sm mb-4"
                      style={{
                        color: 'rgb(219, 158, 111)'
                      }}
                    >
                      <span>{t.by[langCode]} {item.author[langCode]}</span>
                      <span>•</span>
                      <span>{item.readTime[langCode]}</span>
                    </div>
                  </div>
                  <Link
                    to={links[index]}
                    className="font-bold py-2 px-6 rounded-lg text-sm shadow-lg hover:scale-105 transition-transform duration-200 text-center text-[#fff]"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)'
                    }}
                  >
                    {t.readMore[langCode]}
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
// ============================================================================
// AI CATEGORIES / TAGS EXPLORER COMPONENT
// ============================================================================

const aiCategories = [
  {
    name: "Machine Learning",
    description: "Techniques for supervised, unsupervised, and reinforcement learning."
  },
  {
    name: "Natural Language AI",
    description: "AI for understanding, generating, and conversing in human language."
  },
  {
    name: "Visual Intelligence",
    description: "Image analysis, object recognition, and detection."
  },
  {
    name: "Smart Robotics",
    description: "Autonomous robots, automation, and intelligent systems."
  },
  {
    name: "AI Responsibility",
    description: "Fairness, ethics, and regulatory compliance in AI."
  },
  {
    name: "Edge Intelligence",
    description: "AI on devices, sensor networks, and distributed systems."
  },
];

const AICategoriesExplorer = () => {
  const { theme } = useTheme();

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
                 <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(219, 158, 111)' }}>AI Categories Explorer</h2>
                 <p className="text-[#fff] text-lg leading-relaxed mb-6">
                   <div className="text-justify">
                     Explore the vast landscape of artificial intelligence, where each category highlights a unique area driving innovation and reshaping industries. Discover how specialized AI domains are leading to remarkable progress and new possibilities.
                   </div>
                 </p>
                 <p className="text-[#fff] text-base leading-relaxed mb-8">
                   <div className="text-justify">
                     From advanced machine learning powering smart recommendations to natural language systems enabling seamless human-computer interaction, see how these AI fields are influencing tomorrow’s technology.
                   </div>
                 </p>
                 
                 <div className="space-y-4">
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                     <span className="text-[#fff]">In-depth insights into major AI fields</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                     <span className="text-[#fff]">Emerging trends and key innovations</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-[#fff] rounded-full"></div>
                     <span className="text-[#fff]">Real-world solutions and industry examples</span>
                   </div>
                 </div>
            </motion.div>
          </div>
          
          {/* Right Cards */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiCategories.map((category, index) => (
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
                     {category.name}
                   </motion.h3>
                  <motion.p className={`text-sm group-hover:translate-y-1 transition-transform duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`} whileHover={{ y: 8 }} transition={{ duration: 0.5 }}>{category.description}</motion.p>
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

const AIMythsBusted = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
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
        Myths & Facts
      </motion.h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Myths Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`${isDark ? 'bg-[#232323]' : 'bg-white'} rounded-2xl p-8 shadow-lg`}
        >
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-[#FF4C4C]' : 'text-[#e53935]'}`}>Myths</h3>
          <ul className="space-y-6">
            {aiMythFactPoints.myths.map((myth, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`font-bold mr-2 ${isDark ? 'text-[#FF4C4C]' : 'text-[#e53935]'}`}>Myth:</span>
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
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-[#19e6f7]' : 'text-[#179b8e]'}`}>Facts</h3>
          <ul className="space-y-6">
            {aiMythFactPoints.facts.map((fact, idx) => (
              <li key={idx} className="flex items-start">
                <span className={`font-bold mr-2 ${isDark ? 'text-[#19e6f7]' : 'text-[#179b8e]'}`}>Fact:</span>
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
    name: "Google Bard",
    category: "Conversational AI",
    pricing: "Free",
    bestFor: "Q&A, brainstorming, research",
    rating: 4.7
  },
  {
    name: "DALL·E 3",
    category: "Image Creation",
    pricing: "Free + Paid",
    bestFor: "Generating images from text",
    rating: 4.6
  },
  {
    name: "QuillBot",
    category: "Writing Assistant",
    pricing: "Free + Premium",
    bestFor: "Paraphrasing, grammar, summarizing",
    rating: 4.5
  },
  {
    name: "Synthesia",
    category: "Video Generation",
    pricing: "Paid",
    bestFor: "Creating AI-powered videos",
    rating: 4.4
  },
  {
    name: "Copy.ai",
    category: "Content Creation",
    pricing: "Free + Paid",
    bestFor: "Marketing, blogs, social media",
    rating: 4.3
  },
  {
    name: "Perplexity AI",
    category: "Research Assistant",
    pricing: "Free",
    bestFor: "Finding information, summarizing",
    rating: 4.8
  },
];

const ToolComparisonTable = () => {
  const { theme } = useTheme();

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
          AI Tools Comparison
        </h2>
        <p className={`text-lg mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Compare popular AI tools and find the right one for your needs.</p>
      </motion.div>
      
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full bg-[#232323] rounded-lg overflow-hidden">
          <thead className="bg-[#181818]">
            <tr>
              <th className="text-white px-6 py-4 text-left font-semibold">Tool</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Category</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Pricing</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Best For</th>
              <th className="text-white px-6 py-4 text-left font-semibold">Rating</th>
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
                <td className="text-white px-6 py-4 font-semibold">{tool.name}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.category}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.pricing}</td>
                <td className="text-white px-6 py-4 text-[#bfc1be]">{tool.bestFor}</td>
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

const WeeklyPoll = () => {
  const { theme } = useTheme();
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [hasVoted, setHasVoted] = React.useState(false);

  const pollOptions = [
    { id: 1, text: "AI will transform education and learning experiences", votes: 40 },
    { id: 2, text: "AI will help solve climate and environmental challenges", votes: 36 },
    { id: 3, text: "AI should be transparent and explainable in all decisions", votes: 29 },
    { id: 4, text: "AI will become a daily assistant for most people by 2030", votes: 18 }
  ];

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
          Weekly Discussion: AI's Future Impact
        </h2>
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Question:</h2>
          <p className={`text-xl font-semibold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>How do you think AI will change our daily lives and society in the next decade?</p>
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
              Submit
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
                    {option.votes} votes
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-[#bfc1be] text-sm">
            Total votes: {totalVotes} • Poll closes in 3 days
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
  const links = ["/editor-pick/1", "/editor-pick/2", "/editor-pick/3"];
  
  return (
    <>
      <HeroSection />
      <EditorsPicks links={links} />
      <AICategoriesExplorer />
      <WeeklyPoll />
      <AIMythsBusted />
      <ToolComparisonTable />
      
    </>
  );
};

export default Blog;