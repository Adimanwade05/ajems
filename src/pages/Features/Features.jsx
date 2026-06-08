import PageHero from "../../components/Common/PageHero.jsx";
import FeaturesTabs from "../../components/FeaturesTabs/FeaturesTabs.jsx";
import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import Reveal from "../../components/Common/Reveal.jsx";
import "./Features.css";

const grid = [
  { icon: "🧭", title: "Unified workspace", desc: "CRM, CMS and HRMS share one data model so everything stays in sync." },
  { icon: "🤖", title: "AI agents", desc: "Automate screening, scheduling and follow-ups with task-specific agents." },
  { icon: "🔗", title: "200+ integrations", desc: "Connect the tools you already use with two-way, real-time sync." },
  { icon: "📊", title: "Live dashboards", desc: "Decisions backed by data that updates the moment your business moves." },
  { icon: "🛡", title: "Enterprise security", desc: "SOC 2, SSO, granular roles and audit logs out of the box." },
  { icon: "⚡", title: "Built for speed", desc: "Sub-second loads on edge infrastructure that scales automatically." },
];

export default function Features() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="One platform for every part of your business"
        subtitle="Everything you need to run customers, content and people — without juggling a dozen tools."
      />

      <section className="featgrid section">
        <div className="container">
          <div className="featgrid__grid">
            {grid.map((f, i) => (
              <Reveal key={f.title} variant="up" delay={i * 0.06}>
                <div className="featgrid__card glass">
                  <span className="featgrid__icon">{f.icon}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturesTabs />
      <Dashboard />
      <CTA />
    </>
  );
}
