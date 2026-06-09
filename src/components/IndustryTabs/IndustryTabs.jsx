import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./IndustryTabs.css";

import img1 from "../../assets/images/1.avif";
import img2 from "../../assets/images/2.avif";
import img3 from "../../assets/images/3.avif";
import fea1 from "../../assets/videos/fea1.mp4";

const industries = [
  {
    id: "manufacturing",
    label: "Manufacturing",
    img: img1,
    title: "Meeting Scheduler",
    sub: "Syncs impossible calendars",
  },
  {
    id: "construction",
    label: "Construction",
    img: img2,
    title: "Project Monitor",
    sub: "Surfaces hidden risks",
  },
  {
    id: "it",
    label: "IT",
    img: img3,
    title: "Vendor Research",
    sub: "Documented notes on every item",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    img: img1,
    title: "Portfolio Management",
    sub: "Track every project in one view",
  },
  {
    id: "realestate",
    label: "Real Estate",
    img: img2,
    title: "Deal Pipeline",
    sub: "Never lose a lead again",
  },
  {
    id: "education",
    label: "Education",
    video: fea1,
    title: "Operations Hub",
    sub: "Run it all from one place",
  },
];

export default function IndustryTabs() {
  const [active, setActive] = useState(0);
  const item = industries[active];

  return (
    <section className="industry section">
      <div className="container">
        <div className="industry__box">
          {/* glow accents */}
          <div className="industry__glow" />

          {/* heading */}
          <div className="industry__head">
            <h2 className="industry__title">
              One Platform. Unlimited Industry Possibilities.
            </h2>

            {/* tabs */}
            <div className="industry__tabs">
              {industries.map((it, i) => (
                <button
                  key={it.id}
                  className={`industry__tab ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {it.label}
                </button>
              ))}
            </div>
          </div>

          {/* content row */}
          {/* <div className="industry__content">
            <div className="industry__meta">
              <h3>{item.title}</h3>
              <p>{item.sub}</p>
            </div>

            <Link to="/features" className="industry__cta">
              Get Started <ArrowRight size={15} />
            </Link>
          </div>  */}

          {/* image preview */}
          <div className="industry__preview">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                className="industry__media glass"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {item.video ? (
                  <video
                    className="industry__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.img} alt={item.label} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
