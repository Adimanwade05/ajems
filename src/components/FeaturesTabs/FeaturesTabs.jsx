import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FeaturesTabs.css";

import img1 from "../../assets/images/1.avif";
import img2 from "../../assets/images/2.avif";
import img3 from "../../assets/images/3.avif";

const items = [
  {
    id: "Manufacturing",
    label: "Manufacturing",
    desc: "Track production, inventory, quality control, vendors, and approvals with real-time visibility across every process.",
    img: img1,
  },
  {
    id: "Real Estate",
    label: "Real Estate",
    desc: "Centralize leads, property management, project tracking, approvals, documentation, and customer communication in one platform.",
    img: img2,
  },
  {
    id: "Information Technology",
    label: "Information Technology",
    desc: "Manage projects, support requests, employee workflows, approvals, assets, and reporting with complete operational visibility.",
    img: img3,
  },
  {
    id: "Education",
    label: "Education",
    desc: "Manage admissions, student records, staff operations, approvals, communication, and reporting through a unified system",
    img: img1,
  },
];

export default function FeaturesTabs() {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="features__card">
          {/* LEFT */}
          <div className="features__left">
            <h2 className="features__title">
              One Platform. Unlimited Industry Possibilities.
            </h2>
            <p className="features__sub">
              Manage patient records, approvals, staff workflows, compliance
              processes, and reporting through one secure and centralized
              platform.
            </p>

            <div className="features__list">
              {items.map((it, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={it.id}
                    className={`features__item ${isActive ? "is-active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <span className="features__item-label">{it.label}</span>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          className="features__item-body"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <p className="features__item-desc">{it.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="features__media">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                className="features__media-inner"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  className="features__img"
                  src={item.img}
                  alt={item.label}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
