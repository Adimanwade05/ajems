import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FeaturesTabs.css";

import img1 from "../../assets/images/1.avif";
import img2 from "../../assets/images/2.avif";
import img3 from "../../assets/images/3.avif";

const items = [
  {
    id: "whatsapp",
    label: "From WhatsApp",
    desc: "Capture leads the moment they message you on WhatsApp — no reply goes missing.",
    img: img1,
  },
  {
    id: "instagram",
    label: "From Instagram",
    desc: "Turn DMs and story replies into qualified leads automatically.",
    img: img2,
  },
  {
    id: "website",
    label: "From your website",
    desc: "Every form fill and chat starts a conversation instantly.",
    img: img3,
  },
  {
    id: "voice",
    label: "From voice",
    desc: "Prospects call a dedicated number. Your AI agent answers, qualifies, and routes them. Every call becomes a lead.",
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
              Applications Built for Every Business Function

            </h2>
            <p className="features__sub">
              Build and manage CRM, ERP, HRMS, and CMS applications from a single no-code platform designed to automate workflows, centralize data, and help teams work smarter and faster.

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
