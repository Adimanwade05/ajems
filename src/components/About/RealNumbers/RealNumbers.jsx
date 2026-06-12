import { Link } from "react-router-dom";
import { Layers, Boxes } from "lucide-react";
import Reveal from "../../Common/Reveal.jsx";
import CountUp from "../../Common/CountUp.jsx";
import logo from "../../../assets/images/ajems_logo.png";
import "./RealNumbers.css";

export default function RealNumbers() {
  return (
    <section className="numbers section">
      <div className="numbers__glow" aria-hidden="true" />
      <div className="container">
        <Reveal variant="blur">
          <div className="numbers__head">
            <span className="numbers__eyebrow">PLATFORM BENEFITS</span>
            <h2 className="numbers__title">
              One Platform. Endless Business Solutions.
            </h2>
            <p className="numbers__subtitle">
              AJEMS helps organizations automate workflows, centralize data, and
              manage operations from a single no-code platform.
            </p>
          </div>
        </Reveal>

        <div className="numbers__grid">
          {/* blue gradient card */}
          <Reveal variant="up">
            <div className="numbers__card numbers__card--blue numbers__card--center">
              <img src={logo} alt="AJEMS" className="numbers__logo" />
              <span className="numbers__big">
                <CountUp value={100} suffix="+" />
              </span>
              <span className="numbers__label numbers__label--light">
                Automatable business processes
              </span>
            </div>
          </Reveal>

          {/* white card */}
          <Reveal variant="up" delay={0.08}>
            <div className="numbers__card">
              <div className="numbers__stat">
                <span className="numbers__big numbers__big--dark">
                  <CountUp value={10} suffix="+" />
                </span>
                <span className="numbers__unit">industry solutions</span>
              </div>
              <div className="numbers__foot">
                <span>
                  Across HR, Manufacturing, CRM, Construction, Inventory,
                  Procurement and more.
                </span>
                <Boxes size={34} />
              </div>
            </div>
          </Reveal>

          {/* white card */}
          <Reveal variant="up" delay={0.16}>
            <div className="numbers__card">
              <div className="numbers__stat">
                <span className="numbers__big numbers__big--dark">
                  <CountUp value={1} />
                </span>
                <span className="numbers__unit">platform</span>
              </div>
              <div className="numbers__foot">
                <span>
                  Manage forms, workflows, reports, dashboards and approvals
                  from one place.
                </span>
                <Layers size={34} />
              </div>
            </div>
          </Reveal>
        </div>

        {/* wide mission/vision */}
        <Reveal variant="up" delay={0.1}>
          <div className="numbers__wide">
            <div className="numbers__wide-left">
              <span className="bento__chip">OUR MISSION &amp; VISION</span>
              <h3>Empowering Businesses Through No-Code Innovation</h3>
              <Link
                to="/contact"
                className="btn btn-secondary numbers__wide-btn"
              >
                Talk to us
              </Link>
            </div>
            <div className="numbers__wide-right">
              <p>
                <strong>Mission:</strong>
                <br /> Give organizations a flexible platform to digitize
                operations, automate workflows, and build business applications
                without coding.
              </p>
              <p>
                <strong>Vision:</strong>
                <br /> Become the leading no-code ERP platform that helps
                businesses scale faster through automation, visibility, and
                operational excellence.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
