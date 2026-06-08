import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/Common/PageHero.jsx";
import Reveal from "../../components/Common/Reveal.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    tagline: "For small teams getting started",
    features: [
      "Up to 3 users",
      "CRM + CMS modules",
      "5 automation agents",
      "Community support",
    ],
    cta: "Start free",
  },
  {
    name: "Growth",
    monthly: 29,
    yearly: 23,
    tagline: "For scaling teams that need more",
    features: [
      "Up to 25 users",
      "CRM + CMS + HRMS",
      "Unlimited agents",
      "200+ integrations",
      "Priority support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    yearly: null,
    tagline: "For organizations with custom needs",
    features: [
      "Unlimited users",
      "SSO & SCIM",
      "Dedicated success manager",
      "Custom SLAs",
      "On-prem options",
    ],
    cta: "Contact sales",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing that scales with you"
        subtitle="Start free, upgrade when you're ready. No hidden fees, cancel anytime."
      />

      <section className="pricing section">
        <div className="container">
          <Reveal variant="up">
            <div className="pricing__toggle">
              <button
                className={!yearly ? "is-active" : ""}
                onClick={() => setYearly(false)}
              >
                Monthly
              </button>
              <button
                className={yearly ? "is-active" : ""}
                onClick={() => setYearly(true)}
              >
                Yearly <span className="pricing__save">−20%</span>
              </button>
            </div>
          </Reveal>

          <div className="pricing__grid">
            {plans.map((p, i) => {
              const price = yearly ? p.yearly : p.monthly;
              return (
                <Reveal key={p.name} variant="up" delay={i * 0.08}>
                  <div
                    className={`pricing__card glass ${
                      p.featured ? "is-featured" : ""
                    }`}
                  >
                    {p.featured && (
                      <span className="pricing__badge">Most popular</span>
                    )}
                    <h3 className="pricing__name">{p.name}</h3>
                    <p className="pricing__tagline">{p.tagline}</p>

                    <div className="pricing__price">
                      {price === null ? (
                        <span className="pricing__custom">Custom</span>
                      ) : (
                        <>
                          <span className="pricing__amount">${price}</span>
                          <span className="pricing__period">
                            /user&nbsp;/&nbsp;mo
                          </span>
                        </>
                      )}
                    </div>

                    <Link
                      to="/contact"
                      className={`btn ${
                        p.featured ? "btn-primary" : "btn-secondary"
                      } pricing__btn`}
                    >
                      {p.cta}
                    </Link>

                    <ul className="pricing__features">
                      {p.features.map((f) => (
                        <li key={f}>
                          <span className="pricing__check">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
