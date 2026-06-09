import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import cornerImg from "../../assets/images/glow.svg";
import ShowcaseFrame from "./ShowcaseFrame.jsx";
import TrafficGrid from "./TrafficGrid.jsx";
import "./Hero.css";

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

export default function Hero() {
  const scaleRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scaleRef,
    offset: ["start start", "end end"],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 0.6], [0.45, 1]);
  const scale = useSpring(scaleRaw, { stiffness: 45, damping: 20, mass: 1 });

  const radius = useTransform(scrollYProgress, [0, 0.6], [22, 14]);
  const glow = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0 20px 60px rgba(4,11,27,0.5)", "0 50px 140px rgba(29,77,215,0.4)"],
  );

  // Play video only on scroll; pause when out of view
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const vid = videoRef.current;
      if (!vid) return;
      // start playing once the showcase begins scaling up
      if (v > 0.05 && v < 0.95) {
        if (vid.paused) vid.play().catch(() => {});
      } else {
        if (!vid.paused) vid.pause();
      }
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section className="hero">
      <div className="hero__gradient" />
      <TrafficGrid />
      <img src={cornerImg} className="hero__corner" alt="" aria-hidden="true" />
      <img
        src={cornerImg}
        className="hero__corner hero__corner--right"
        alt=""
        aria-hidden="true"
      />

      <div className="container hero__content">
        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Build Business Software Without Writing
          <br />
          <span className="text-gradient">A Single Line Of Code</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Design forms, automate workflows, track performance, and scale
          operations without coding.
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <Link to="/features" className="btn btn-primary">
            Book a Demo
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            14 Day Free Trial
          </Link>
        </motion.div>
      </div>

      {/* Sticky cinematic showcase stage */}
      <div className="hero__stage" ref={scaleRef}>
        <div className="hero__sticky">
          <motion.div
            className="hero__showcase glass"
            style={{ scale, borderRadius: radius, boxShadow: glow }}
          >
            <ShowcaseFrame videoRef={videoRef} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
