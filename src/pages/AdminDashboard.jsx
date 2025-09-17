/* src/pages/AdminDashboard.jsx */
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiBarChart2,
  FiShoppingBag,
  FiActivity,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

import {
  BsLightning,
  BsRobot,
  BsGraphUp,
  BsPersonCheck,
  BsPalette,
  BsBriefcase,
} from "react-icons/bs";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

import { useTheme } from "../context/ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

/* ------------- Dummy data ------------- */

const useUserCount = () => {
  const [userCount, setUserCount] = React.useState(0);
  React.useEffect(() => {
    const fetchCount = () => {
      const stored = localStorage.getItem('users');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) setUserCount(parsed.length);
          else setUserCount(0);
        } catch {
          setUserCount(0);
        }
      } else {
        setUserCount(0);
      }
    };
    fetchCount();
    window.addEventListener('storage', fetchCount);
    return () => window.removeEventListener('storage', fetchCount);
  }, []);
  return userCount;
};

const quickStats = {
  revenue: 987423,
  activeServices: 6,
  tickets: 12,
};
const recentOrders = [
  {
    id: "#A100",
    user: "Alice",
    service: "Content Generation",
    date: "17 Jul 2025",
    status: "completed",
  },
  {
    id: "#A101",
    user: "Bob",
    service: "Data Analysis",
    date: "16 Jul 2025",
    status: "in-progress",
  },
  {
    id: "#A102",
    user: "Carol",
    service: "Automation",
    date: "16 Jul 2025",
    status: "pending",
  },
];

const serviceCards = [
  { id: 1, serviceKey: "service_ai_chatbots_assistants", icon: <BsLightning size={28} /> },
  { id: 2, serviceKey: "service_ai_code_assistants", icon: <BsGraphUp size={28} /> },
  { id: 3, serviceKey: "service_ai_voice_and_vedio_tools", icon: <BsPalette size={28} /> },
  { id: 4, serviceKey: "service_automation_workflow_tools", icon: <BsRobot size={28} /> },
  { id: 5, serviceKey: "service_content_generation", icon: <BsPersonCheck size={28} /> },
  { id: 6, serviceKey: "service_data_analytics", icon: <BsBriefcase size={28} /> },
];

