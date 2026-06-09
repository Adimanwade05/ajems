import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, Users, UserCheck, Boxes, FileCode,
  BookOpen, Rocket, FileText, Newspaper, HelpCircle,
  Building2, Mail,
} from "lucide-react";
import logo from "../../assets/images/ajems_logo.png";
import "./Navbar.css";

const menu = [
  {
    label: "Solutions",
    dropdown: [
      { label: "CRM", desc: "Manage leads and customers", to: "/features", Icon: Users },
      { label: "HRMS", desc: "People, payroll and attendance", to: "/features", Icon: UserCheck },
      { label: "ERP", desc: "Run operations end to end", to: "/features", Icon: Boxes },
      { label: "CMS", desc: "Build and manage content", to: "/features", Icon: FileCode },
    ],
  },
  { label: "Industry", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  {
    label: "Knowledge Base",
    dropdown: [
      { label: "Knowledge Hub", desc: "Guides, docs and tutorials", to: "/features", Icon: BookOpen },
      { label: "Product Updates", desc: "Latest releases and changes", to: "/features", Icon: Rocket },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Case Studies", desc: "Real results from real teams", to: "/#case-studies", Icon: FileText },
      { label: "Blogs", desc: "Insights, tips and updates", to: "/about", Icon: Newspaper },
      { label: "FAQs", desc: "Answers to common questions", to: "/#faq", Icon: HelpCircle },
    ],
  },
  {
    label: "Company",
    dropdown: [
      { label: "About", desc: "Our mission and team", to: "/about", Icon: Building2 },
      { label: "Contact", desc: "Get in touch with us", to: "/contact", Icon: Mail },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const [mobileDrop, setMobileDrop] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDrop(null);
    setMobileDrop(null);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" aria-label="AJEMS home">
          <img src={logo} alt="AJEMS" />
        </Link>

        {/* desktop menu */}
        <nav className="navbar__menu" aria-label="Primary">
          {menu.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="navbar__item"
                onMouseEnter={() => setActiveDrop(item.label)}
                onMouseLeave={() => setActiveDrop(null)}
              >
                <button className="navbar__link navbar__link--drop">
                  {item.label}
                  <ChevronDown size={15} className={`navbar__chev ${activeDrop === item.label ? "rot" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDrop === item.label && (
                    <motion.div
                      className="navbar__dropdown glass"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.dropdown.map((d) => (
                        <Link key={d.label} to={d.to} className="navbar__drop-item">
                          <span className="navbar__drop-ico"><d.Icon size={18} /></span>
                          <span className="navbar__drop-text">
                            <strong>{d.label}</strong>
                            <small>{d.desc}</small>
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn-secondary navbar__cta">
            14 Day Free Trial
          </Link>
          <Link to="/contact" className="btn btn-primary navbar__cta">
            Sign Up
          </Link>
          <button
            className={`navbar__burger ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__drawer glass"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {menu.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="navbar__drawer-group">
                  <button
                    className="navbar__drawer-link navbar__drawer-toggle"
                    onClick={() => setMobileDrop(mobileDrop === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown size={16} className={mobileDrop === item.label ? "rot" : ""} />
                  </button>
                  <AnimatePresence initial={false}>
                    {mobileDrop === item.label && (
                      <motion.div
                        className="navbar__drawer-sub"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.dropdown.map((d) => (
                          <Link key={d.label} to={d.to} className="navbar__drawer-sublink">
                            {d.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="navbar__drawer-link"
                >
                  {item.label}
                </NavLink>
              )
            )}

            <Link to="/contact" className="btn btn-secondary navbar__drawer-cta">
              14 Day Free Trial
            </Link>
            <Link to="/contact" className="btn btn-primary navbar__drawer-cta">
              Sign Up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}