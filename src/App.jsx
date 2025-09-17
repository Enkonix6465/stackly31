import { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from './home1';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import SecondHome from './pages/home2';
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContentCodeGeneration from "./services/content-code-generation.jsx";
import AutomationWorkflowTools from "./services/automation-workflow-tools.jsx";
import AICodeAssistants from "./services/ai-code-assistants.jsx";
import AIVoiceAndVedioTools from "./services/ai-voice-and-vedio-tools.jsx";
import AIChatbotsAssistants from "./services/ai-chatbots-assistants.jsx";
import DataAnalytics from "./services/data-analytics.jsx";
import BlogPage from "./pages/Blog";
import Welcome from "./pages/Welcome";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import ContactUs from "./pages/ContactUs";
import { RoleProvider } from "./context/RoleContext";
import BlogDetails from "./pages/BlogDetails";
import EditorPickDetails from "./pages/EditorPickDetails";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function AppContent() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Responsive layout: add a container for main content
  const noHeaderFooterRoutes = ["/", "/login", "/signup", "/forgot-password", "/not-found"];
  const showHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className={(theme === "dark" ? "dark" : "light") + " min-h-screen flex flex-col"}>
      {showHeaderFooter && <Header theme={theme} toggleTheme={toggleTheme} />}
      <main className="flex-1 w-full">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/signup" element={<SignupWrapper />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/not-found" element={<NotFound />} />

          {/* Public Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/content-code-generation" element={<ContentCodeGeneration />} />
          <Route path="/services/automation-workflow-tools" element={<AutomationWorkflowTools />} />
          <Route path="/services/ai-code-assistants" element={<AICodeAssistants />} />
          <Route path="/services/ai-voice-and-vedio-tools" element={<AIVoiceAndVedioTools />} />
          <Route path="/services/ai-chatbots-assistants" element={<AIChatbotsAssistants />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />

          {/* Protected Routes - Allow both user and admin */}
          <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
            <Route path="/home1" element={<HomePage />} />
            <Route path="/home2" element={<SecondHome />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/editor-pick/:id" element={<EditorPickDetails />} />
          </Route>

          {/* Admin-only Routes */}
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {showHeaderFooter && <Footer theme={theme} />}
    </div>
  );
}

function App() {
  return (
    <RoleProvider>
      <AppContent />
    </RoleProvider>
  );
}

// Wrapper components for Login and Signup to pass isAdmin
function LoginWrapper() {
  const location = useLocation();
  return <Login isAdmin={location.state?.isAdmin || false} />;
}

function SignupWrapper() {
  const location = useLocation();
  return <Signup isAdmin={location.state?.isAdmin || false} />;
}

export default App;
