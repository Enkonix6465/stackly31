import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import welcomeBg from "../assets/welcome.jpg";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Signup() {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("english");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.state?.isAdmin || false;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Get existing users
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      
      // Check if email already exists
      const emailExists = existingUsers.some(user => user.email === formData.email);
      if (emailExists) {
        setErrors({ email: "Email already exists" });
        return;
      }
      
      // Create new user data
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: isAdmin ? "admin" : "user"
      };
      
      // Add to users array
      existingUsers.push(userData);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      
      // Set current user and login
      localStorage.setItem("currentUser", JSON.stringify(userData));
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userRole", isAdmin ? "admin" : "user");
      
      // Navigate to welcome page after signup
      navigate("/");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-row"
      style={{
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* Left: Image */}
      <div className="hidden md:block w-1/2 min-h-screen" />
      {/* Right: Form */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center items-center min-h-screen`}>
        <div
          className="w-full max-w-md p-8 border rounded-lg"
          style={{
            background: theme === 'dark' ? 'rgba(26,26,26,0.95)' : 'rgba(255,255,255,0.85)',
            borderColor: theme === 'dark' ? '#333' : '#e5e7eb',
          }}
        >
          {/* Logo and Language Dropdown */}
          <div className="relative flex justify-center items-center mb-8">
            <div style={{ background: theme === 'dark' ? '#232323' : '#fff' }} className="p-4 rounded-full">
              <img src={logo} loading="lazy" alt="Logo" className="h-16 w-auto" />
            </div>
            <button
              onClick={toggleTheme}
              className={`absolute right-0 p-2 rounded-full border transition-colors focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-[#232323] border-white text-white focus:ring-white' : 'bg-gray-200 border-gray-300 text-black focus:ring-gray-300'}`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ top: 0, right: 0, position: 'absolute' }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {/* Language Button */}
            <div style={{ position: 'absolute', left: 0, top: 0 }}>
              <button
                onClick={() => setShowLangDropdown((prev) => !prev)}
                className="p-2 rounded-full border bg-white text-black focus:outline-none focus:ring-2 border-[rgb(219,158,111)] focus:ring-[rgb(219,158,111)]"
                aria-label="Select language"
              >
                {language.charAt(0).toUpperCase() + language.slice(1)}
                <span className="ml-1">▼</span>
              </button>
              {showLangDropdown && (
                <div className="absolute mt-2 left-0 bg-white border rounded shadow-lg z-10 min-w-[120px]">
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'english' ? 'font-bold' : ''}`}
                    onClick={() => { setLanguage('english'); setShowLangDropdown(false); }}
                  >English</button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'arabic' ? 'font-bold' : ''}`}
                    onClick={() => { setLanguage('arabic'); setShowLangDropdown(false); }}
                  >Arabic</button>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${language === 'hebrew' ? 'font-bold' : ''}`}
                    onClick={() => { setLanguage('hebrew'); setShowLangDropdown(false); }}
                  >Hebrew</button>
                </div>
              )}
            </div>
          </div>

          {/* Form Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: theme === 'dark' ? '#fff' : '#111' }}>Create Account</h2>
            <p style={{ color: theme === 'dark' ? '#ccc' : '#555' }}>Join us as a {isAdmin ? "Admin" : "User"}</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme === 'dark' ? '#fff' : '#333' }}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                  style={{ background: theme === 'dark' ? '#232323' : '#fff', color: theme === 'dark' ? '#fff' : '#111', borderColor: theme === 'dark' ? '#333' : '#d1d5db' }}
                  placeholder="First name"
                  required
                />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: theme === 'dark' ? '#fff' : '#333' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                  style={{ background: theme === 'dark' ? '#232323' : '#fff', color: theme === 'dark' ? '#fff' : '#111', borderColor: theme === 'dark' ? '#333' : '#d1d5db' }}
                  placeholder="Last name"
                  required
                />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme === 'dark' ? '#fff' : '#333' }}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                style={{ background: theme === 'dark' ? '#232323' : '#fff', color: theme === 'dark' ? '#fff' : '#111', borderColor: theme === 'dark' ? '#333' : '#d1d5db' }}
                placeholder="Email address"
                required
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme === 'dark' ? '#fff' : '#333' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                style={{ background: theme === 'dark' ? '#232323' : '#fff', color: theme === 'dark' ? '#fff' : '#111', borderColor: theme === 'dark' ? '#333' : '#d1d5db' }}
                placeholder="Password"
                required
              />
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: theme === 'dark' ? '#fff' : '#333' }}>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                style={{ background: theme === 'dark' ? '#232323' : '#fff', color: theme === 'dark' ? '#fff' : '#111', borderColor: theme === 'dark' ? '#333' : '#d1d5db' }}
                placeholder="Confirm password"
                required
              />
              {errors.confirmPassword && <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 font-medium rounded-lg transition-all duration-300 hover:opacity-90"
              style={theme === 'dark'
                ? { background: '#333', color: '#fff' }
                : { background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)', color: '#fff' }
              }
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/" className="hover:underline text-blue-600">
                  Login
                </Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}