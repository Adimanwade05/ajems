import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";
import PageHero from "../../components/Common/PageHero.jsx";
import Reveal from "../../components/Common/Reveal.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import "./Pricing.css";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    tagline: "Perfect for individuals and small teams",
    features: [
      "Lead & contact management",
      "Basic sales pipeline",
      "Limited contacts",
      "Basic email tracking",
      "Basic communication",
      "Task & reminder scheduling",
    ],
    cta: "Select plan",
  },
  {
    name: "Standard Plan",
    price: "$6",
    tagline: "Advanced features for fast-growing teams",
    features: [
      "Enterprise-grade lead management",
      "Fully customizable pipelines",
      "Unlimited contacts",
      "Advanced email tracking",
      "Multi-channel communication",
      "Real-time performance tracking",
    ],
    cta: "Select plan",
    featured: true,
  },
  {
    name: "Business Plan",
    price: "Custom",
    tagline: "Perfect for individuals and large teams",
    features: [
      "Lead & contact management",
      "Basic sales pipeline",
      "Limited contacts",
      "Basic email tracking",
      "Basic communication",
      "Task & reminder scheduling",
    ],
    cta: "Contact sales",
  },
];

const compareCols = [
  {
    name: "Free",
    price: "$0",
    note: "per seat / month",
    cta: "Get started",
    to: "/contact",
  },
  {
    name: "Standard",
    price: "$6",
    note: "per seat / month",
    cta: "Get Pro",
    to: "/contact",
    featured: true,
  },
  {
    name: "Custom",
    price: "Quote",
    note: "on request",
    cta: "Talk to us",
    to: "/contact",
  },
];

const compareRows = [
  { label: "Comments", values: [true, true, true] },
  { label: "Cycles", values: [true, true, true] },
  { label: "Modules", values: [true, true, true] },
  { label: "Pages", values: [true, true, true] },
  { label: "Estimates", values: ["Basic", "Advanced", "Advanced"] },
  { label: "Layouts", values: [true, true, true] },
  { label: "Views", values: ["Basic", "Public + Private", "Public + Private"] },
  { label: "Publish Views", values: [false, true, true] },
  { label: "Projects", values: [true, true, true] },
  { label: "Work Items", values: [true, true, true] },
];

function Cell({ v }) {
  if (v === true)
    return <Check size={15} strokeWidth={2.5} className="cmp__check" />;
  if (v === false)
    return <Minus size={15} strokeWidth={2.5} className="cmp__dash" />;
  return <span className="cmp__text">{v}</span>;
}

const pricingFaqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade anytime. Changes apply on your next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every paid plan includes a 14-day free trial, no credit card required.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, UPI, and net banking.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 30-day money-back guarantee on annual plans.",
  },
  {
    q: "Is pricing per user?",
    a: "Yes, pricing is per seat per month. Volume discounts are available for larger teams.",
  },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Simple pricing that scales with you"
        subtitle="Start free, upgrade when you're ready. No hidden fees, cancel anytime."
      />

      {/* ===== Plan cards ===== */}
      <section className="pricing section">
        <div className="container">
          <div className="pricing__grid">
            {plans.map((p, i) => (
              <Reveal key={p.name} variant="up" delay={i * 0.08}>
                <div
                  className={`pricing__card ${p.featured ? "is-featured" : ""}`}
                >
                  {p.featured && (
                    <span className="pricing__badge">Most popular</span>
                  )}

                  <span className="pricing__ico">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4h16v16H4z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M4 10h16M10 4v16"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>

                  <h3 className="pricing__name">{p.name}</h3>
                  <p className="pricing__tagline">{p.tagline}</p>

                  <div className="pricing__price">
                    {p.price === "Custom" ? (
                      <span className="pricing__custom">Custom</span>
                    ) : (
                      <>
                        <span className="pricing__amount">{p.price}</span>
                        <span className="pricing__period">
                          / per month per user
                        </span>
                      </>
                    )}
                  </div>

                  <ul className="pricing__features">
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className="pricing__check">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`btn ${p.featured ? "btn-primary" : "btn-secondary"} pricing__btn`}
                  >
                    {p.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Feature comparison table ===== */}
      <section className="compare section">
        <div className="container">
          <Reveal variant="up">
            <div className="compare__head">
              <h2 className="compare__title">
                Features that unlock just when you need them
              </h2>
              <p className="compare__sub">
                Every plan grows with your team — compare what's included and
                pick the one that fits where you are today.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.05}>
            <div className="compare__wrap">
              <table className="compare__table">
                <thead>
                  <tr>
                    <th className="compare__feature-head">Features</th>
                    {compareCols.map((c) => (
                      <th
                        key={c.name}
                        className={`compare__col-head ${c.featured ? "is-featured" : ""}`}
                      >
                        <span className="compare__plan-name">{c.name}</span>
                        <span className="compare__plan-price">
                          {c.price} <small>{c.note}</small>
                        </span>
                        <Link
                          to={c.to}
                          className={`btn ${c.featured ? "btn-primary" : "btn-secondary"} compare__btn`}
                        >
                          {c.cta}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.label}>
                      <td className="compare__feature">{r.label}</td>
                      {r.values.map((v, i) => (
                        <td
                          key={i}
                          className={`compare__cell ${compareCols[i].featured ? "is-featured" : ""}`}
                        >
                          <Cell v={v} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ
        title="One Dashboard. Complete Business Intelligence."
        subtitle="Common questions about plans and billing."
        faqs={pricingFaqs}
      />
    </>
  );
}
