import { Link } from "react-router-dom";
import { Check, Minus } from "lucide-react";
import PageHero from "../../components/Common/PageHero.jsx";
import Reveal from "../../components/Common/Reveal.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import "./Pricing.css";

const plans = [
  {
    name: "14-Day Free Trial",
    price: "$0",
    tagline:
      "Explore AJEMS and experience how a connected platform can streamline your business processes.",
    features: [
      "AI Features Included",
      "Advanced Automation Builder",
      "2 GB Storage per User",
      "10 GB Organization Storage",
      "Build Forms & Workflows",
      "Access Core Platform Features",
      "No Credit Card Required",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Standard Plan",
    price: "$5.14",
    tagline:
      "Ideal for growing teams looking to automate processes and improve operational efficiency.",
    note: "Minimum 5 Users",
    features: [
      "AI Features Included",
      "AI Flow Builder",
      "Advanced Automation Builder",
      "Unlimited Workflows",
      "5 Ready-Made Templates",
      "2 GB Storage per User",
      "10 GB Organization Storage",
      "Community Support",
    ],
    cta: "Select plan",
    featured: true,
  },
  {
    name: "Business Plan",
    price: "Custom",
    tagline:
      "Enterprise-ready capabilities for organizations requiring advanced support, scalability, and control.",
    note: "Minimum 5 Users",
    features: [
      "AI Features Included",
      "AI Flow Builder",
      "Advanced Automation Builder",
      "Unlimited Workflows",
      "5 Ready-Made Templates",
      "Community Support",
      "24/7 Priority Support",
      "Enterprise-Grade Scalability",
      "Dedicated Implementation Support",
    ],
    cta: "Contact sales",
  },
];

const compareCols = [
  {
    name: "14-Day Free Trial",
    price: "$0",
    note: "free",
    cta: "Start Free",
    to: "/contact",
  },
  {
    name: "Standard Plan",
    price: "$5.14",
    note: "per user / month",
    cta: "Get Standard",
    to: "/contact",
    featured: true,
  },
  {
    name: "Business Plan",
    price: "Custom",
    note: "on request",
    cta: "Contact sales",
    to: "/contact",
  },
];

const compareRows = [
  { label: "AI Features", values: [true, true, true] },
  { label: "Advanced Automation Builder", values: [true, true, true] },
  { label: "AI Flow Builder", values: [false, true, true] },
  { label: "Forms & Applications", values: [true, true, true] },
  {
    label: "Workflow Management",
    values: ["Limited", "Unlimited", "Unlimited"],
  },
  {
    label: "Ready-Made Templates",
    values: [false, "5 Templates", "Tailored Business Templates"],
  },
  { label: "Storage Per User", values: ["2 GB", "2 GB", "Custom"] },
  { label: "Organization Storage", values: ["10 GB", "10 GB", "Custom"] },
  { label: "Minimum Users", values: [false, "5 Users", "5 Users"] },
  { label: "Community Support", values: [false, true, true] },
  {
    label: "Priority Support",
    values: [false, false, "24/7 Priority Support"],
  },
  { label: "Custom Business Solutions", values: [false, true, true] },
  { label: "Platform Updates", values: [true, true, true] },
  { label: "Security & Access Controls", values: [true, true, true] },
  { label: "Dashboard & Reports", values: [true, true, true] },
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
    q: "Do I need technical knowledge or coding skills to use AJEMS?",
    a: "No. AJEMS is designed for business users and teams. You can create forms, workflows, dashboards, reports, and business applications without writing code.",
  },
  {
    q: "What types of business systems can be built using AJEMS?",
    a: "You can build CRM, HRMS, ERP, inventory management, approval workflows, project management, vendor management, compliance systems, and other custom business applications tailored to your processes.",
  },
  {
    q: "Can AJEMS be customized for different industries?",
    a: "Yes. AJEMS is highly flexible and can be configured for industries such as healthcare, manufacturing, real estate, education, IT services, construction, and many others.",
  },
  {
    q: "Can I try AJEMS before purchasing?",
    a: "Absolutely. AJEMS offers a free 14-day trial, allowing you to explore the platform, build your first application, and evaluate how it fits your business requirements before making a decision.",
  },
  {
    q: "How quickly can I get started with AJEMS?",
    a: "Most businesses can start creating forms, workflows, and dashboards within a few hours. Depending on complexity, complete business systems can be deployed in days instead of months.",
  },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Built for Growth. Priced for Flexibility."
        subtitle="Choose a plan that fits your business today and scales with you tomorrow."
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
                        <span className="pricing__period">/ user / month</span>
                      </>
                    )}
                  </div>

                  {p.note && <span className="pricing__note">{p.note}</span>}

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
                Compare Plans &amp; Find the Right Fit
              </h2>
              <p className="compare__sub">
                See what's included in each plan and choose the option that best
                supports your business needs.
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
        title="Questions Before You Switch? We've Got Answers."
        subtitle="See how AJEMS helps businesses simplify operations, automate processes, and grow without complexity."
        faqs={pricingFaqs}
      />
    </>
  );
}
