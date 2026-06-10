import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  UserCheck,
  CalendarDays,
  Globe,
  LayoutGrid,
  ListChecks,
  Users,
  Shield,
  Building2,
  Cloud,
  Calendar as CalendarIcon,
  Sparkles,
  Bell,
  Home,
  IndianRupee,
  ArrowRightLeft,
  Zap,
  FileBarChart,
  FlaskConical,
  Download,
  MousePointerClick,
} from "lucide-react";
import SectionHeading from "../Common/SectionHeading.jsx";
import logo from "../../assets/images/ajems_logo.png";
import "./Dashboard.css";

const menu = [
  { id: "dashboard", label: "Dashboard", Icon: LayoutDashboard, group: "core" },
  { id: "workspace", label: "Workspace", Icon: FolderKanban, group: "core" },
  { id: "attendance", label: "Attendance", Icon: UserCheck, group: "tools" },
  { id: "calendar", label: "Calendar", Icon: CalendarDays, group: "tools" },
  { id: "website", label: "Website", Icon: Globe, group: "tools" },
];

const statCards = [
  {
    label: "All Apps",
    value: "40",
    Icon: LayoutGrid,
    grad: "linear-gradient(135deg,#13b8a6,#0e7d8c)",
  },
  {
    label: "All Forms",
    value: "106",
    Icon: ListChecks,
    grad: "linear-gradient(135deg,#e05fb8,#a23bd6)",
  },
  {
    label: "All Users",
    value: "28",
    Icon: Users,
    grad: "linear-gradient(135deg,#16c39a,#1f8f6e)",
  },
  {
    label: "All User Forms Permissions",
    value: "14",
    Icon: Shield,
    grad: "linear-gradient(135deg,#f7a01e,#f2541a)",
  },
  {
    label: "Organization",
    value: "1",
    Icon: Building2,
    grad: "linear-gradient(135deg,#7b5cf0,#5a37d6)",
  },
  {
    label: "Cloud Storage",
    value: "813.53 MB",
    Icon: Cloud,
    grad: "linear-gradient(135deg,#27c0e8,#1f8fd6)",
  },
  {
    label: "Calendar",
    value: "0",
    Icon: CalendarIcon,
    grad: "linear-gradient(135deg,#7ad84f,#36a94a)",
  },
  {
    label: "Coming Soon",
    value: "—",
    Icon: Globe,
    grad: "linear-gradient(135deg,#8b7ad6,#5a4a9e)",
  },
];

const apps = [
  {
    name: "Accounting",
    meta: "3 Forms · Apr 5",
    tone: "#cfe8ff",
    color: "#1d6fd6",
    Icon: IndianRupee,
  },
  {
    name: "Compliance",
    meta: "2 Forms · Apr 3",
    tone: "#ecd9ff",
    color: "#7b3bd6",
    Icon: ArrowRightLeft,
  },
  {
    name: "HR System",
    meta: "2 Forms · Apr 19",
    tone: "#d9e4ff",
    color: "#3b5bd6",
    Icon: Users,
  },
  {
    name: "Invoice Flow",
    meta: "0 Forms · Sep 11",
    tone: "#d9ecff",
    color: "#1d8fd6",
    Icon: Zap,
  },
  {
    name: "Lab Reports",
    meta: "5 Forms · Jun 2",
    tone: "#ffe6cc",
    color: "#e07d1a",
    Icon: FlaskConical,
  },
  {
    name: "Chemical Inv.",
    meta: "2 Forms · Apr 1",
    tone: "#f3d9ff",
    color: "#a23bd6",
    Icon: FileBarChart,
  },
];

const actions = [
  {
    name: "Staff Management",
    meta: "Do check-in and check-out here",
    tone: "#ffdede",
    color: "#e0484f",
    Icon: Home,
  },
  {
    name: "Check Logs",
    meta: "Check particular month logs",
    tone: "#ffdede",
    color: "#e0484f",
    Icon: ListChecks,
  },
  {
    name: "All Logs",
    meta: "Check all users logs here",
    tone: "#d6f5e0",
    color: "#2ea35a",
    Icon: LayoutGrid,
  },
  {
    name: "Report",
    meta: "Download report here",
    tone: "#d6f5e0",
    color: "#2ea35a",
    Icon: Download,
  },
];