/* ------------- main ------------- */
const AdminDashboard = () => {
  const { theme } = useTheme();
  const { language, setLanguage, isRTL, translations } = useLanguage();
  console.log('AdminDashboard language:', language);
  console.log('AdminDashboard translations:', translations);

  return (
    <div
      className={`min-h-screen flex ${theme === 'dark' ? 'bg-[#181a19] text-white' : 'bg-white text-black'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
      style={isRTL ? { direction: 'rtl', textAlign: 'right' } : {}}
    >
      {/* SIDEBAR REMOVED */}
  {/* MAIN CONTENT */}
  <div className="flex-1 ml-0">
      {/* SCROLLABLE CONTENT */}
  <main className="p-6 md:p-8 space-y-10 pt-24">
        {/* HEADER */}
        <header className="flex items-center justify-between">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{translations?.admin_dashboard_title || 'Admin Dashboard'}</h1>
          {/* Language switch buttons removed; language is now controlled globally from Header */}
        </header>

        {/* QUICK STATS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label={translations?.total_users || "Total Users"} value={useUserCount()} theme={theme} />
            <StatCard label={translations?.revenue_usd || "Revenue (USD)"} value={`$${quickStats.revenue.toLocaleString()}`} theme={theme} />
            <StatCard label={translations?.active_services || "Active Services"} value={quickStats.activeServices} theme={theme} />
            <StatCard label={translations?.support_tickets || translations?.tickets || "Support Tickets"} value={quickStats.tickets} theme={theme} />
          </div>
        </motion.section>

        {/* SERVICES GRID */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{translations?.services || 'Services'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((s) => (
              <ServiceCard key={s.id} serviceKey={s.serviceKey} icon={s.icon} theme={theme} />
            ))}
          </div>
        </section>

        {/* ORDERS TABLE */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{translations?.recent_orders || 'Recent Orders'}</h2>
          <div className="overflow-x-auto">
            <table className={`min-w-full ${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'}`}>
              <thead>
                <tr className={`text-left`}>
                  <th className="p-4 text-white">{translations?.order_id || 'Order ID'}</th>
                  <th className="p-4 text-white">{translations?.user || 'User'}</th>
                  <th className="p-4 text-white">{translations?.service || 'Service'}</th>
                  <th className="p-4 text-white">{translations?.date || 'Date'}</th>
                  {/* Status column removed */}
                </tr>
              </thead>
              <tbody>
                {recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-white">
                      {translations?.no_orders_found || 'No orders found.'}
                    </td>
                  </tr>
                ) : recentOrders.map((o) => {
                  // Map service to translation key
                  let serviceKey = '';
                  if (o.service === 'Content Generation') serviceKey = 'service_content_generation';
                  else if (o.service === 'Data Analysis') serviceKey = 'service_data_analytics';
                  else if (o.service === 'Automation') serviceKey = 'service_automation_workflow_tools';
                  else serviceKey = o.service;
                  // Map status to translation key
                  let statusKey = '';
                  if (o.status === 'completed') statusKey = 'status_completed';
                  else if (o.status === 'in-progress') statusKey = 'status_in_progress';
                  else if (o.status === 'pending') statusKey = 'status_pending';
                  else statusKey = o.status;
                  // Map user and order id to translation key if available
                  const userKey = `user_${o.user?.toLowerCase()}`;
                  const orderIdKey = `order_id_${o.id?.replace('#','')}`;
                  return (
                    <tr
                      key={o.id}
                      className="hover:bg-white/5"
                    >
                      <td className={`p-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{translations?.[orderIdKey] || o.id}</td>
                      <td className={`p-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{translations?.[userKey] || o.user}</td>
                      <td className={`p-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{translations?.[serviceKey] || o.service}</td>
                      <td className={`p-4 ${theme === 'dark' ? 'text-white' : 'text-white'}`}>{o.date}</td>
                      {/* Status cell removed */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* ANALYTICS CHARTS */}
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{translations?.analytics || 'Analytics'}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Area Chart 1 */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className={`${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'} backdrop-blur p-4`} 
            >
              <Line
                data={areaData1}
                options={areaOptions("User Growth (Area)")}
              />
            </motion.div>
            {/* Area Chart 2 */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className={`${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'} backdrop-blur p-4`} 
            >
              <Line
                data={areaData2}
                options={areaOptions("Revenue (Area)")}
              />
            </motion.div>
            {/* Area Chart 3 */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className={`${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'} backdrop-blur p-4`} 
            >
              <Line
                data={areaData3}
                options={areaOptions("Engagement (Area)")}
              />
            </motion.div>
          </div>
        </section>

        {/* ACTIVITY LOG & QUICK ACTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left: full-span on mobile, 2 cols on lg */}
          <div className="lg:col-span-2">
            <ActivityLog theme={theme} />
          </div>
          {/* Right: Chart Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Mini Doughnut */}
            <div className={`${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'} backdrop-blur p-4`}>
              <h4 className="text-sm mb-2" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{translations?.traffic_sources || 'Traffic Sources'}</h4>
              <div className="h-23">
                <Doughnut data={miniDoughnut} options={miniOpts} />
              </div>
            </div>
            {/* Mini Bar */}
            <div className={`${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'} backdrop-blur p-4`}>
              <h4 className="text-sm mb-2" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{translations?.weekly_signups || 'Weekly Sign-ups'}</h4>
              <div className="h-23">
                <Bar data={miniBar} options={miniOpts} />
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      </div>
    </div>
  );
}

/* ------------- sub-components ------------- */
const StatCard = ({ label, value, theme }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className={`p-6 shadow ${theme === 'dark' ? 'bg-[#1a1a1a]' : 'bg-black'}`}
  >
    <p className="text-sm" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{label}</p>
    <p className={`text-2xl font-bold text-white`}>{value}</p>
  </motion.div>
);

const ServiceCard = ({ serviceKey, icon, theme }) => {
  const { translations } = useLanguage();
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`p-6 transition cursor-pointer ${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'}`}
    >
      <div className="mb-3" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{icon}</div>
      <h3 className={`font-semibold text-white`}>
        {translations?.[serviceKey] || serviceKey}
      </h3>
    </motion.div>
  );
};

const StatusBadge = ({ status }) => {
  const { translations } = useLanguage();
  const colors = {
    completed: "bg-green-500/20 text-green-400",
    "in-progress": "bg-yellow-500/20 text-yellow-400",
    pending: "bg-red-500/20 text-red-400",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs ${colors[status]}`}>
      {translations?.[status] || status}
    </span>
  );
};

/* --------------  NEW FULL-WIDTH ACTIVITY LOG  -------------- */
import { useLanguage } from "../context/LanguageContext";

const ActivityLog = ({ theme }) => {
  // Fetch user data from localStorage
  const [users, setUsers] = React.useState([]);
  const { translations } = useLanguage();

  React.useEffect(() => {
    const fetchUsers = () => {
      const stored = localStorage.getItem('users');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) setUsers(parsed);
        } catch (e) {
          setUsers([]);
        }
      } else {
        setUsers([]);
      }
    };
    fetchUsers();
    window.addEventListener('storage', fetchUsers);
    return () => window.removeEventListener('storage', fetchUsers);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${theme === 'dark' ? 'bg-[#1a1a1a]/50' : 'bg-black'} backdrop-blur p-6`}
    >
      <h3 className="text-lg font-bold mb-4" style={{background: 'linear-gradient(90deg, #8B5C2A, #D2B48C)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{translations?.user_details || 'User Details'}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">{translations?.first_name || 'First Name'}</th>
              <th className="px-4 py-2 text-left">{translations?.last_name || 'Last Name'}</th>
              <th className="px-4 py-2 text-left">{translations?.email || 'Email'}</th>
              <th className="px-4 py-2 text-left">{translations?.registration_time || 'Registration Time'}</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-center text-gray-400">{translations?.no_users_found || 'No users found.'}</td>
              </tr>
            ) : (
              users.map((user, idx) => (
                <tr key={idx} className="border-b border-[#D2B48C]/20">
                  <td className="px-4 py-2">{user.firstName}</td>
                  <td className="px-4 py-2">{user.lastName}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.registrationTime}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default AdminDashboard;

/* 3️⃣  dummy data & helper */
const commonOptions = (title) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: "#8B5C2A" } },
    title: { display: true, text: title, color: "#8B5C2A", font: { size: 14 } },
  },
  scales: {
    x: { ticks: { color: "#8B5C2A" }, grid: { color: "#D2B48C" } },
    y: { ticks: { color: "#8B5C2A" }, grid: { color: "#D2B48C" } },
  },
});


// Area Chart 1: User Growth
const areaData1 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Users",
      data: [1000, 2000, 3000, 4000, 5000, 6000],
      borderColor: "#8B5C2A",
      backgroundColor: "rgba(210, 180, 140, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
};

// Area Chart 2: Revenue
const areaData2 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Revenue",
      data: [12000, 19000, 15000, 25000, 22000, 30000],
      borderColor: "#A0522D",
      backgroundColor: "rgba(160, 82, 45, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
};

// Area Chart 3: Engagement
const areaData3 = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Engagement",
      data: [500, 800, 1200, 900, 1400, 1600],
      borderColor: "#D2B48C",
      backgroundColor: "rgba(210, 180, 140, 0.3)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const areaOptions = (title) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: "#8B5C2A" } },
    title: { display: true, text: title, color: "#8B5C2A", font: { size: 16 } },
  },
  scales: {
    x: { ticks: { color: "#8B5C2A" }, grid: { color: "#D2B48C" } },
    y: { ticks: { color: "#8B5C2A" }, grid: { color: "#D2B48C" } },
  },
});

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
  legend: { position: "bottom", labels: { color: "#8B5C2A" } },
    title: {
      display: true,
      text: "Traffic Sources",
  color: "#8B5C2A",
      font: { size: 14 },
    },
  },
};

/* mini-chart data */
const miniDoughnut = {
  labels: ["Direct", "Organic", "Referral"],
  datasets: [
    {
      data: [45, 35, 20],
  backgroundColor: ["#8B5C2A", "#D2B48C", "#A0522D"],
      borderWidth: 0,
    },
  ],
};

const miniBar = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Sign-ups",
      data: [12, 19, 8, 15, 22, 18, 25],
  backgroundColor: "#8B5C2A",
      borderRadius: 4,
    },
  ],
};

const miniOpts = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { x: { display: false }, y: { display: false } },
};