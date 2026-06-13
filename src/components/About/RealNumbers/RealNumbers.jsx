import { Link } from "react-router-dom";
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
            <span className="numbers__eyebrow">WHO WE ARE</span>
            <h2 className="numbers__title">
              Helping Businesses Operate with Greater Clarity &amp; Control
            </h2>
            <p className="numbers__subtitle">
              AJEMS empowers organizations to streamline operations, automate
              workflows, and gain complete visibility across every business
              process.
            </p>
          </div>
        </Reveal>

        <div className="numbers__grid">
          {/* blue gradient card — with logo */}
          <Reveal variant="up">
            <div className="numbers__card numbers__card--blue numbers__card--center">
              <img src={logo} alt="AJEMS" className="numbers__logo" />
              <span className="numbers__big">
                <CountUp value={100} suffix="+" />
              </span>
              <span className="numbers__label numbers__label--light">
                Organizations Empowered
              </span>
            </div>
          </Reveal>

          {/* white card — centered, no logo */}
          <Reveal variant="up" delay={0.08}>
            <div className="numbers__card numbers__card--center">
              <span className="numbers__big numbers__big--dark">
                <CountUp value={1000} suffix="+" />
              </span>
              <span className="numbers__label">
                Business Processes Automated
              </span>
            </div>
          </Reveal>

          {/* white card — centered, no logo */}
          <Reveal variant="up" delay={0.16}>
            <div className="numbers__card numbers__card--center">
              <span className="numbers__big numbers__big--dark">
                <CountUp value={50} suffix="+" />
              </span>
              <span className="numbers__label">
                Custom Applications Deployed
              </span>
            </div>
          </Reveal>
        </div>

        {/* wide mission/vision */}
        <Reveal variant="up" delay={0.1}>
          <div className="numbers__wide">
            <div className="numbers__wide-left">
              <span className="bento__chip">OUR MISSION &amp; VISION</span>
              <h3>Connecting People, Processes, and Performance</h3>
              <Link
                to="/contact"
                className="btn btn-secondary numbers__wide-btn"
              >
                Talk to us
              </Link>
            </div>
            <div className="numbers__wide-right">
              <p>
                <strong>Our Mission:</strong>
                <br /> To help businesses eliminate operational complexity by
                bringing people, processes, and information together on a single
                platform that enables efficiency, visibility, and scalability.
              </p>
              <p>
                <strong>Our Vision:</strong>
                <br /> To empower organizations with connected systems that
                simplify operations, improve collaboration, and drive
                sustainable business growth.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
