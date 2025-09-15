import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import logo from "../assets/logo1.png";
import welcomeBg from "../assets/welcome.jpg";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Welcome() {
  const [language, setLanguage] = useState("english");
  // Translations for English, Arabic, Hebrew
  const translations = {
    english: {
      welcome: "Welcome to AI Tools",
      login: "Login to your account",
      email: "Email",
      password: "Password",
      user: "User",
      admin: "Admin",
      forgotPassword: "Forgot Password?",
      signup: "Sign up",
      dontHaveAccount: "Don't have an account?",
      invalidCredentials: "Invalid credentials",
      enterEmail: "Enter your email",
      enterPassword: "Enter your password",
      backToLogin: "Back to Login",
      next: "Next",
      updatePassword: "Update Password",
      enterRegisteredEmail: "Enter your registered email",
      enterNewPassword: "Enter new password",
      confirmNewPassword: "Confirm new password",
      passwordUpdated: "Password updated! Please login.",
      emailNotFound: "Email not found. Please check and try again.",
      passwordsDoNotMatch: "Passwords do not match.",
      pleaseEnterAndConfirm: "Please enter and confirm your new password.",
      loginBtn: "Login"
    },
    arabic: {
      welcome: "مرحبا بكم في أدوات الذكاء الاصطناعي",
      login: "تسجيل الدخول إلى حسابك",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      user: "مستخدم",
      admin: "مسؤول",
      forgotPassword: "هل نسيت كلمة المرور؟",
      signup: "إنشاء حساب",
      dontHaveAccount: "ليس لديك حساب؟",
      invalidCredentials: "بيانات الاعتماد غير صحيحة",
      enterEmail: "أدخل بريدك الإلكتروني",
      enterPassword: "أدخل كلمة المرور",
      backToLogin: "العودة لتسجيل الدخول",
      next: "التالي",
      updatePassword: "تحديث كلمة المرور",
      enterRegisteredEmail: "أدخل بريدك الإلكتروني المسجل",
      enterNewPassword: "أدخل كلمة مرور جديدة",
      confirmNewPassword: "تأكيد كلمة المرور الجديدة",
      passwordUpdated: "تم تحديث كلمة المرور! يرجى تسجيل الدخول.",
      emailNotFound: "البريد الإلكتروني غير موجود. يرجى التحقق والمحاولة مرة أخرى.",
      passwordsDoNotMatch: "كلمات المرور غير متطابقة.",
      pleaseEnterAndConfirm: "يرجى إدخال وتأكيد كلمة المرور الجديدة.",
      loginBtn: "تسجيل الدخول"
    },
    hebrew: {
      welcome: "ברוכים הבאים לכלי הבינה המלאכותית",
      login: "התחבר לחשבון שלך",
      email: "אימייל",
      password: "סיסמה",
      user: "משתמש",
      admin: "מנהל",
      forgotPassword: "שכחת סיסמה?",
      signup: "הרשמה",
      dontHaveAccount: "אין לך חשבון?",
      invalidCredentials: "פרטי התחברות שגויים",
      enterEmail: "הזן את האימייל שלך",
      enterPassword: "הזן את הסיסמה שלך",
      backToLogin: "חזרה להתחברות",
      next: "הבא",
      updatePassword: "עדכן סיסמה",
      enterRegisteredEmail: "הזן את האימייל הרשום שלך",
      enterNewPassword: "הזן סיסמה חדשה",
      confirmNewPassword: "אשר סיסמה חדשה",
      passwordUpdated: "הסיסמה עודכנה! אנא התחבר.",
      emailNotFound: "האימייל לא נמצא. אנא בדוק ונסה שוב.",
      passwordsDoNotMatch: "הסיסמאות אינן תואמות.",
      pleaseEnterAndConfirm: "אנא הזן ואשר את הסיסמה החדשה.",
      loginBtn: "התחבר"
    }
  };
  const t = translations[language];
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setRole } = useRole();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
  // Forgot password state
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotStep, setForgotStep] = useState(1); // 1: email, 2: new pass
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [forgotError, setForgotError] = useState("");

  // Default admin credentials (for demo)
  const DEFAULT_ADMINS = [
    { email: "admin@example.in", password: "admin123", role: "admin" },
    { email: "admin@enkonix.in", password: "admin123", role: "admin" }
  ];

  const handleRoleSelect = (admin) => {
    setIsAdmin(admin);
    setRole(admin ? "admin" : "user");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Get all registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Combine with default admins for demo
    const allUsers = [...users, ...DEFAULT_ADMINS];
    
    // Find matching user
    const user = allUsers.find(
      user => user.email === email && user.password === password
    );

    if (!user) {
      setError("Invalid credentials");
      return;
    }

    // Successful login
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("currentUser", JSON.stringify(user));
    
    // Redirect based on role
            navigate(user.role === "admin" ? "/admin-dashboard" : "/home1");
  };

  const handleContinue = () => {
    navigate("/signup", { state: { isAdmin } });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className="min-h-screen w-full flex flex-row"
      style={{
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        direction: (language === 'arabic' || language === 'hebrew') ? 'rtl' : 'ltr',
      }}
    >
      {/* Left side (empty or transparent) */}
      <div className="flex-1" />
      {/* Right side: Form */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-full max-w-xs p-6 border rounded-lg shadow-lg"
          style={{
            background: theme === 'dark'
              ? '#000'
              : 'transparent',
          }}
        >
          {/* Logo and Language Dropdown */}
          <div className="relative flex justify-center items-center mb-8">
            <div style={{ background: theme === 'dark' ? 'white' : 'white' }} className="p-4 rounded-full">
                <img src={logo} loading="lazy" alt="Logo" className="h-16 w-auto" />
            </div>
            <button
              onClick={toggleTheme}
              className={`absolute right-0 p-2 rounded-full border border-[rgb(219,158,111)] transition-colors focus:outline-none focus:ring-2 focus:ring-[rgb(219,158,111)] bg-white text-black`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ top: 0, right: 0, position: 'absolute' }}
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-[rgb(219,158,111)]" />
              ) : (
                <MoonIcon className="h-5 w-5 text-[rgb(219,158,111)]" />
              )}
            </button>
            {/* Language Button */}
            <div style={{ position: 'absolute', left: 0, top: 0 }}>
              <button
                onClick={() => setShowLangDropdown((prev) => !prev)}
                className="p-2 rounded-full border border-[rgb(219,158,111)] bg-white text-black focus:outline-none focus:ring-2 focus:ring-[rgb(219,158,111)]"
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

          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={theme === 'dark' ? { color: 'white' } : { color: 'black' }}>
              {t.welcome}
            </h2>
            <p className={theme === 'dark' ? '' : 'text-[rgb(219,158,111)]'} style={theme === 'dark' ? { color: 'white' } : {}}>
              {t.login}
            </p>
          </div>

          {/* Role Selection */}
          {!showForgot && (
            <div className="mb-6">
              <div className="flex">
                <button
                  onClick={() => handleRoleSelect(false)}
                  className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors"
                  style={theme === 'dark'
                    ? { background: 'white', color: 'black', border: !isAdmin ? '2px solid black' : 'none' }
                    : {
                        background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                        color: 'white',
                        border: !isAdmin ? '2px solid transparent' : 'none',
                        borderImage: !isAdmin ? 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525) 1' : 'none'
                      }
                  }
                >
                  {t.user}
                </button>
                <button
                  onClick={() => handleRoleSelect(true)}
                  className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors"
                  style={theme === 'dark'
                    ? { background: 'white', color: 'black', border: isAdmin ? '2px solid black' : 'none' }
                    : {
                        background: isAdmin ? 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)' : 'transparent',
                        color: 'brown',
                        border: isAdmin ? '2px solid transparent' : 'none',
                        borderImage: isAdmin ? 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525) 1' : 'none'
                      }
                  }
                >
                  {t.admin}
                </button>
              </div>
            </div>
          )}

          {/* Login Form or Forgot Password Form */}
          {!showForgot ? (
            <>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={theme === 'dark' ? { color: 'white' } : { color: '#4B5563' }}>
                    {t.email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                    style={theme === 'dark'
                      ? { background: 'white', color: 'black', border: '1px solid #000' }
                      : { background: 'white', color: 'black', border: '1px solid #D1D5DB' }
                    }
                    placeholder={t.enterEmail}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={theme === 'dark' ? { color: 'white' } : { color: '#4B5563' }}>
                    {t.password}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                    style={theme === 'dark'
                      ? { background: 'white', color: 'black', border: '1px solid #000' }
                      : { background: 'white', color: 'black', border: '1px solid #D1D5DB' }
                    }
                    placeholder={t.enterPassword}
                    required
                  />
                </div>
                {error && (
                  <div className={`rounded-lg p-3 ${theme === 'dark' ? 'bg-red-900/20 border-red-500/30' : 'bg-red-50 border-red-200'} border`}>
                    <p className={`text-sm text-center ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{t.invalidCredentials}</p>
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full py-3 px-4 font-medium rounded-lg transition-all duration-300 hover:opacity-90"
                  style={theme === 'dark'
                    ? { background: 'white', color: 'black' }
                    : {
                        background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                        color: 'white',
                        border: '2px solid transparent',
                        borderImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525) 1'
                      }
                  }
                >
                  {t.loginBtn}
                </button>
              </form>
              {/* Forgot Password Link */}
              <div className="text-center mt-2">
                <button
                  className="text-sm underline text-blue-600 hover:text-blue-800"
                  type="button"
                  onClick={() => {
                    setShowForgot(true);
                    setForgotStep(1);
                    setForgotEmail("");
                    setForgotError("");
                  }}
                >
                  {t.forgotPassword}
                </button>
              </div>
            </>
          ) : (
            // Forgot Password Form
            <div className="space-y-4">
              {forgotStep === 1 && (
                <>
                  <label className="block text-sm font-medium mb-2" style={theme === 'dark' ? { color: 'white' } : { color: '#4B5563' }}>
                    {t.enterRegisteredEmail}
                  </label>
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={e => setForgotEmail(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                    style={theme === 'dark'
                      ? { background: 'white', color: 'black', border: '1px solid #000' }
                      : { background: 'white', color: 'black', border: '1px solid #D1D5DB' }
                    }
                    placeholder={t.enterEmail}
                  />
                  {forgotError && (
                    <div className={`rounded-lg p-3 ${theme === 'dark' ? 'bg-red-900/20 border-red-500/30' : 'bg-red-50 border-red-200'} border`}>
                      <p className={`text-sm text-center ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{t.emailNotFound}</p>
                    </div>
                  )}
                  <button
                    className="w-full py-3 px-4 font-medium rounded-lg transition-all duration-300 hover:opacity-90"
                    style={theme === 'dark'
                      ? { background: 'white', color: 'black' }
                      : {
                          background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                          color: 'white',
                          border: '2px solid transparent',
                          borderImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525) 1'
                        }
                    }
                    type="button"
                    onClick={() => {
                      setForgotError("");
                      // Check if email exists in localStorage users
                      const users = JSON.parse(localStorage.getItem("users") || "[]");
                      const userIdx = users.findIndex(u => u.email === forgotEmail);
                      if (userIdx === -1) {
                        setForgotError(t.emailNotFound);
                        return;
                      }
                      setForgotStep(2);
                    }}
                  >
                    {t.next}
                  </button>
                  <div className="text-center mt-2">
                    <button
                      className="text-sm underline text-blue-600 hover:text-blue-800"
                      type="button"
                      onClick={() => setShowForgot(false)}
                    >
                      {t.backToLogin}
                    </button>
                  </div>
                </>
              )}
              {forgotStep === 2 && (
                <>
                  <label className="block text-sm font-medium mb-2" style={theme === 'dark' ? { color: 'white' } : { color: '#4B5563' }}>
                    {t.enterNewPassword}
                  </label>
                  <input
                    type="password"
                    value={newPass}
                    onChange={e => setNewPass(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                    style={theme === 'dark'
                      ? { background: 'white', color: 'black', border: '1px solid #000' }
                      : { background: 'white', color: 'black', border: '1px solid #D1D5DB' }
                    }
                    placeholder={t.enterNewPassword}
                  />
                  <label className="block text-sm font-medium mb-2" style={theme === 'dark' ? { color: 'white' } : { color: '#4B5563' }}>
                    {t.confirmNewPassword}
                  </label>
                  <input
                    type="password"
                    value={confirmPass}
                    onChange={e => setConfirmPass(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors"
                    style={theme === 'dark'
                      ? { background: 'white', color: 'black', border: '1px solid #000' }
                      : { background: 'white', color: 'black', border: '1px solid #D1D5DB' }
                    }
                    placeholder={t.confirmNewPassword}
                  />
                  {forgotError && (
                    <div className={`rounded-lg p-3 ${theme === 'dark' ? 'bg-red-900/20 border-red-500/30' : 'bg-red-50 border-red-200'} border`}>
                      <p className={`text-sm text-center ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>{forgotError === "Passwords do not match." ? t.passwordsDoNotMatch : t.pleaseEnterAndConfirm}</p>
                    </div>
                  )}
                  <button
                    className="w-full py-3 px-4 font-medium rounded-lg transition-all duration-300 hover:opacity-90"
                    style={theme === 'dark'
                      ? { background: 'white', color: 'black' }
                      : {
                          background: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525)',
                          color: 'white',
                          border: '2px solid transparent',
                          borderImage: 'linear-gradient(to right, #63342e, #312525, #d6ab88, #c58d6a, #9a644a, #63342e, #312525) 1'
                        }
                    }
                    type="button"
                    onClick={() => {
                      setForgotError("");
                      if (!newPass || !confirmPass) {
                        setForgotError(t.pleaseEnterAndConfirm);
                        return;
                      }
                      if (newPass !== confirmPass) {
                        setForgotError(t.passwordsDoNotMatch);
                        return;
                      }
                      // Update password in localStorage
                      const users = JSON.parse(localStorage.getItem("users") || "[]");
                      const userIdx = users.findIndex(u => u.email === forgotEmail);
                      if (userIdx === -1) {
                        setForgotError(t.emailNotFound);
                        return;
                      }
                      users[userIdx].password = newPass;
                      localStorage.setItem("users", JSON.stringify(users));
                      setShowForgot(false);
                      setForgotStep(1);
                      setForgotEmail("");
                      setNewPass("");
                      setConfirmPass("");
                      setError("");
                      setTimeout(() => {
                        setError(t.passwordUpdated);
                      }, 100);
                    }}
                  >
                    {t.updatePassword}
                  </button>
                  <div className="text-center mt-2">
                    <button
                      className="text-sm underline text-blue-600 hover:text-blue-800"
                      type="button"
                      onClick={() => {
                        setShowForgot(false);
                        setForgotStep(1);
                        setForgotEmail("");
                        setNewPass("");
                        setConfirmPass("");
                        setForgotError("");
                      }}
                    >
                      {t.backToLogin}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Sign Up Link */}
          {!showForgot && (
            <div className="text-center mt-6">
              <p style={theme === 'dark' ? { color: 'white' } : {}}>
                {t.dontHaveAccount} {" "}
                <button
                  onClick={handleContinue}
                  className="hover:underline"
                  style={theme === 'dark' ? { color: 'white' } : { color: 'brown' }}
                >
                  {t.signup}
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
