import { Link } from "react-router-dom";
import logo from "../../assets/images/ajems_logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import TextHoverEffect from "./TextHoverEffect.jsx";
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
      {/* layered glow blobs */}
      <div className="footer__glows" aria-hidden="true">
        <span className="footer__blob footer__blob--center" />
        <span className="footer__blob footer__blob--left" />
        <span className="footer__blob footer__blob--right" />
      </div>

      {/* top 5-column layout */}
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logo} alt="AJEMS" className="footer__logo" />
          <p className="footer__desc">
            One platform for CRM, ERP, HRMS and CMS — built to help modern teams
            automate work and scale without code.
          </p>
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
          <h4>Follow us</h4>
          <ul>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.to} className="footer__sociallink">
                  <s.Icon size={15} /> {s.label}
                </a>
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

      {/* giant animated brand text */}
      <div className="footer__giant">
        <TextHoverEffect text="AJEMS" duration={0.3} />
      </div>

      {/* copyright */}
      <div className="footer__copy">
        © {new Date().getFullYear()} AJEMS. All rights reserved.
      </div>
    </footer>
  );
}