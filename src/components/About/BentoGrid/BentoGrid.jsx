import { Link } from "react-router-dom";
import { Users, Workflow, Bot, LayoutGrid, Check } from "lucide-react";
import Reveal from "../../Common/Reveal.jsx";
import img2 from "../../../assets/images/2.avif";
import "./BentoGrid.css";

export default function BentoGrid() {
  return (
    <section className="bento section">
      <div className="container">
        <Reveal variant="blur">
          <div className="bento__head">
            <h2 className="bento__title">Why Teams Choose AJEMS</h2>
            <p className="bento__sub">
              Build applications, automate workflows, and manage business
              operations from a single no-code platform designed for growing
              organizations.
            </p>
          </div>
        </Reveal>

        <div className="bento__grid">
          {/* Card 1 — tall: Enterprise Workforce Management */}
          <Reveal variant="up" className="bento__cell bento__cell--tall">
            <div className="bento__card bento__card--dark">
              <Users size={20} className="bento__ico" />
              <h3>Enterprise Workforce Management</h3>
              <p>
                Manage employees, attendance, payroll inputs, and workforce
                operations at scale.
              </p>
              <img src={img2} alt="" className="bento__img--bottom" />
            </div>
          </Reveal>

          {/* Card 2 — blue: No-Code Application Builder */}
          <Reveal variant="up" delay={0.06} className="bento__cell">
            <div className="bento__card bento__card--blue">
              <span className="bento__chip">No-Code Platform</span>
              <h3>No-Code Application Builder</h3>
              <p>
                Launch custom business applications in days instead of months.
              </p>
              <Link to="/features" className="btn btn-secondary bento__btn">
                Learn More
              </Link>
            </div>
          </Reveal>

          {/* Card 3 — AI-Driven Productivity (animated tasks) */}
          <Reveal variant="up" delay={0.12} className="bento__cell">
            <div className="bento__card bento__card--dark">
              <Bot size={18} className="bento__ico" />
              <h3>AI-Driven Productivity</h3>
              <p>
                Reduce manual effort through intelligent automation and smart
                task management.
              </p>
              {/* animated task ticks */}
              <div className="bento__tasks" aria-hidden="true">
                <span className="bento__task">
                  <span className="bento__task-check">
                    <Check size={9} strokeWidth={3} />
                  </span>
                  Lead assigned
                </span>
                <span className="bento__task">
                  <span className="bento__task-check">
                    <Check size={9} strokeWidth={3} />
                  </span>
                  Invoice sent
                </span>
                <span className="bento__task">
                  <span className="bento__task-check">
                    <Check size={9} strokeWidth={3} />
                  </span>
                  Report ready
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 4 — wide: End-to-End Process Automation (animated flow diagram) */}
          <Reveal
            variant="up"
            delay={0.18}
            className="bento__cell bento__cell--wide"
          >
            <div className="bento__card bento__card--dark bento__card--row">
              <span className="bento__flow" aria-hidden="true" />
              <div className="bento__row-left">
                <Workflow size={20} className="bento__ico" />
                <h3>End-to-End Process Automation</h3>
                <p>
                  Digitize approvals, workflows, and operations across every
                  department.
                </p>
              </div>

              {/* animated workflow nodes */}
              <div className="bento__diagram" aria-hidden="true">
                <div className="bento__node">
                  <LayoutGrid size={13} />
                  <span>Request</span>
                </div>
                <span className="bento__line">
                  <span className="bento__pulse" />
                </span>
                <div className="bento__node bento__node--blue">
                  <Check size={13} />
                  <span>Approve</span>
                </div>
                <span className="bento__line bento__line--d2">
                  <span className="bento__pulse" />
                </span>
                <div className="bento__node bento__node--teal">
                  <Bot size={13} />
                  <span>Done</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
