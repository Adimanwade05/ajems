import { Target, Eye } from "lucide-react";
import Reveal from "../../Common/Reveal.jsx";
import CountUp from "../../Common/CountUp.jsx";
import "./RealNumbers.css";

const stats = [
  { value: 100, suffix: "+", label: "Organizations Empowered" },
  { value: 1000, suffix: "+", label: "Business Processes Automated" },
  { value: 50, suffix: "+", label: "Custom Applications Deployed" },
];

export default function RealNumbers() {
  return (
    <section className="rn section">
      <div className="rn__glow" aria-hidden="true" />
      <div className="container">
        {/* heading */}
        <Reveal variant="blur">
          <div className="rn__head">
            <span className="rn__eyebrow">
              <span className="rn__eyebrow-dot" /> WHO WE ARE
            </span>
            <h2 className="rn__title">
              Helping Businesses Operate with Greater Clarity &amp; Control
            </h2>
            <p className="rn__subtitle">
              AJEMS empowers organizations to streamline operations, automate
              workflows, and gain complete visibility across every business
              process.
            </p>
          </div>
        </Reveal>

        {/* stats strip */}
        <Reveal variant="up" delay={0.05}>
          <div className="rn__stats">
            {stats.map((s) => (
              <div className="rn__stat" key={s.label}>
                <span className="rn__stat-num">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="rn__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* mission & vision — split cards */}
        <div className="rn__mv">
          <Reveal variant="up" delay={0.1}>
            <div className="rn__mv-card">
              <span className="rn__mv-ico">
                <Target size={22} strokeWidth={2} />
              </span>
              <h3>Our Mission</h3>
              <p>
                To help businesses eliminate operational complexity by bringing
                people, processes, and information together on a single platform
                that enables efficiency, visibility, and scalability.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.18}>
            <div className="rn__mv-card">
              <span className="rn__mv-ico">
                <Eye size={22} strokeWidth={2} />
              </span>
              <h3>Our Vision</h3>
              <p>
                To empower organizations with connected systems that simplify
                operations, improve collaboration, and drive sustainable
                business growth.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
