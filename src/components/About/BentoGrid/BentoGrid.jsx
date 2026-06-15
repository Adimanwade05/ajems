import { LayoutGrid, BarChart3, Users, TrendingUp, Check } from "lucide-react";
import Reveal from "../../Common/Reveal.jsx";
import logo from "../../../assets/images/ajems_logo.png";
import "./BentoGrid.css";

const modules = [
  "HR",
  "CRM",
  "Inventory",
  "Manufacturing",
  "Projects",
  "Finance",
];

export default function BentoGrid() {
  return (
    <section className="bento section">
      <div className="container">
        <Reveal variant="blur">
          <div className="bento__head">
            <span className="bento__eyebrow">WHY CHOOSE AJEMS</span>
            <h2 className="bento__title">
              Everything Your Business Needs to Operate Smarter
            </h2>
            <p className="bento__sub">
              From daily workflows to enterprise-wide operations, AJEMS helps
              organizations streamline processes and improve visibility.
            </p>
          </div>
        </Reveal>

        <div className="bento__grid">
          {/* Card 1 — tall: One Platform for Every Process (ecosystem animation) */}
          <Reveal variant="up" className="bento__cell bento__cell--tall">
            <div className="bento__card bento__card--dark">
              <LayoutGrid size={20} className="bento__ico" />
              <h3>One Platform for Every Process</h3>
              <p>
                Eliminate disconnected tools and manage operations, workflows
                and approvals from a centralized system.
              </p>

              {/* ecosystem animation */}
              <div className="eco" aria-hidden="true">
                {/* connection lines (SVG) */}
                <svg
                  className="eco__lines"
                  viewBox="0 0 300 300"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {[
                    [150, 50],
                    [255, 110],
                    [255, 215],
                    [150, 250],
                    [45, 215],
                    [45, 110],
                  ].map(([x, y], i) => (
                    <g key={i}>
                      <line
                        className="eco__line"
                        x1="150"
                        y1="150"
                        x2={x}
                        y2={y}
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                      <circle
                        className="eco__dot"
                        r="3"
                        style={{
                          animationDelay: `${i * 0.5}s`,
                          offsetPath: `path('M150 150 L${x} ${y}')`,
                        }}
                      />
                    </g>
                  ))}
                </svg>

                {/* center logo */}
                <span className="eco__center">
                  <img src={logo} alt="AJEMS" />
                </span>

                {/* module cards */}
                {modules.map((m, i) => (
                  <span
                    key={m}
                    className={`eco__mod eco__mod--${i}`}
                    style={{ animationDelay: `${i * 0.25}s` }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2 — blue: Real-Time Visibility */}
          <Reveal variant="up" delay={0.06} className="bento__cell">
            <div className="bento__card bento__card--blue">
              <span className="bento__chip">Live Insights</span>
              <h3>Real-Time Visibility</h3>
              <p>
                Access live dashboards, reports, and insights that help teams
                make faster and more informed decisions.
              </p>
              <BarChart3 size={20} className="bento__ico bento__ico--corner" />
            </div>
          </Reveal>

          {/* Card 3 — Collaboration (animated check pointers) */}
          <Reveal variant="up" delay={0.12} className="bento__cell">
            <div className="bento__card bento__card--dark">
              <Users size={18} className="bento__ico" />
              <h3>Connected Teams, Better Outcomes</h3>
              <div className="bento__tasks" aria-hidden="true">
                <span className="bento__task">
                  <span className="bento__task-check">
                    <Check size={9} strokeWidth={3} />
                  </span>
                  Break down departmental silos
                </span>
                <span className="bento__task">
                  <span className="bento__task-check">
                    <Check size={9} strokeWidth={3} />
                  </span>
                  Improve communication across teams
                </span>
                <span className="bento__task">
                  <span className="bento__task-check">
                    <Check size={9} strokeWidth={3} />
                  </span>
                  Strengthen accountability & transparency
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 4 — wide: From Operations to Strategy (animated flow) */}
          <Reveal
            variant="up"
            delay={0.18}
            className="bento__cell bento__cell--wide"
          >
            <div className="bento__card bento__card--dark bento__card--row">
              <span className="bento__flow" aria-hidden="true" />
              <div className="bento__row-left">
                <TrendingUp size={20} className="bento__ico" />
                <h3>From Operations to Strategy</h3>
                <p>
                  AJEMS helps businesses move beyond process management by
                  providing the visibility and structure to drive growth.
                </p>
              </div>

              {/* animated workflow nodes */}
              <div className="bento__diagram" aria-hidden="true">
                <div className="bento__node">
                  <LayoutGrid size={13} />
                  <span>Operate</span>
                </div>
                <span className="bento__line">
                  <span className="bento__pulse" />
                </span>
                <div className="bento__node bento__node--blue">
                  <BarChart3 size={13} />
                  <span>Analyze</span>
                </div>
                <span className="bento__line bento__line--d2">
                  <span className="bento__pulse" />
                </span>
                <div className="bento__node bento__node--teal">
                  <TrendingUp size={13} />
                  <span>Grow</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
