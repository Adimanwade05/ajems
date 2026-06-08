import { Link } from "react-router-dom";
import Reveal from "../Common/Reveal.jsx";
import "./CTA.css";

export default function CTA() {
  const particles = Array.from({ length: 14 });
  return (
    <section className="cta section">
      <div className="container">
        <Reveal variant="scale">
          <div className="cta__card glass">
            <div className="cta__glow gradient-animated" />
            <div className="cta__particles">
              {particles.map((_, i) => (
                <span
                  key={i}
                  style={{
                    left: `${(i * 7 + 5) % 100}%`,
                    animationDelay: `${(i % 7) * 0.6}s`,
                    animationDuration: `${5 + (i % 5)}s`,
                  }}
                />
              ))}
            </div>

            <div className="cta__content">
              <span className="section-eyebrow">Get started today</span>
              <h2 className="cta__title">Start Your Free Trial</h2>
              <p className="cta__subtitle">
                Bring CRM, CMS and HRMS together on one intelligent platform.
                No credit card required — set up in minutes.
              </p>
              <div className="cta__actions">
                <Link to="/contact" className="btn btn-primary cta__btn">
                  Start Free Trial
                </Link>
                <Link to="/pricing" className="btn btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
