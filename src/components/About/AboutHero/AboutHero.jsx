import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TrafficGrid from "../../Hero/TrafficGrid.jsx";
import cornerImg from "../../../assets/images/glow.svg";
import logo from "../../../assets/images/ajems_logo.png";
import "./AboutHero.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function AboutHero() {
  return (
    <section className="ahero">
      <div className="ahero__gradient" />
      <div className="ahero__lines">
        <TrafficGrid />
      </div>
      <img
        src={cornerImg}
        className="ahero__corner"
        alt=""
        aria-hidden="true"
      />
      <img
        src={cornerImg}
        className="ahero__corner ahero__corner--right"
        alt=""
        aria-hidden="true"
      />

      <div className="container ahero__content">
        <motion.span
          className="ahero__eyebrow"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <img src={logo} alt="" className="ahero__eyebrow-logo" /> Introducing
          AJEMS
        </motion.span>

        <motion.h1
          className="ahero__title"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Reimagine business with
          <br />
          <span className="text-gradient">one intelligent platform</span>
        </motion.h1>

        <motion.p
          className="ahero__subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Your on-demand business OS. Automate routine work, streamline
          decisions, and free your team to focus on what matters most.
        </motion.p>

        <motion.div
          className="ahero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <Link to="/contact" className="btn btn-primary">
            Get in touch
          </Link>
          <Link to="/features" className="btn btn-secondary">
            View features
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