function Panel({ active }) {
  if (active === "workspace") {
    return (
      <div className="dash__apps">
        {apps.map((a) => (
          <div className="dash__app" key={a.name}>
            <span
              className="dash__app-ico"
              style={{ background: a.tone, color: a.color }}
            >
              <a.Icon size={20} strokeWidth={2} />
            </span>
            <div>
              <strong>{a.name}</strong>
              <span>{a.meta}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (active === "attendance") {
    return (
      <div className="dash__actions">
        {actions.map((a) => (
          <div className="dash__action" key={a.name}>
            <span
              className="dash__action-ico"
              style={{ background: a.tone, color: a.color }}
            >
              <a.Icon size={22} strokeWidth={2} />
            </span>
            <div>
              <strong>{a.name}</strong>
              <span>{a.meta}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="dash__stats">
      {statCards.map((s) => (
        <div
          className="dash__stat"
          key={s.label}
          style={{ background: s.grad }}
        >
          <span className="dash__stat-bubbles" />
          <span className="dash__stat-ico">
            <s.Icon size={18} strokeWidth={2} />
          </span>
          <span className="dash__stat-label">{s.label}</span>
          <span className="dash__stat-value">{s.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function Dashboard() {
  const [active, setActive] = useState("dashboard");
  const [explored, setExplored] = useState(false);
  const core = menu.filter((m) => m.group === "core");
  const tools = menu.filter((m) => m.group === "tools");

  return (
    <section className="dash section">
      <div className="container">
        <SectionHeading
          title="One Dashboard. Complete Business Intelligence."
          subtitle="A real-time view of everything that drives your business."
        />

        <motion.div
          className={`dash__shell glass ${explored ? "is-explored" : ""}`}
          initial={{ opacity: 0, y: 50, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ===== Glass overlay ===== */}
          <AnimatePresence>
            {!explored && (
              <motion.button
                className="dash__overlay"
                onClick={() => setExplored(true)}
                onMouseEnter={() => setExplored(true)}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                aria-label="Explore dashboard"
              >
                <span className="dash__overlay-inner">
                  <span className="dash__overlay-ico">
                    <MousePointerClick size={26} strokeWidth={2} />
                  </span>
                  <strong>Click to explore dashboard</strong>
                  <small>See how AJEMS brings everything together</small>
                </span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* sidebar */}
          <aside className="dash__sidebar">
            <img src={logo} alt="AJEMS" className="dash__logo" />

            <span className="dash__group">Core Platforms</span>
            {core.map((m) => (
              <button
                key={m.id}
                className={`dash__navitem ${active === m.id ? "is-active" : ""}`}
                onClick={() => setActive(m.id)}
              >
                <m.Icon size={18} strokeWidth={2} className="dash__navicon" />
                {m.label}
              </button>
            ))}

            <span className="dash__group">Tools Management</span>
            {tools.map((m) => (
              <button
                key={m.id}
                className={`dash__navitem ${active === m.id ? "is-active" : ""}`}
                onClick={() => setActive(m.id)}
              >
                <m.Icon size={18} strokeWidth={2} className="dash__navicon" />
                {m.label}
              </button>
            ))}

            <div className="dash__upgrade">
              <span className="dash__upgrade-badge">
                <Sparkles size={12} strokeWidth={2.5} /> PRO
              </span>
              <strong>Upgrade to Pro</strong>
              <span className="dash__upgrade-sub">
                Unlock AI agents &amp; unlimited apps
              </span>
              <button className="dash__upgrade-btn">
                Start 14-day free trial
              </button>
            </div>
          </aside>

          {/* content */}
          <div className="dash__content">
            <div className="dash__topbar">
              <span className="dash__crumb">
                <Home size={15} strokeWidth={2.5} /> Home
              </span>
              <div className="dash__top-right">
                <Bell size={18} strokeWidth={2} className="dash__bell" />
                <span className="dash__avatar">NS</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Panel active={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
