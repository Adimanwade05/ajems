import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./IndustryTabs.css";

import hr from "../../assets/videos/hr.mp4";
import healthcare from "../../assets/videos/healthcare.mp4";

const industries = [
  { id: "it", label: "IT", html: "/video/it.html" },
  { id: "hr", label: "HR", video: hr },
  { id: "healthcare", label: "Healthcare", video: healthcare },
  {
    id: "manufacturing",
    label: "Manufacturing",
    html: "/video/manufacturing.html",
  },
  { id: "realestate", label: "Real Estate", html: "/video/realestate.html" },
];

export default function IndustryTabs() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const total = industries.length;

  const goTo = (i) => {
    let d = i - active;
    if (Math.abs(d) > total / 2) d = d > 0 ? d - total : d + total;
    setDir(d >= 0 ? 1 : -1);
    setActive(i);
  };

  const renderMedia = (item) => {
    if (item.html) {
      return (
        <iframe
          className="industry__frame"
          src={item.html}
          title={item.label}
          loading="lazy"
          scrolling="no"
        />
      );
    }
    if (item.video) {
      return (
        <video className="industry__video" autoPlay muted loop playsInline>
          <source src={item.video} type="video/mp4" />
        </video>
      );
    }
    if (item.img) {
      return <img src={item.img} alt={item.label} />;
    }
    return null;
  };

  const visible = [];
  for (let off = -2; off <= 2; off++) {
    const idx = (active + off + total) % total;
    visible.push({ ...industries[idx], realIndex: idx, pos: off });
  }

  return (
    <section className="industry section">
      <div className="industry__box">
        <div className="industry__glow" />

        <div className="container industry__head">
          <h2 className="industry__title">
            One Platform. Unlimited Industry Possibilities.
          </h2>

          <div className="industry__tabs">
            {industries.map((it, i) => (
              <button
                key={it.id}
                className={`industry__tab ${i === active ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                onMouseEnter={() => isDesktop && goTo(i)}
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>

        {isDesktop ? (
          <div className="industry__stage">
            {visible.map((it) => (
              <motion.div
                key={`${it.id}-${it.pos}`}
                className={`industry__card ${it.pos === 0 ? "is-active" : ""}`}
                onClick={() => goTo(it.realIndex)}
                initial={{
                  x: `${(it.pos + dir) * 100}%`,
                  scale: 0.86,
                  opacity: 0.2,
                }}
                animate={{
                  x: `${it.pos * 100}%`,
                  scale: it.pos === 0 ? 1 : 0.86,
                  opacity:
                    it.pos === 0 ? 1 : Math.abs(it.pos) === 1 ? 0.45 : 0.18,
                  zIndex: 10 - Math.abs(it.pos),
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="industry__media">{renderMedia(it)}</div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="industry__viewport">
            <motion.div
              className="industry__track is-single"
              animate={{ x: `${-active * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(e, info) => {
                if (info.offset.x < -60 && active < total - 1) goTo(active + 1);
                else if (info.offset.x > 60 && active > 0) goTo(active - 1);
              }}
            >
              {industries.map((it, i) => (
                <div
                  key={it.id}
                  className={`industry__slide ${i === active ? "is-active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  <div className="industry__media">{renderMedia(it)}</div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
