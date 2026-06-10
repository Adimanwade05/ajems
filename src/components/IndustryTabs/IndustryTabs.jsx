import { useState } from "react";
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

        {/* full-width sliding track */}
        <div className="industry__viewport">
          <motion.div
            className="industry__track"
            animate={{ x: `calc(${-active * 50}% + 25%)` }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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