import React, { createContext, useContext, useState } from "react";

const translations = {
  english: {
  // Admin Dashboard additional headings
  services: "Services",
  recent_orders: "Recent Orders",
  analytics: "Analytics",
  traffic_sources: "Traffic Sources",
  weekly_signups: "Weekly Sign-ups",
  // Service names for Admin Dashboard
  service_ai_chatbots_assistants: "AI Chatbots & Assistants",
  service_ai_code_assistants: "AI Code Assistants",
  service_ai_voice_and_vedio_tools: "AI Voice & Video Tools",
  service_automation_workflow_tools: "Automation Workflow Tools",
  service_content_generation: "Content Generation",
  service_data_analytics: "Data Analytics",
  // Status translations for orders table
  status_completed: "Completed",
  status_in_progress: "In Progress",
  status_pending: "Pending",
  // Stat card label
  support_tickets: "Support Tickets",
  // Orders table empty state
  no_orders_found: "No orders found.",
  // User names for orders table
  user_alice: "Alice",
  user_bob: "Bob",
  user_carol: "Carol",
  // Admin Dashboard section
  admin_dashboard_title: "Admin Dashboard",
  active_services: "Active Services",
  revenue_usd: "Revenue (USD)",
  total_users: "Total Users",
  // Header services dropdown (custom order)
  header_service_content: "Content Generation",
  header_service_automation: "Automation Tools",
  header_service_code_assistants: "AI Code Assistants",
  header_service_data_analytics: "Data & Analytics",
  header_service_chatbots: "AI Chatbots",
  header_service_voice_video: "AI Voice & Video Tools",
  // Header-specific
  header_home2: "Home 2",
  header_view_all_services: "View All Services",
  header_logout: "Logout",
  // Footer translations
  footer_company: "AI Tools Company",
  footer_tagline: "Leading the future with cutting-edge AI tools and solutions.",
  footer_quick_links: "Quick Links",
  footer_home1: "Home 1",
  footer_about: "About Us",
  footer_services: "Services",
  footer_blog: "Blog",
  footer_contact: "Contact",
  footer_our_services: "Our Services",
  footer_service_chatbots: "AI Chatbots & Assistants",
  footer_service_content: "Content & Code Generation",
  footer_service_data: "Data Analysis & Forecasting",
  footer_service_nlp: "NLP & Language Intelligence",
  footer_service_cv: "Computer Vision Solutions",
  footer_service_automation: "Automation & Workflow Tools",
  footer_get_in_touch: "Get In Touch",
  footer_address: "India",
  footer_hours: "Mon - Fri: 9am - 6pm",
  footer_cta: "Start Your AI Journey",
  footer_privacy: "Privacy Policy",
  footer_terms: "Terms of Service",
  footer_cookie: "Cookie Policy",
  footer_copyright: "© {year} AI Tools Company. All rights reserved.",
  // NLP & Language Intelligence page translations
  nlp_heroTitle: "AI Code Assistants",
  nlp_heroDesc: "Boost your development workflow with AI-powered code assistants. Instantly generate, review, and optimize code for any language or framework.",
  nlp_exploreFeatures: "Explore Features",
  nlp_process: "PROCESS",
  nlp_howItWorks: "How It Works",
  nlp_step1: "Describe Coding Task",
  nlp_step2: "Get Code Suggestions",
  nlp_step3: "Edit & Refine",
  nlp_step4: "Learn & Automate",
  nlp_step5: "Deploy & Share",
  nlp_featuresTitle: "Features & Benefits",
  nlp_featuresDesc: "Unlock the power of Natural Language Processing. Enhance your applications with intelligent language features for business, research, and communication.",
  nlp_feature1: "Sentiment Analysis",
  nlp_feature2: "Named Entity Recognition",
  nlp_feature3: "Text Summarization",
  nlp_feature4: "Language Translation",
  nlp_feature5: "Topic Modeling",
  nlp_feature6: "Conversational AI",
  nlp_benefit1: "Text classification and sentiment analysis",
  nlp_benefit2: "Named entity recognition and extraction",
  nlp_benefit3: "Text summarization and keyword extraction",
  nlp_benefit4: "Language translation and multilingual support",
  nlp_benefit5: "Conversational AI and chatbots",
  nlp_benefit6: "Intent detection and topic modeling",
  nlp_usecasesTitle: "Real-Life Use Cases & Applications",
  nlp_usecasesDesc: "Discover how generative AI is transforming content creation for businesses, educators, and creators.\nOur platform adapts to your needs, delivering quality and speed for any use case.",
  nlp_usecase1_title: "Code Generation",
  nlp_usecase1_desc: "Quickly generate code snippets, functions, and modules for any project.",
  nlp_usecase2_title: "Code Review",
  nlp_usecase2_desc: "Automate code reviews and get instant feedback on quality and security.",
  nlp_usecase3_title: "Bug Fixing",
  nlp_usecase3_desc: "Detect and fix bugs automatically with AI-powered suggestions.",
  nlp_usecase4_title: "Documentation",
  nlp_usecase4_desc: "Generate and update code documentation instantly.",
  nlp_pricing_title: "Pricing",
  nlp_pricing_plans: "Plans",
  nlp_pricing_starter: "Starter",
  nlp_pricing_starter_desc: "For individuals & freelancers",
  nlp_pricing_starter_f1: "Basic Content Generation",
  nlp_pricing_starter_f2: "Up to 500 outputs/month",
  nlp_pricing_starter_f3: "Email Support",
  nlp_pricing_starter_f4: "Standard Templates",
  nlp_pricing_starter_f5: "Basic Collaboration",
  nlp_pricing_professional: "Professional",
  nlp_pricing_professional_desc: "For teams & businesses",
  nlp_pricing_professional_f1: "Advanced Content Generation",
  nlp_pricing_professional_f2: "Unlimited outputs",
  nlp_pricing_professional_f3: "Priority Support",
  nlp_pricing_professional_f4: "Custom Templates",
  nlp_pricing_professional_f5: "Real-Time Collaboration",
  nlp_pricing_professional_f6: "API Access",
  nlp_pricing_enterprise: "Enterprise",
  nlp_pricing_enterprise_price: "Custom",
  nlp_pricing_enterprise_desc: "For large organizations",
  nlp_pricing_enterprise_f1: "Custom AI Models",
  nlp_pricing_enterprise_f2: "Dedicated Account Manager",
  nlp_pricing_enterprise_f3: "24/7 Phone Support",
  nlp_pricing_enterprise_f4: "On-premise Option",
  nlp_pricing_enterprise_f5: "Advanced Security",
  nlp_pricing_enterprise_f6: "SLA Guarantee",
  nlp_pricing_enterprise_f7: "Custom Integrations",
  nlp_pricing_month: "/month",
  nlp_pricing_most_popular: "Most Popular",
  nlp_pricing_get_started: "Get Started",
  nlp_pricing_contact_sales: "Contact Sales",
  nlp_ctaTitle: "Enhance Your Apps with NLP",
  nlp_ctaDesc: "Unlock advanced language understanding, sentiment analysis, entity extraction, translation, and conversational AI for your business.",
  nlp_ctaButton: "Start with NLP",
    heroTitle: "Your one-stop hub for AI powered solutions & automation.",
    heroDesc: "Find, compare, and utilize the top AI tools designed for productivity, automation, content creation, analytics, and beyond everything you need, all in one platform.",
    explore: "Explore Now",
    whoWeAre: "WHO WE ARE",
    empower: "Empowering the Future with AI Innovation",
    about: "At the heart of our mission is the belief that artificial intelligence should be understandable, accessible, and impactful. We specialize in bridging the gap between cutting-edge AI technologies and real-world applications — helping individuals and businesses thrive in the era of automation, data, and smart decision-making.",
    about2: "From startups to enterprises, we guide our partners in discovering the right AI solutions, integrating them seamlessly, and unlocking their full potential. We are not just a platform — we are your strategic partner in navigating the AI revolution with confidence and clarity.",
    learnMore: "Learn More About Us",
    ourService: "OUR SERVICE",
    trusted: "Trusted Partners",
    trustedDesc: "We proudly collaborate with industry leaders to bring you the best.",
    whatUsersSay: "What Our Users Say",
    empowerWorkflow: "Empower Your Workflow with Intelligent AI",
    empowerDesc: "From automation to analytics, explore AI tools designed to revolutionize how you work. Discover curated solutions tailored for creators, teams, and enterprises—built to adapt, learn, and scale with your needs. Enhance productivity, optimize decisions, and stay ahead with smart technology that evolves with you.",
    exploreTools: "Explore Tools",
    learnMoreArrow: "Learn More →",
    // Computer Vision page translations
    cv_heroTitle: "Data & Analytics",
    cv_heroDesc: "Unlock insights and drive smarter decisions with AI-powered data analytics tools. Instantly analyze, visualize, and forecast data for any business need.",
    cv_exploreFeatures: "Explore Features",
    cv_process: "PROCESS",
    cv_howItWorks: "How It Works",
    cv_step1: "Connect Your Data",
    cv_step2: "Analyze & Explore",
    cv_step3: "Visualize Insights",
    cv_step4: "Forecast & Predict",
    cv_step5: "Share & Collaborate",
    cv_featuresTitle: "Features & Benefits",
    cv_featuresDesc: "Our data & analytics platform helps you connect, analyze, and visualize data from any source.\n\nUse advanced analytics, forecasting, and reporting tools to uncover trends and make data-driven decisions.\n\nCollaborate with your team and share insights instantly.",
    cv_feature1: "Data Integration",
    cv_feature2: "Advanced Analytics",
    cv_feature3: "Visualization",
    cv_feature4: "Forecasting",
    cv_feature5: "Collaboration",
    cv_feature6: "Reporting",
    cv_benefit1: "Integrate data from multiple sources",
    cv_benefit2: "Advanced analytics and machine learning",
    cv_benefit3: "Interactive dashboards and visualizations",
    cv_benefit4: "Automated reporting and sharing",
    cv_benefitsTitle: "Benefits of Data & Analytics",
    cv_benefit5: "Make data-driven decisions with confidence",
    cv_benefit6: "Automate reporting and save time",
    cv_benefit7: "Uncover hidden trends and opportunities",
    cv_benefit8: "Collaborate and share insights instantly",
    cv_benefit9: "Predict outcomes and optimize operations",
    cv_usecasesTitle: "Real-Life Use Cases & Applications",
    cv_usecasesDesc: "Discover how data & analytics is transforming decision-making for businesses, healthcare, and more.\nOur platform adapts to your needs, delivering insights and speed for any use case.",
    cv_usecase1_title: "Business Intelligence",
    cv_usecase1_desc: "Analyze sales, operations, and customer data to drive business growth.",
    cv_usecase2_title: "Financial Forecasting",
    cv_usecase2_desc: "Predict revenue, expenses, and market trends with AI-powered models.",
    cv_usecase3_title: "Customer Analytics",
    cv_usecase3_desc: "Segment customers, track behavior, and personalize marketing.",
    cv_usecase4_title: "Operational Efficiency",
    cv_usecase4_desc: "Optimize supply chain, inventory, and resource allocation.",
    cv_ctaTitle: "Unlock the Power of Computer Vision",
    cv_ctaDesc: "Analyze images and videos, detect objects, automate inspections, and gain actionable insights with advanced computer vision solutions.",
    cv_ctaButton: "Start with Computer Vision"
  // Data Analysis & Forecasting page translations
  ,da_heroTitle: "AI Voice & Video Tools"
  ,da_heroDesc: "Transform your communication and content creation with advanced AI voice and video solutions. Instantly generate lifelike voiceovers, automate video editing, and reach global audiences with real-time translation and dubbing."
  ,da_exploreFeatures: "Explore Features"
  ,da_process: "PROCESS"
  ,da_howItWorks: "How It Works"
  ,da_step1: "Voice Synthesis"
  ,da_step2: "Video Editing"
  ,da_step3: "Translation & Dubbing"
  ,da_step4: "Speech Recognition"
  ,da_step5: "Publish & Support"
  ,da_featuresTitle: "Features & Benefits"
  ,da_featuresDesc: "Our AI voice and video tools empower you to create professional-grade audio and video content, automate editing, and reach global audiences with real-time translation and dubbing.\n\nExperience seamless integration, intuitive controls, and scalable solutions for creators, educators, and businesses."
  ,da_feature1: "Voice Cloning & Customization"
  ,da_feature2: "AI Video Enhancement"
  ,da_feature3: "Speech Recognition"
  ,da_feature4: "Text-to-Speech & Speech-to-Text"
  ,da_feature5: "Real-Time Translation"
  ,da_feature6: "Easy Integration"
  ,da_benefit1: "Produce lifelike voiceovers and narrations"
  ,da_benefit2: "Automate video editing and enhancement"
  ,da_benefit3: "Convert speech to text and vice versa"
  ,da_benefit4: "Expand your reach with instant translation"
  ,da_ctaTitle: "Unlock Insights with Data Analysis"
  ,da_ctaDesc: "Discover hidden trends, forecast future outcomes, and make smarter decisions with AI-powered data analysis and forecasting."
  ,da_ctaButton: "Start Analyzing Data"
  ,da_pricing_title: "Pricing"
  ,da_pricing_plans: "Plans"
  ,da_pricing_starter: "Starter"
  ,da_pricing_starter_desc: "For creators & individuals"
  ,da_pricing_starter_f1: "Basic Voice Synthesis"
  ,da_pricing_starter_f2: "Simple Video Editing"
  ,da_pricing_starter_f3: "Up to 100 projects/month"
  ,da_pricing_starter_f4: "Email Support"
  ,da_pricing_professional: "Professional"
  ,da_pricing_professional_desc: "For teams & businesses"
  ,da_pricing_professional_f1: "Advanced Voice & Video Tools"
  ,da_pricing_professional_f2: "Unlimited projects"
  ,da_pricing_professional_f3: "Priority Support"
  ,da_pricing_professional_f4: "Real-Time Translation"
  ,da_pricing_professional_f5: "API Access"
  ,da_pricing_professional_f6: "Collaboration Features"
  ,da_pricing_enterprise: "Enterprise"
  ,da_pricing_enterprise_price: "Custom"
  ,da_pricing_enterprise_desc: "For large organizations"
  ,da_pricing_enterprise_f1: "Custom AI Models"
  ,da_pricing_enterprise_f2: "Dedicated Account Manager"
  ,da_pricing_enterprise_f3: "24/7 Phone Support"
  ,da_pricing_enterprise_f4: "On-premise Option"
  ,da_pricing_enterprise_f5: "Advanced Security"
  ,da_pricing_enterprise_f6: "SLA Guarantee"
  ,da_pricing_enterprise_f7: "Custom Integrations"
  ,da_pricing_month: "/month"
  ,da_pricing_most_popular: "Most Popular"
  ,da_pricing_get_started: "Get Started"
  ,da_pricing_contact_sales: "Contact Sales"
  ,da_usecasesTitle: "Real-Life Use Cases & Applications"
  ,da_usecasesDesc: "See how AI voice and video tools are revolutionizing content creation, communication, and accessibility for creators, educators, and businesses.\nOur platform adapts to your needs, delivering quality and speed for any use case."
  ,da_usecase1_title: "Voiceovers for Videos"
  ,da_usecase1_desc: "Create professional voiceovers for explainer videos, ads, and presentations."
  ,da_usecase2_title: "Podcast Production"
  ,da_usecase2_desc: "Automate editing and enhancement for podcasts and audio shows."
  ,da_usecase3_title: "E-Learning Content"
  ,da_usecase3_desc: "Generate narration and video lessons for online courses."
  ,da_usecase4_title: "Accessibility Solutions"
  ,da_usecase4_desc: "Convert speech to text and provide real-time translation for accessibility."
  ,cv_pricing_title: "Pricing"
  ,cv_pricing_plans: "Plans"
  ,cv_pricing_starter: "Starter"
  ,cv_pricing_starter_desc: "For individuals & small teams"
  ,cv_pricing_starter_f1: "Basic Data Integration"
  ,cv_pricing_starter_f2: "Up to 10 dashboards"
  ,cv_pricing_starter_f3: "Standard Analytics"
  ,cv_pricing_starter_f4: "Email Support"
  ,cv_pricing_starter_f5: "Export to CSV/PDF"
  ,cv_pricing_professional: "Professional"
  ,cv_pricing_professional_desc: "For growing businesses"
  ,cv_pricing_professional_f1: "Advanced Analytics & ML"
  ,cv_pricing_professional_f2: "Unlimited dashboards"
  ,cv_pricing_professional_f3: "Collaboration Tools"
  ,cv_pricing_professional_f4: "Priority Support"
  ,cv_pricing_professional_f5: "Custom Integrations"
  ,cv_pricing_enterprise: "Enterprise"
  ,cv_pricing_enterprise_price: "Custom"
  ,cv_pricing_enterprise_desc: "For large organizations"
  ,cv_pricing_enterprise_f1: "Dedicated Account Manager"
  ,cv_pricing_enterprise_f2: "On-premise Option"
  ,cv_pricing_enterprise_f3: "Advanced Security"
  ,cv_pricing_enterprise_f4: "SLA Guarantee"
  ,cv_pricing_enterprise_f5: "24/7 Phone Support"
  ,cv_pricing_enterprise_f6: "Unlimited Data Sources"
  ,cv_pricing_month: "/month"
  ,cv_pricing_most_popular: "Most Popular"
  ,cv_pricing_get_started: "Get Started"
  ,cv_pricing_contact_sales: "Contact Sales"
  },
  arabic: {
  // Admin Dashboard additional headings
  services: "الخدمات",
  recent_orders: "الطلبات الأخيرة",
  analytics: "التحليلات",
  traffic_sources: "مصادر الزيارات",
  weekly_signups: "التسجيلات الأسبوعية",
  // Service names for Admin Dashboard
  service_ai_chatbots_assistants: "دردشة الذكاء الاصطناعي والمساعدون",
  service_ai_code_assistants: "مساعدو الكود بالذكاء الاصطناعي",
  service_ai_voice_and_vedio_tools: "أدوات الصوت والفيديو بالذكاء الاصطناعي",
  service_automation_workflow_tools: "أدوات الأتمتة وسير العمل",
  service_content_generation: "توليد المحتوى",
  service_data_analytics: "البيانات والتحليلات",
  // Status translations for orders table
  status_completed: "مكتمل",
  status_in_progress: "قيد التنفيذ",
  status_pending: "قيد الانتظار",
  // Stat card label
  support_tickets: "تذاكر الدعم",
  // Orders table empty state
  no_orders_found: "لا توجد طلبات.",
  // User names for orders table
  user_alice: "أليس",
  user_bob: "بوب",
  user_carol: "كارول",
  // Admin Dashboard section
  admin_dashboard_title: "لوحة تحكم المدير",
  active_services: "الخدمات النشطة",
  revenue_usd: "الإيرادات (دولار)",
  total_users: "إجمالي المستخدمين",
  // Header services dropdown (custom order)
  header_service_content: "توليد المحتوى",
  header_service_automation: "أدوات الأتمتة",
  header_service_code_assistants: "مساعدو الكود بالذكاء الاصطناعي",
  header_service_data_analytics: "البيانات والتحليلات",
  header_service_chatbots: "دردشة الذكاء الاصطناعي",
  header_service_voice_video: "أدوات الصوت والفيديو بالذكاء الاصطناعي",
  // Header-specific
  header_home2: "الرئيسية 2",
  header_view_all_services: "عرض كل الخدمات",
  header_logout: "تسجيل الخروج",
  // Footer translations
  footer_company: "شركة أدوات الذكاء الاصطناعي",
  footer_tagline: "نقود المستقبل بأدوات وحلول ذكاء اصطناعي متقدمة.",
  footer_quick_links: "روابط سريعة",
  footer_home1: "الرئيسية",
  footer_about: "من نحن",
  footer_services: "الخدمات",
  footer_blog: "المدونة",
  footer_contact: "اتصل بنا",
  footer_our_services: "خدماتنا",
  footer_service_chatbots: "الدردشة الذكية والمساعدون",
  footer_service_content: "توليد المحتوى والبرمجة",
  footer_service_data: "تحليل البيانات والتنبؤ",
  footer_service_nlp: "معالجة اللغة والذكاء اللغوي",
  footer_service_cv: "حلول الرؤية الحاسوبية",
  footer_service_automation: "أدوات الأتمتة وسير العمل",
  footer_get_in_touch: "تواصل معنا",
  footer_address: "الهند",
  footer_hours: "الاثنين - الجمعة: 9ص - 6م",
  footer_cta: "ابدأ رحلتك مع الذكاء الاصطناعي",
  footer_privacy: "سياسة الخصوصية",
  footer_terms: "شروط الخدمة",
  footer_cookie: "سياسة الكوكيز",
  footer_copyright: "© {year} شركة أدوات الذكاء الاصطناعي. جميع الحقوق محفوظة.",
  // NLP & Language Intelligence page translations
  nlp_heroTitle: "مساعدو البرمجة بالذكاء الاصطناعي",
  nlp_heroDesc: "عزز سير عملك البرمجي مع مساعدين ذكيين. أنشئ، راجع، وحسن الكود لأي لغة أو إطار فورياً.",
  nlp_exploreFeatures: "استكشف الميزات",
  nlp_process: "العملية",
  nlp_howItWorks: "كيف يعمل",
  nlp_step1: "وصف مهمة البرمجة",
  nlp_step2: "احصل على اقتراحات كود",
  nlp_step3: "حرر وحسن",
  nlp_step4: "تعلم وأتمت",
  nlp_step5: "انشر وشارك",
  nlp_featuresTitle: "الميزات والفوائد",
  nlp_featuresDesc: "اكتشف قوة معالجة اللغة الطبيعية. عزز تطبيقاتك بميزات لغوية ذكية للأعمال، البحث، والتواصل.",
  nlp_feature1: "تحليل المشاعر",
  nlp_feature2: "استخراج الكيانات",
  nlp_feature3: "تلخيص النصوص",
  nlp_feature4: "الترجمة اللغوية",
  nlp_feature5: "نمذجة المواضيع",
  nlp_feature6: "محادثة ذكية",
  nlp_benefit1: "تصنيف النص وتحليل المشاعر",
  nlp_benefit2: "استخراج الكيانات والتعرف عليها",
  nlp_benefit3: "تلخيص النص واستخراج الكلمات المفتاحية",
  nlp_benefit4: "الترجمة ودعم اللغات المتعددة",
  nlp_benefit5: "محادثة ذكية وروبوتات دردشة",
  nlp_benefit6: "كشف النية ونمذجة المواضيع",
  nlp_usecasesTitle: "حالات الاستخدام والتطبيقات الواقعية",
  nlp_usecasesDesc: "اكتشف كيف يغير الذكاء الاصطناعي التوليدي إنشاء المحتوى للأعمال، التعليم، والمبدعين.\nمنصتنا تتكيف مع احتياجاتك وتوفر الجودة والسرعة لأي حالة استخدام.",
  nlp_usecase1_title: "توليد الكود",
  nlp_usecase1_desc: "أنشئ شيفرات ووظائف وبرمجيات لأي مشروع بسرعة.",
  nlp_usecase2_title: "مراجعة الكود",
  nlp_usecase2_desc: "أتمت مراجعة الكود واحصل على ملاحظات فورية حول الجودة والأمان.",
  nlp_usecase3_title: "إصلاح الأخطاء",
  nlp_usecase3_desc: "اكتشف وأصلح الأخطاء تلقائياً باقتراحات ذكية.",
  nlp_usecase4_title: "توثيق الكود",
  nlp_usecase4_desc: "أنشئ وحدث توثيق الكود فورياً.",
  nlp_pricing_title: "الأسعار",
  nlp_pricing_plans: "الباقات",
  nlp_pricing_starter: "مبتدئ",
  nlp_pricing_starter_desc: "للأفراد والمستقلين",
  nlp_pricing_starter_f1: "توليد محتوى أساسي",
  nlp_pricing_starter_f2: "حتى 500 مخرج/شهر",
  nlp_pricing_starter_f3: "دعم عبر البريد الإلكتروني",
  nlp_pricing_starter_f4: "قوالب قياسية",
  nlp_pricing_starter_f5: "تعاون أساسي",
  nlp_pricing_professional: "محترف",
  nlp_pricing_professional_desc: "للفرق والشركات",
  nlp_pricing_professional_f1: "توليد محتوى متقدم",
  nlp_pricing_professional_f2: "مخرجات غير محدودة",
  nlp_pricing_professional_f3: "دعم أولوية",
  nlp_pricing_professional_f4: "قوالب مخصصة",
  nlp_pricing_professional_f5: "تعاون فوري",
  nlp_pricing_professional_f6: "وصول API",
  nlp_pricing_enterprise: "مؤسسات",
  nlp_pricing_enterprise_price: "مخصص",
  nlp_pricing_enterprise_desc: "للمنظمات الكبيرة",
  nlp_pricing_enterprise_f1: "نماذج ذكاء اصطناعي مخصصة",
  nlp_pricing_enterprise_f2: "مدير حساب مخصص",
  nlp_pricing_enterprise_f3: "دعم هاتفي 24/7",
  nlp_pricing_enterprise_f4: "خيار محلي",
  nlp_pricing_enterprise_f5: "أمان متقدم",
  nlp_pricing_enterprise_f6: "ضمان اتفاقية مستوى الخدمة",
  nlp_pricing_enterprise_f7: "تكاملات مخصصة",
  nlp_pricing_month: "/شهريًا",
  nlp_pricing_most_popular: "الأكثر شيوعًا",
  nlp_pricing_get_started: "ابدأ الآن",
  nlp_pricing_contact_sales: "تواصل مع المبيعات",
  nlp_ctaTitle: "عزز تطبيقاتك بمعالجة اللغة الطبيعية",
  nlp_ctaDesc: "اكتشف الفهم اللغوي المتقدم، تحليل المشاعر، استخراج الكيانات، الترجمة، والمحادثة الذكية لأعمالك.",
  nlp_ctaButton: "ابدأ مع NLP",
    heroTitle: "مركزك الشامل لحلول الذكاء الاصطناعي والأتمتة.",
    heroDesc: "اكتشف وقارن واستخدم أفضل أدوات الذكاء الاصطناعي المصممة للإنتاجية والأتمتة وإنشاء المحتوى والتحليلات وكل ما تحتاجه في منصة واحدة.",
    explore: "استكشف الآن",
    whoWeAre: "من نحن",
    empower: "تمكين المستقبل بابتكار الذكاء الاصطناعي",
    about: "في صميم مهمتنا الإيمان بأن الذكاء الاصطناعي يجب أن يكون مفهوماً ومتوفراً وذا تأثير. نحن متخصصون في سد الفجوة بين أحدث تقنيات الذكاء الاصطناعي والتطبيقات الواقعية — لمساعدة الأفراد والشركات على النجاح في عصر الأتمتة والبيانات واتخاذ القرار الذكي.",
    about2: "من الشركات الناشئة إلى المؤسسات، نرشد شركاءنا لاكتشاف الحلول المناسبة ودمجها بسلاسة وتحقيق أقصى استفادة منها. نحن لسنا مجرد منصة — نحن شريكك الاستراتيجي في قيادة ثورة الذكاء الاصطناعي بثقة ووضوح.",
    learnMore: "تعرف أكثر علينا",
    ourService: "خدماتنا",
    trusted: "شركاؤنا الموثوقون",
    trustedDesc: "نفخر بالتعاون مع رواد الصناعة لتقديم الأفضل لك.",
    whatUsersSay: "ماذا يقول مستخدمونا",
    empowerWorkflow: "عزز سير عملك بالذكاء الاصطناعي الذكي",
    empowerDesc: "من الأتمتة إلى التحليلات، استكشف أدوات الذكاء الاصطناعي المصممة لإحداث ثورة في طريقة عملك. اكتشف حلولاً مخصصة للمبدعين والفرق والمؤسسات — مصممة لتتكيف وتتعلم وتنمو مع احتياجاتك. عزز الإنتاجية، وحسّن القرارات، وابقَ في المقدمة مع التكنولوجيا الذكية التي تتطور معك.",
    exploreTools: "استكشف الأدوات",
    learnMoreArrow: "تعرف أكثر →",
    // Computer Vision page translations
    cv_heroTitle: "البيانات والتحليلات",
    cv_heroDesc: "اكتشف الرؤى واتخذ قرارات أذكى مع أدوات تحليلات البيانات المدعومة بالذكاء الاصطناعي. حلل، تصور، وتنبأ بالبيانات لأي احتياج أعمال فورياً.",
    cv_exploreFeatures: "استكشف الميزات",
    cv_process: "العملية",
    cv_howItWorks: "كيف يعمل",
    cv_step1: "اربط بياناتك",
    cv_step2: "حلل واستكشف",
    cv_step3: "تصور الرؤى",
    cv_step4: "تنبأ وتوقع",
    cv_step5: "شارك وتعاون",
    cv_featuresTitle: "الميزات والفوائد",
    cv_featuresDesc: "منصتنا للبيانات والتحليلات تساعدك على ربط وتحليل وتصوير البيانات من أي مصدر.\n\nاستخدم التحليلات المتقدمة وأدوات التنبؤ والتقارير لاكتشاف الاتجاهات واتخاذ قرارات مبنية على البيانات.\n\nتعاون مع فريقك وشارك الرؤى فوراً.",
    cv_feature1: "تكامل البيانات",
    cv_feature2: "تحليلات متقدمة",
    cv_feature3: "تصوير البيانات",
    cv_feature4: "التنبؤ",
    cv_feature5: "التعاون",
    cv_feature6: "التقارير",
    cv_benefit1: "دمج البيانات من مصادر متعددة",
    cv_benefit2: "تحليلات متقدمة وتعلم آلي",
    cv_benefit3: "لوحات معلومات وتصورات تفاعلية",
    cv_benefit4: "تقارير ومشاركة تلقائية",
    cv_benefitsTitle: "فوائد البيانات والتحليلات",
    cv_benefit5: "اتخذ قرارات مبنية على البيانات بثقة",
    cv_benefit6: "أتمتة التقارير وتوفير الوقت",
    cv_benefit7: "اكتشف الاتجاهات والفرص الخفية",
    cv_benefit8: "تعاون وشارك الرؤى فوراً",
    cv_benefit9: "تنبأ بالنتائج وحسن العمليات",
    cv_usecasesTitle: "حالات الاستخدام والتطبيقات الواقعية",
    cv_usecasesDesc: "اكتشف كيف تغير البيانات والتحليلات عملية اتخاذ القرار للأعمال والرعاية الصحية والمزيد.\nمنصتنا تتكيف مع احتياجاتك وتوفر الرؤى والسرعة لأي حالة استخدام.",
    cv_usecase1_title: "ذكاء الأعمال",
    cv_usecase1_desc: "حلل بيانات المبيعات والعمليات والعملاء لدفع نمو الأعمال.",
    cv_usecase2_title: "التنبؤ المالي",
    cv_usecase2_desc: "تنبأ بالإيرادات والمصروفات واتجاهات السوق باستخدام نماذج الذكاء الاصطناعي.",
    cv_usecase3_title: "تحليلات العملاء",
    cv_usecase3_desc: "قسم العملاء، تتبع السلوك، وخصص التسويق.",
    cv_usecase4_title: "الكفاءة التشغيلية",
    cv_usecase4_desc: "حسن سلسلة التوريد والمخزون وتوزيع الموارد.",
    cv_ctaTitle: "اكتشف قوة الرؤية الحاسوبية",
    cv_ctaDesc: "حلل الصور والفيديوهات، واكتشف الأجسام، وأتمت الفحص، واحصل على رؤى قابلة للتنفيذ مع حلول الرؤية الحاسوبية المتقدمة.",
    cv_ctaButton: "ابدأ مع الرؤية الحاسوبية"
  // Data Analysis & Forecasting page translations
  ,da_heroTitle: "أدوات الذكاء الاصطناعي للصوت والفيديو"
  ,da_heroDesc: "حوّل تواصلك وإنشاء المحتوى مع حلول الذكاء الاصطناعي المتقدمة للصوت والفيديو. أنشئ أصواتًا واقعية فورياً، وأتمت تحرير الفيديو، وحقق الوصول العالمي مع الترجمة والدبلجة الفورية."
  ,da_exploreFeatures: "استكشف الميزات"
  ,da_process: "العملية"
  ,da_howItWorks: "كيف يعمل"
  ,da_step1: "توليد الصوت"
  ,da_step2: "تحرير الفيديو"
  ,da_step3: "الترجمة والدبلجة"
  ,da_step4: "التعرف على الكلام"
  ,da_step5: "النشر والدعم"
  ,da_featuresTitle: "الميزات والفوائد"
  ,da_featuresDesc: "تمكنك أدوات الذكاء الاصطناعي للصوت والفيديو من إنشاء محتوى صوتي ومرئي احترافي، وأتمتة التحرير، والوصول إلى جماهير عالمية مع الترجمة والدبلجة الفورية.\n\nاستمتع بتكامل سلس، وتحكم بديهي، وحلول قابلة للتوسع للمبدعين والمعلمين والشركات."
  ,da_feature1: "استنساخ وتخصيص الصوت"
  ,da_feature2: "تعزيز الفيديو بالذكاء الاصطناعي"
  ,da_feature3: "التعرف على الكلام"
  ,da_feature4: "تحويل النص إلى كلام والعكس"
  ,da_feature5: "الترجمة الفورية"
  ,da_feature6: "تكامل سهل"
  ,da_benefit1: "إنتاج أصوات واقعية وسرد"
  ,da_benefit2: "أتمتة تحرير الفيديو والتعزيز"
  ,da_benefit3: "تحويل الكلام إلى نص والعكس"
  ,da_benefit4: "توسيع نطاقك مع الترجمة الفورية"
  ,da_ctaTitle: "اكتشف الرؤى مع تحليل البيانات"
  ,da_ctaDesc: "اكتشف الاتجاهات الخفية، وتنبأ بالنتائج المستقبلية، واتخذ قرارات أذكى مع تحليل البيانات والتنبؤ المدعوم بالذكاء الاصطناعي."
  ,da_ctaButton: "ابدأ تحليل البيانات"
  ,da_pricing_title: "الأسعار"
  ,da_pricing_plans: "الباقات"
  ,da_pricing_starter: "مبتدئ"
  ,da_pricing_starter_desc: "للمبدعين والأفراد"
  ,da_pricing_starter_f1: "توليد صوت أساسي"
  ,da_pricing_starter_f2: "تحرير فيديو بسيط"
  ,da_pricing_starter_f3: "حتى 100 مشروع/شهر"
  ,da_pricing_starter_f4: "دعم عبر البريد الإلكتروني"
  ,da_pricing_professional: "محترف"
  ,da_pricing_professional_desc: "للفرق والشركات"
  ,da_pricing_professional_f1: "أدوات صوت وفيديو متقدمة"
  ,da_pricing_professional_f2: "مشاريع غير محدودة"
  ,da_pricing_professional_f3: "دعم أولوية"
  ,da_pricing_professional_f4: "ترجمة فورية"
  ,da_pricing_professional_f5: "وصول API"
  ,da_pricing_professional_f6: "ميزات التعاون"
  ,da_pricing_enterprise: "مؤسسات"
  ,da_pricing_enterprise_price: "مخصص"
  ,da_pricing_enterprise_desc: "للمنظمات الكبيرة"
  ,da_pricing_enterprise_f1: "نماذج ذكاء اصطناعي مخصصة"
  ,da_pricing_enterprise_f2: "مدير حساب مخصص"
  ,da_pricing_enterprise_f3: "دعم هاتفي 24/7"
  ,da_pricing_enterprise_f4: "خيار محلي"
  ,da_pricing_enterprise_f5: "أمان متقدم"
  ,da_pricing_enterprise_f6: "ضمان اتفاقية مستوى الخدمة"
  ,da_pricing_enterprise_f7: "تكاملات مخصصة"
  ,da_pricing_month: "/شهريًا"
  ,da_pricing_most_popular: "الأكثر شيوعًا"
  ,da_pricing_get_started: "ابدأ الآن"
  ,da_pricing_contact_sales: "تواصل مع المبيعات"
  ,da_usecasesTitle: "حالات الاستخدام والتطبيقات الواقعية"
  ,da_usecasesDesc: "شاهد كيف تغير أدوات الذكاء الاصطناعي للصوت والفيديو إنشاء المحتوى والتواصل وإتاحة الوصول للمبدعين والمعلمين والشركات.\nمنصتنا تتكيف مع احتياجاتك وتوفر الجودة والسرعة لأي حالة استخدام."
  ,da_usecase1_title: "التعليق الصوتي للفيديوهات"
  ,da_usecase1_desc: "أنشئ تعليقات صوتية احترافية لفيديوهات الشرح والإعلانات والعروض التقديمية."
  ,da_usecase2_title: "إنتاج البودكاست"
  ,da_usecase2_desc: "أتمت تحرير وتحسين البودكاست والبرامج الصوتية."
  ,da_usecase3_title: "محتوى التعليم الإلكتروني"
  ,da_usecase3_desc: "أنشئ السرد ودروس الفيديو للدورات عبر الإنترنت."
  ,da_usecase4_title: "حلول الإتاحة"
  ,da_usecase4_desc: "حوّل الكلام إلى نص وقدم ترجمة فورية للإتاحة."
  ,cv_pricing_title: "الأسعار"
  ,cv_pricing_plans: "الباقات"
  ,cv_pricing_starter: "مبتدئ"
  ,cv_pricing_starter_desc: "للأفراد والفرق الصغيرة"
  ,cv_pricing_starter_f1: "تكامل بيانات أساسي"
  ,cv_pricing_starter_f2: "حتى 10 لوحات معلومات"
  ,cv_pricing_starter_f3: "تحليلات قياسية"
  ,cv_pricing_starter_f4: "دعم عبر البريد الإلكتروني"
  ,cv_pricing_starter_f5: "تصدير إلى CSV/PDF"
  ,cv_pricing_professional: "محترف"
  ,cv_pricing_professional_desc: "للشركات المتنامية"
  ,cv_pricing_professional_f1: "تحليلات متقدمة وتعلم آلي"
  ,cv_pricing_professional_f2: "لوحات معلومات غير محدودة"
  ,cv_pricing_professional_f3: "أدوات التعاون"
  ,cv_pricing_professional_f4: "دعم أولوية"
  ,cv_pricing_professional_f5: "تكاملات مخصصة"
  ,cv_pricing_enterprise: "مؤسسات"
  ,cv_pricing_enterprise_price: "مخصص"
  ,cv_pricing_enterprise_desc: "للمنظمات الكبيرة"
  ,cv_pricing_enterprise_f1: "مدير حساب مخصص"
  ,cv_pricing_enterprise_f2: "خيار محلي"
  ,cv_pricing_enterprise_f3: "أمان متقدم"
  ,cv_pricing_enterprise_f4: "ضمان اتفاقية مستوى الخدمة"
  ,cv_pricing_enterprise_f5: "دعم هاتفي 24/7"
  ,cv_pricing_enterprise_f6: "مصادر بيانات غير محدودة"
  ,cv_pricing_month: "/شهريًا"
  ,cv_pricing_most_popular: "الأكثر شيوعًا"
  ,cv_pricing_get_started: "ابدأ الآن"
  ,cv_pricing_contact_sales: "تواصل مع المبيعات"
  },
  hebrew: {
  // Admin Dashboard additional headings
  services: "שירותים",
  recent_orders: "הזמנות אחרונות",
  analytics: "אנליטיקה",
  traffic_sources: "מקורות תנועה",
  weekly_signups: "הרשמות שבועיות",
  // Service names for Admin Dashboard
  service_ai_chatbots_assistants: "צ'אטבוטים ועוזרים חכמים",
  service_ai_code_assistants: "עוזרי קוד בינה מלאכותית",
  service_ai_voice_and_vedio_tools: "כלי קול ווידאו בינה מלאכותית",
  service_automation_workflow_tools: "כלי אוטומציה וזרימת עבודה",
  service_content_generation: "יצירת תוכן",
  service_data_analytics: "נתונים וניתוחים",
  // Status translations for orders table
  status_completed: "הושלם",
  status_in_progress: "בתהליך",
  status_pending: "ממתין",
  // Stat card label
  support_tickets: "קריאות תמיכה",
  // Orders table empty state
  no_orders_found: "לא נמצאו הזמנות.",
  // User names for orders table
  user_alice: "אליס",
  user_bob: "בוב",
  user_carol: "קרול",
  // Admin Dashboard section
  admin_dashboard_title: "לוח ניהול",
  active_services: "שירותים פעילים",
  revenue_usd: "הכנסות (דולר)",
  total_users: "סך המשתמשים",
  // Header services dropdown (custom order)
  header_service_content: "יצירת תוכן",
  header_service_automation: "כלי אוטומציה",
  header_service_code_assistants: "עוזרי קוד בינה מלאכותית",
  header_service_data_analytics: "נתונים וניתוחים",
  header_service_chatbots: "צ'אטבוטים בינה מלאכותית",
  header_service_voice_video: "כלי קול ווידאו בינה מלאכותית",
  // Header-specific
  header_home2: "דף הבית 2",
  header_view_all_services: "הצג את כל השירותים",
  header_logout: "התנתק",
  // Footer translations
  footer_company: "חברת כלי בינה מלאכותית",
  footer_tagline: "מובילים את העתיד עם כלים ופתרונות AI מתקדמים.",
  footer_quick_links: "קישורים מהירים",
  footer_home1: "דף הבית",
  footer_about: "אודות",
  footer_services: "שירותים",
  footer_blog: "בלוג",
  footer_contact: "צור קשר",
  footer_our_services: "השירותים שלנו",
  footer_service_chatbots: "צ'אטבוטים ועוזרים חכמים",
  footer_service_content: "יצירת תוכן וקוד",
  footer_service_data: "ניתוח נתונים וחיזוי",
  footer_service_nlp: "עיבוד שפה ובינה לשונית",
  footer_service_cv: "פתרונות ראייה ממוחשבת",
  footer_service_automation: "כלי אוטומציה וזרימת עבודה",
  footer_get_in_touch: "צור קשר",
  footer_address: "הודו",
  footer_hours: "ב'-ו': 9:00-18:00",
  footer_cta: "התחל את מסע ה-AI שלך",
  footer_privacy: "מדיניות פרטיות",
  footer_terms: "תנאי שירות",
  footer_cookie: "מדיניות עוגיות",
  footer_copyright: "© {year} חברת כלי בינה מלאכותית. כל הזכויות שמורות.",
  // NLP & Language Intelligence page translations
  nlp_heroTitle: "עוזרי קוד מבוססי בינה מלאכותית",
  nlp_heroDesc: "שפר את תהליך הפיתוח שלך עם עוזרי קוד חכמים. צור, בדוק וייעל קוד לכל שפה או מסגרת באופן מיידי.",
  nlp_exploreFeatures: "גלה תכונות",
  nlp_process: "תהליך",
  nlp_howItWorks: "איך זה עובד",
  nlp_step1: "תאר משימת קידוד",
  nlp_step2: "קבל הצעות קוד",
  nlp_step3: "ערוך ולטש",
  nlp_step4: "למד ואוטומט",
  nlp_step5: "פרסם ושתף",
  nlp_featuresTitle: "תכונות ויתרונות",
  nlp_featuresDesc: "גלה את עוצמת עיבוד השפה הטבעית. שדרג את האפליקציות שלך עם תכונות שפה חכמות לעסקים, מחקר ותקשורת.",
  nlp_feature1: "ניתוח סנטימנט",
  nlp_feature2: "זיהוי ישויות",
  nlp_feature3: "סיכום טקסט",
  nlp_feature4: "תרגום שפה",
  nlp_feature5: "מודל נושאים",
  nlp_feature6: "בינה שיחתית",
  nlp_benefit1: "סיווג טקסט וניתוח סנטימנט",
  nlp_benefit2: "זיהוי והפקת ישויות",
  nlp_benefit3: "סיכום טקסט והפקת מילות מפתח",
  nlp_benefit4: "תרגום שפה ותמיכה בריבוי שפות",
  nlp_benefit5: "בינה שיחתית וצ'אטבוטים",
  nlp_benefit6: "זיהוי כוונה ומודל נושאים",
  nlp_usecasesTitle: "מקרי שימוש ויישומים מהחיים האמיתיים",
  nlp_usecasesDesc: "גלה כיצד בינה מלאכותית גנרטיבית משנה את יצירת התוכן לעסקים, חינוך ויוצרים.\nהפלטפורמה שלנו מתאימה לצרכים שלך, מספקת איכות ומהירות לכל מקרה שימוש.",
  nlp_usecase1_title: "יצירת קוד",
  nlp_usecase1_desc: "צור קטעי קוד, פונקציות ומודולים לכל פרויקט במהירות.",
  nlp_usecase2_title: "בדיקת קוד",
  nlp_usecase2_desc: "בצע אוטומציה לבדיקות קוד וקבל משוב מיידי על איכות ואבטחה.",
  nlp_usecase3_title: "תיקון באגים",
  nlp_usecase3_desc: "גלה ותקן באגים אוטומטית עם הצעות חכמות.",
  nlp_usecase4_title: "תיעוד",
  nlp_usecase4_desc: "צור ועדכן תיעוד קוד באופן מיידי.",
  nlp_pricing_title: "תמחור",
  nlp_pricing_plans: "חבילות",
  nlp_pricing_starter: "מתחיל",
  nlp_pricing_starter_desc: "ליחידים ופרילנסרים",
  nlp_pricing_starter_f1: "יצירת תוכן בסיסית",
  nlp_pricing_starter_f2: "עד 500 תוצרים/חודש",
  nlp_pricing_starter_f3: "תמיכה בדוא\"ל",
  nlp_pricing_starter_f4: "תבניות סטנדרטיות",
  nlp_pricing_starter_f5: "שיתוף פעולה בסיסי",
  nlp_pricing_professional: "מקצועי",
  nlp_pricing_professional_desc: "לצוותים ועסקים",
  nlp_pricing_professional_f1: "יצירת תוכן מתקדמת",
  nlp_pricing_professional_f2: "תוצרים ללא הגבלה",
  nlp_pricing_professional_f3: "תמיכה בעדיפות",
  nlp_pricing_professional_f4: "תבניות מותאמות",
  nlp_pricing_professional_f5: "שיתוף פעולה בזמן אמת",
  nlp_pricing_professional_f6: "גישה ל-API",
  nlp_pricing_enterprise: "ארגוני",
  nlp_pricing_enterprise_price: "מותאם",
  nlp_pricing_enterprise_desc: "לארגונים גדולים",
  nlp_pricing_enterprise_f1: "מודלים מותאמים של בינה מלאכותית",
  nlp_pricing_enterprise_f2: "מנהל חשבון ייעודי",
  nlp_pricing_enterprise_f3: "תמיכה טלפונית 24/7",
  nlp_pricing_enterprise_f4: "אפשרות מקומית",
  nlp_pricing_enterprise_f5: "אבטחה מתקדמת",
  nlp_pricing_enterprise_f6: "התחייבות SLA",
  nlp_pricing_enterprise_f7: "אינטגרציות מותאמות",
  nlp_pricing_month: "/חודש",
  nlp_pricing_most_popular: "הכי פופולרי",
  nlp_pricing_get_started: "התחל עכשיו",
  nlp_pricing_contact_sales: "צור קשר עם מכירות",
  nlp_ctaTitle: "שדרג את האפליקציות שלך עם NLP",
  nlp_ctaDesc: "פתח הבנה לשונית מתקדמת, ניתוח סנטימנט, זיהוי ישויות, תרגום ובינה שיחתית לעסק שלך.",
  nlp_ctaButton: "התחל עם NLP",
    heroTitle: "המרכז שלך לפתרונות בינה מלאכותית ואוטומציה.",
    heroDesc: "מצא, השווה והשתמש בכלי הבינה המלאכותית המובילים לפרודוקטיביות, אוטומציה, יצירת תוכן, אנליטיקה ועוד — הכל במקום אחד.",
    explore: "גלה עכשיו",
    whoWeAre: "מי אנחנו",
    empower: "מעצימים את העתיד עם חדשנות בינה מלאכותית",
    about: "בלב המשימה שלנו האמונה שבינה מלאכותית צריכה להיות מובנת, נגישה ובעלת השפעה. אנו מתמחים בגישור בין טכנולוגיות AI מתקדמות ליישומים בעולם האמיתי — מסייעים לאנשים ולעסקים להצליח בעידן האוטומציה, הנתונים וההחלטות החכמות.",
    about2: "מסטארטאפים ועד ארגונים, אנו מדריכים את שותפינו לגלות את הפתרונות הנכונים, לשלב אותם בצורה חלקה ולממש את הפוטנציאל שלהם. אנחנו לא רק פלטפורמה — אנחנו השותף האסטרטגי שלך לנווט את מהפכת הבינה המלאכותית בביטחון ובהירות.",
    learnMore: "למידע נוסף עלינו",
    ourService: "השירות שלנו",
    trusted: "שותפים אמינים",
    trustedDesc: "אנו גאים לשתף פעולה עם מובילי התעשייה כדי להביא לך את הטוב ביותר.",
    whatUsersSay: "מה המשתמשים שלנו אומרים",
    empowerWorkflow: "העצם את זרימת העבודה שלך עם AI חכם",
    empowerDesc: "מאוטומציה ועד אנליטיקה, גלה כלים שנועדו לשנות את הדרך בה אתה עובד. גלה פתרונות מותאמים ליוצרים, צוותים וארגונים — שנבנו להתאים, ללמוד ולצמוח עם הצרכים שלך. שפר פרודוקטיביות, קבל החלטות טובות יותר, והישאר מוביל עם טכנולוגיה חכמה שמתפתחת איתך.",
    exploreTools: "גלה כלים",
    learnMoreArrow: "למידע נוסף →",
    // Computer Vision page translations
    cv_heroTitle: "נתונים וניתוחים",
    cv_heroDesc: "גלה תובנות וקבל החלטות חכמות יותר עם כלי ניתוח נתונים מבוססי בינה מלאכותית. נתח, הצג וחזה נתונים לכל צורך עסקי באופן מיידי.",
    cv_exploreFeatures: "גלה תכונות",
    cv_process: "תהליך",
    cv_howItWorks: "איך זה עובד",
    cv_step1: "חבר את הנתונים שלך",
    cv_step2: "נתח וחקור",
    cv_step3: "הצג תובנות",
    cv_step4: "חזה ותחזה",
    cv_step5: "שתף ושיתוף פעולה",
    cv_featuresTitle: "תכונות ויתרונות",
    cv_featuresDesc: "הפלטפורמה שלנו לנתונים וניתוחים עוזרת לך לחבר, לנתח ולהציג נתונים מכל מקור.\n\nהשתמש בניתוחים מתקדמים, חיזוי וכלי דיווח כדי לגלות מגמות ולקבל החלטות מבוססות נתונים.\n\nשתף פעולה עם הצוות שלך ושתף תובנות מיידית.",
    cv_feature1: "אינטגרציית נתונים",
    cv_feature2: "ניתוחים מתקדמים",
    cv_feature3: "הצגת נתונים",
    cv_feature4: "חיזוי",
    cv_feature5: "שיתוף פעולה",
    cv_feature6: "דיווח",
    cv_benefit1: "שלב נתונים ממקורות מרובים",
    cv_benefit2: "ניתוחים מתקדמים ולמידת מכונה",
    cv_benefit3: "לוחות מחוונים והצגות אינטראקטיביות",
    cv_benefit4: "דיווח אוטומטי ושיתוף",
    cv_benefitsTitle: "יתרונות נתונים וניתוחים",
    cv_benefit5: "קבל החלטות מבוססות נתונים בביטחון",
    cv_benefit6: "הפוך דיווחים לאוטומטיים וחסוך זמן",
    cv_benefit7: "גלה מגמות והזדמנויות נסתרות",
    cv_benefit8: "שתף פעולה ושתף תובנות מיידית",
    cv_benefit9: "חזה תוצאות וייעל תהליכים",
    cv_usecasesTitle: "מקרי שימוש ויישומים מהחיים האמיתיים",
    cv_usecasesDesc: "גלה כיצד נתונים וניתוחים משנים את קבלת ההחלטות לעסקים, בריאות ועוד.\nהפלטפורמה שלנו מתאימה לצרכים שלך, מספקת תובנות ומהירות לכל מקרה שימוש.",
    cv_usecase1_title: "בינה עסקית",
    cv_usecase1_desc: "נתח נתוני מכירות, תפעול ולקוחות כדי להניע צמיחה עסקית.",
    cv_usecase2_title: "חיזוי פיננסי",
    cv_usecase2_desc: "חזה הכנסות, הוצאות ומגמות שוק עם מודלים מבוססי בינה מלאכותית.",
    cv_usecase3_title: "ניתוח לקוחות",
    cv_usecase3_desc: "פלח לקוחות, עקוב אחר התנהגות והתאם שיווק.",
    cv_usecase4_title: "יעילות תפעולית",
    cv_usecase4_desc: "ייעל שרשרת אספקה, מלאי והקצאת משאבים.",
    cv_ctaTitle: "גלה את עוצמת הראייה הממוחשבת",
    cv_ctaDesc: "נתח תמונות וסרטונים, גלה אובייקטים, בצע בדיקות אוטומטיות וקבל תובנות מעשיות עם פתרונות ראייה ממוחשבת מתקדמים.",
    cv_ctaButton: "התחל עם ראייה ממוחשבת"
  // Data Analysis & Forecasting page translations
  ,da_heroTitle: "כלי קול ווידאו מבוססי בינה מלאכותית"
  ,da_heroDesc: "הפוך את התקשורת ויצירת התוכן שלך עם פתרונות קול ווידאו מתקדמים מבוססי בינה מלאכותית. צור קריינות מציאותית מיידית, בצע אוטומציה לעריכת וידאו, והגיע לקהלים גלובליים עם תרגום ודיבוב בזמן אמת."
  ,da_exploreFeatures: "גלה תכונות"
  ,da_process: "תהליך"
  ,da_howItWorks: "איך זה עובד"
  ,da_step1: "סינתזת קול"
  ,da_step2: "עריכת וידאו"
  ,da_step3: "תרגום ודיבוב"
  ,da_step4: "זיהוי דיבור"
  ,da_step5: "פרסום ותמיכה"
  ,da_featuresTitle: "תכונות ויתרונות"
  ,da_featuresDesc: "הכלים שלנו לקול ווידאו מבוססי בינה מלאכותית מאפשרים לך ליצור תוכן אודיו ווידאו מקצועי, לבצע אוטומציה לעריכה, ולהגיע לקהלים גלובליים עם תרגום ודיבוב בזמן אמת.\n\nחווה אינטגרציה חלקה, שליטה אינטואיטיבית ופתרונות הניתנים להרחבה ליוצרים, מחנכים ועסקים."
  ,da_feature1: "שיבוט והתאמת קול"
  ,da_feature2: "שיפור וידאו בינה מלאכותית"
  ,da_feature3: "זיהוי דיבור"
  ,da_feature4: "המרת טקסט לדיבור ולהפך"
  ,da_feature5: "תרגום בזמן אמת"
  ,da_feature6: "אינטגרציה קלה"
  ,da_benefit1: "הפק קריינות ודיבור מציאותיים"
  ,da_benefit2: "בצע אוטומציה לעריכת וידאו ושיפור"
  ,da_benefit3: "המר דיבור לטקסט ולהפך"
  ,da_benefit4: "הרחב את ההגעה שלך עם תרגום מיידי"
  ,da_ctaTitle: "גלה תובנות עם ניתוח נתונים"
  ,da_ctaDesc: "גלה מגמות נסתרות, חזה תוצאות עתידיות, וקבל החלטות חכמות יותר עם ניתוח נתונים וחיזוי מבוססי בינה מלאכותית."
  ,da_ctaButton: "התחל לנתח נתונים"
  ,da_pricing_title: "תמחור"
  ,da_pricing_plans: "חבילות"
  ,da_pricing_starter: "מתחיל"
  ,da_pricing_starter_desc: "ליוצרים ויחידים"
  ,da_pricing_starter_f1: "סינתזת קול בסיסית"
  ,da_pricing_starter_f2: "עריכת וידאו פשוטה"
  ,da_pricing_starter_f3: "עד 100 פרויקטים/חודש"
  ,da_pricing_starter_f4: "תמיכה בדוא\"ל"
  ,da_pricing_professional: "מקצועי"
  ,da_pricing_professional_desc: "לצוותים ועסקים"
  ,da_pricing_professional_f1: "כלי קול ווידאו מתקדמים"
  ,da_pricing_professional_f2: "פרויקטים ללא הגבלה"
  ,da_pricing_professional_f3: "תמיכה בעדיפות"
  ,da_pricing_professional_f4: "תרגום בזמן אמת"
  ,da_pricing_professional_f5: "גישה ל-API"
  ,da_pricing_professional_f6: "תכונות שיתוף פעולה"
  ,da_pricing_enterprise: "ארגוני"
  ,da_pricing_enterprise_price: "מותאם"
  ,da_pricing_enterprise_desc: "לארגונים גדולים"
  ,da_pricing_enterprise_f1: "מודלים מותאמים של בינה מלאכותית"
  ,da_pricing_enterprise_f2: "מנהל חשבון ייעודי"
  ,da_pricing_enterprise_f3: "תמיכה טלפונית 24/7"
  ,da_pricing_enterprise_f4: "אפשרות מקומית"
  ,da_pricing_enterprise_f5: "אבטחה מתקדמת"
  ,da_pricing_enterprise_f6: "התחייבות SLA"
  ,da_pricing_enterprise_f7: "אינטגרציות מותאמות"
  ,da_pricing_month: "/חודש"
  ,da_pricing_most_popular: "הכי פופולרי"
  ,da_pricing_get_started: "התחל עכשיו"
  ,da_pricing_contact_sales: "צור קשר עם מכירות"
  ,da_usecasesTitle: "מקרי שימוש ויישומים מהחיים האמיתיים"
  ,da_usecasesDesc: "ראה כיצד כלי קול ווידאו מבוססי בינה מלאכותית משנים את יצירת התוכן, התקשורת והנגישות ליוצרים, מחנכים ועסקים.\nהפלטפורמה שלנו מתאימה לצרכים שלך, מספקת איכות ומהירות לכל מקרה שימוש."
  ,da_usecase1_title: "קריינות לסרטונים"
  ,da_usecase1_desc: "צור קריינות מקצועית לסרטוני הסבר, פרסומות ומצגות."
  ,da_usecase2_title: "הפקת פודקאסטים"
  ,da_usecase2_desc: "בצע אוטומציה לעריכה ושיפור לפודקאסטים ותוכניות אודיו."
  ,da_usecase3_title: "תוכן לימוד מקוון"
  ,da_usecase3_desc: "צור קריינות ושיעורי וידאו לקורסים מקוונים."
  ,da_usecase4_title: "פתרונות נגישות"
  ,da_usecase4_desc: "המר דיבור לטקסט וספק תרגום בזמן אמת לנגישות."
  ,cv_pricing_title: "תמחור"
  ,cv_pricing_plans: "חבילות"
  ,cv_pricing_starter: "מתחיל"
  ,cv_pricing_starter_desc: "ליחידים וצוותים קטנים"
  ,cv_pricing_starter_f1: "אינטגרציית נתונים בסיסית"
  ,cv_pricing_starter_f2: "עד 10 לוחות מחוונים"
  ,cv_pricing_starter_f3: "אנליטיקה סטנדרטית"
  ,cv_pricing_starter_f4: "תמיכה בדוא\"ל"
  ,cv_pricing_starter_f5: "ייצוא ל-CSV/PDF"
  ,cv_pricing_professional: "מקצועי"
  ,cv_pricing_professional_desc: "לעסקים מתפתחים"
  ,cv_pricing_professional_f1: "אנליטיקה מתקדמת ולמידת מכונה"
  ,cv_pricing_professional_f2: "לוחות מחוונים ללא הגבלה"
  ,cv_pricing_professional_f3: "כלי שיתוף פעולה"
  ,cv_pricing_professional_f4: "תמיכה בעדיפות"
  ,cv_pricing_professional_f5: "אינטגרציות מותאמות"
  ,cv_pricing_enterprise: "ארגוני"
  ,cv_pricing_enterprise_price: "מותאם"
  ,cv_pricing_enterprise_desc: "לארגונים גדולים"
  ,cv_pricing_enterprise_f1: "מנהל חשבון ייעודי"
  ,cv_pricing_enterprise_f2: "אפשרות מקומית"
  ,cv_pricing_enterprise_f3: "אבטחה מתקדמת"
  ,cv_pricing_enterprise_f4: "התחייבות SLA"
  ,cv_pricing_enterprise_f5: "תמיכה טלפונית 24/7"
  ,cv_pricing_enterprise_f6: "מקורות נתונים ללא הגבלה"
  ,cv_pricing_month: "/חודש"
  ,cv_pricing_most_popular: "הכי פופולרי"
  ,cv_pricing_get_started: "התחל עכשיו"
  ,cv_pricing_contact_sales: "צור קשר עם מכירות"
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("english");
  const isRTL = language === "arabic" || language === "hebrew";
  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
