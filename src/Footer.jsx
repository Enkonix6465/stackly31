import React from "react";
import { useLanguage } from "./context/LanguageContext";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import logo from "./assets/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToTop } from "./hooks/useScrollToTop";

export default function Footer({ theme }) {
  const { isRTL, translations } = useLanguage();
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className={theme === "dark" ? "bg-[#181818] text-gray-300" : "bg-gray-100 text-gray-900"} dir={isRTL ? "rtl" : "ltr"}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Company Info & Social */}
          <div className={`${theme === "dark" ? `flex flex-col items-start ${isRTL ? 'text-right' : 'text-left'}` : `flex flex-col items-start ${isRTL ? 'text-right text-black' : 'text-left text-black'}`} w-full md:w-auto mb-8 md:mb-0`}>
            <img src={logo} loading="lazy" alt="Logo" className="h-16 md:h-20 w-auto mb-4 md:pr-20 md:-ml-14 md:-mt-6" />
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#312525]'}`}>{translations.footer_company || "AI Tools Company"}</h3>
            <p className={theme === "dark" ? "text-gray-300 text-sm leading-relaxed mb-6 max-w-xs" : "text-black text-sm leading-relaxed mb-6 max-w-xs"}>
              {translations.footer_tagline || "Leading the future with cutting-edge AI tools and solutions."}
            </p>
            <div className="flex gap-4 justify-start">
              {[
                { icon: FaLinkedin, url: "https://www.linkedin.com", label: "LinkedIn" },
                { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
                { icon: FaFacebook, url: "https://facebook.com", label: "Facebook" },
                { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group
                    ${theme === 'dark'
                      ? 'bg-[#333] text-white hover:bg-gradient-to-r from-[#8B5C2A] via-[#A67C52] to-[#C19A6B] hover:text-black'
                      : 'bg-gray-200 text-[#181818] hover:bg-gradient-to-r from-[#C19A6B] via-[#A67C52] to-[#8B5C2A] hover:text-black'}
                    hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg transition-transform duration-300 group-hover:scale-125" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"} w-full md:w-auto mb-8 md:mb-0`}>
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#312525]'}`}>{translations.footer_quick_links || "Quick Links"}</h3>
            <ul className="space-y-3">
              {[
                { label: translations.footer_home1 || "Home 1", path: "/home1" },
                { label: translations.footer_about || "About Us", path: "/about-us" },
                { label: translations.footer_services || "Services", path: "/services" },
                { label: translations.footer_blog || "Blog", path: "/blog" },
                { label: translations.footer_contact || "Contact", path: "/contact-us" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={(theme === "dark" ? "text-gray-300" : "text-black") + " hover:text-[#A67C52] transition-colors duration-300 w-full text-left"}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={`${theme === "dark" 
            ? `flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}` 
            : `flex flex-col ${isRTL ? 'items-end text-right text-black' : 'items-start text-left text-black'}`} w-full md:w-auto mb-8 md:mb-0`}>
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#312525]'}`}>{translations.footer_our_services || translations.header_services || "Our Services"}</h3>
            <ul className="space-y-3">
              {[
                { name: translations.header_service_content || "Content Generation", path: "/services/content-code-generation" },
                { name: translations.header_service_automation || "Automation Tools", path: "/services/automation-workflow-tools" },
                { name: translations.header_service_code_assistants || "AI Code Assistants", path: "/services/ai-code-assistants" },
                { name: translations.header_service_data_analytics || "Data & Analytics", path: "/services/data-analytics" },
                { name: translations.header_service_chatbots || "AI Chatbots", path: "/services/ai-chatbots-assistants" },
                { name: translations.header_service_voice_video || "AI Voice & Video Tools", path: "/services/ai-voice-and-vedio-tools" },
              ].map((service) => (
                <li key={service.path}>
                  <button
                    onClick={() => handleNavigation(service.path)}
                    className={
                      (theme === "dark" ? "text-gray-300" : "text-black") +
                      " hover:text-[#A67C52] transition-colors duration-300 cursor-pointer w-full " +
                      (isRTL ? "text-right" : "text-left")
                    }
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div className={`${theme === "dark" ? "flex flex-col items-start text-left" : "flex flex-col items-start text-left text-black"} w-full md:w-auto mb-8 md:mb-0`}>
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#312525]'}`}>{translations.footer_get_in_touch || "Get In Touch"}</h3>
            <div className="space-y-4 mb-6 w-full max-w-xs md:max-w-xs">
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <span
                  className="mr-3"
                  style={{
                    background: 'linear-gradient(to bottom, #63342e, #d6ab88, #9a644a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  <FaPhoneAlt />
                </span>
                <span className="text-sm">+919390594407</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <span
                  className="mr-3"
                  style={{
                    background: 'linear-gradient(to bottom, #63342e, #d6ab88, #9a644a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  <FaEnvelope />
                </span>
                <span className="text-sm">ai@tools.in</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <span
                  className="mr-3"
                  style={{
                    background: 'linear-gradient(to bottom, #63342e, #d6ab88, #9a644a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  <FaMapMarkerAlt />
                </span>
                <span className="text-sm">{translations.footer_address || "India"}</span>
              </div>
              <div className={theme === "dark" ? "flex items-center text-gray-300" : "flex items-center text-black"}>
                <span
                  className="mr-3"
                  style={{
                    background: 'linear-gradient(to bottom, #63342e, #d6ab88, #9a644a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  <FaClock />
                </span>
                <span className="text-sm">{translations.footer_hours || "Mon - Fri: 9am - 6pm"}</span>
              </div>
            </div>
            <button
              onClick={() => handleNavigation('/contact-us')}
              className="w-full font-bold py-3 px-3 rounded-lg transition-all duration-300 hover:scale-105 text-white bg-gradient-to-r from-[#63342e] via-[#d6ab88] to-[#9a644a]"
              style={{ backgroundImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' }}
            >
              {translations.footer_cta || "Start Your AI Journey"}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={theme === "dark" ? "text-gray-400 text-sm mb-0 md:mb-0 text-center md:text-left" : "text-black text-sm mb-0 md:mb-0 text-center md:text-left"}>
            {translations.footer_copyright
              ? translations.footer_copyright.replace("{year}", new Date().getFullYear())
              : `© ${new Date().getFullYear()} AI Tools Company. All rights reserved.`}
          </p>
          <div className={theme === "dark" ? "flex gap-6 text-sm text-gray-400 justify-center md:justify-end" : "flex gap-6 text-sm text-black justify-center md:justify-end"}>
            <a href="#" className="hover:text-[#A67C52] transition-colors">{translations.footer_privacy || "Privacy Policy"}</a>
            <a href="#" className="hover:text-[#A67C52] transition-colors">{translations.footer_terms || "Terms of Service"}</a>
            <a href="#" className="hover:text-[#A67C52] transition-colors">{translations.footer_cookie || "Cookie Policy"}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
