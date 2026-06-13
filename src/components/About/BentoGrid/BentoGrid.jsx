import { Link } from "react-router-dom";
import {
  LayoutGrid,
  BarChart3,
  Users,
  TrendingUp,
  Check,
  Bot,
} from "lucide-react";
import Reveal from "../../Common/Reveal.jsx";
import img2 from "../../../assets/images/2.avif";
import "./BentoGrid.css";

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
          {/* Card 1 — tall: One Platform for Every Process */}
          <Reveal variant="up" className="bento__cell bento__cell--tall">
            <div className="bento__card bento__card--dark">
              <LayoutGrid size={20} className="bento__ico" />
              <h3>One Platform for Every Process</h3>
              <p>
                Eliminate disconnected tools and manage operations, workflows
                and approvals from a centralized system.
              </p>
              <img src={img2} alt="" className="bento__img--bottom" />
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
