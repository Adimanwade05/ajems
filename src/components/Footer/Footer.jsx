import { Link } from "react-router-dom";
import logo from "../../assets/images/ajems_logo.png";
import cornerImg from "../../assets/images/glow.svg";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import "./Footer.css";

const navigation = [
  { label: "About", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Case Studies", to: "/#case-studies" },
  { label: "Blog", to: "/about" },
];

const services = [
  { label: "CRM", to: "/crm" },
  { label: "ERP", to: "/erp" },
  { label: "HRMS", to: "/hrms" },
  { label: "CMS", to: "/contact" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Cookie Policy", to: "/cookies" },
  { label: "Refund Policy", to: "/refund" },
];

const socials = [
  { Icon: FaXTwitter, label: "Twitter", to: "#" },
  { Icon: FaLinkedin, label: "LinkedIn", to: "#" },
  { Icon: FaInstagram, label: "Instagram", to: "#" },
  { Icon: FaFacebook, label: "Facebook", to: "#" },
];

const contact = [
  { label: "WhatsApp", to: "#" },
  { label: "Telegram", to: "#" },
  { label: "support@ajems.com", to: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* glow blobs */}
      <div className="footer__glows" aria-hidden="true">
        <span className="footer__blob footer__blob--center" />
        <span className="footer__blob footer__blob--left" />
        <span className="footer__blob footer__blob--right" />
      </div>

      {/* decorative corner SVG (right only) */}
      <img
        src={cornerImg}
        alt=""
        aria-hidden="true"
        className="footer__corner footer__corner--right"
      />

      {/* top 5-column layout */}
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logo} alt="AJEMS" className="footer__logo" />
          <p className="footer__desc">
            One platform for CRM, ERP, HRMS and CMS — built to help modern teams
            automate work and scale without code.
          </p>

          {/* social icons under brand */}
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.to}
                className="footer__social"
                aria-label={s.label}
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            {navigation.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            {services.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Legal</h4>
          <ul>
            {legal.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            {contact.map((l) => (
              <li key={l.label}>
                <a href={l.to}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="container  footer__bottom">
        <span className="footer__copy">
          © {new Date().getFullYear()} AJEMS. All rights reserved.
        </span>
        <span className="footer__made">Built for modern teams.</span>
      </div>
    </footer>
  );
}
