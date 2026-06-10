import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./IndustryTabs.css";

import img1 from "../../assets/images/1.avif";
import img2 from "../../assets/images/2.avif";
import img3 from "../../assets/images/3.avif";
import fea1 from "../../assets/videos/fea1.mp4";

const industries = [
  { id: "manufacturing", label: "Manufacturing", img: img1 },
  { id: "it", label: "IT", img: img3 },
  { id: "healthcare", label: "Healthcare", img: img1 },
  { id: "realestate", label: "Real Estate", img: img2 },
  { id: "education", label: "Education", video: fea1 },
];

export default function IndustryTabs() {
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const tabsRef = useRef(null);

  // responsive detection
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // desktop: 50% slides + 25% offset (side peek). else: 100% + 0 (single centered)
  const slidePct = isDesktop ? 50 : 100;
  const offset = isDesktop ? 25 : 0;

  // scroll active tab into center
  useEffect(() => {
    const tabsEl = tabsRef.current;
    if (!tabsEl) return;
    const btn = tabsEl.querySelectorAll(".industry__tab")[active];
    if (btn)
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
  }, [active]);

  const renderMedia = (item) =>
    item.video ? (
      <video className="industry__video" autoPlay muted loop playsInline>
        <source src={item.video} type="video/mp4" />
      </video>
    ) : (
      <img src={item.img} alt={item.label} />
    );

  return (
    <section className="industry section">
      <div className="industry__box">
        <div className="industry__glow" />

        {/* heading + tabs */}
        <div className="container industry__head">
          <h2 className="industry__title">
            One Platform. Unlimited Industry Possibilities.
          </h2>

          <div
            className={`industry__tabs ${isDesktop ? "is-center" : ""}`}
            ref={tabsRef}
          >
            {industries.map((it, i) => (
              <button
                key={it.id}
                className={`industry__tab ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => isDesktop && setActive(i)}
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>

        {/* full-width sliding track */}
        <div className="industry__viewport">
          <motion.div
            className={`industry__track ${isDesktop ? "" : "is-single"}`}
            animate={{ x: `calc(${-active * slidePct}% + ${offset}%)` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={(e, info) => {
              if (info.offset.x < -60 && active < industries.length - 1)
                setActive(active + 1);
              else if (info.offset.x > 60 && active > 0) setActive(active - 1);
            }}
          >
            {industries.map((it, i) => (
              <div
                key={it.id}
                className={`industry__slide ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="industry__media">{renderMedia(it)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
