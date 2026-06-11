import { motion } from "framer-motion";
import cornerImg from "../../assets/images/glow.svg";
import "./PageHero.css";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="pagehero">
      <div className="pagehero__glow anim-glow" />

      {/* animated corner accents */}
      <img src={cornerImg} className="pagehero__corner pagehero__corner--left" alt="" aria-hidden="true" />
      <img src={cornerImg} className="pagehero__corner pagehero__corner--right" alt="" aria-hidden="true" />

      <div className="container pagehero__inner">
        {eyebrow && (
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          className="pagehero__title"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="pagehero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}