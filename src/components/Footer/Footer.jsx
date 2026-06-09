import { Link } from "react-router-dom";
import logo from "../../assets/images/ajems_logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import "./Footer.css";

const columns = [
  {
    title: "Products",
    links: [
      { label: "About", to: "/about" },
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", to: "/about" },
      { label: "Documentation", to: "/features" },
      { label: "Changelog", to: "/features" },
      { label: "Careers", to: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", to: "/about" },
      { label: "Privacy", to: "/about" },
      { label: "Security", to: "/about" },
      { label: "Status", to: "/about" },
    ],
  },
];

const socials = [
  { Icon: FaFacebook, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaXTwitter, label: "Twitter" },
  { Icon: FaLinkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="footer__beams" />

      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="AJEMS" className="footer__logo" />
          <p className="footer__tagline">
            One Platform. Every Process. Endless Possibilities.
          </p>
          <div className="footer__socials">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="footer__social"
              >
                <Icon size={17} strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          {columns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} AJEMS. All rights reserved.</span>
          <span>Built for speed · No-code friendly</span>
        </div>
      </div>
    </footer>
  );
}
