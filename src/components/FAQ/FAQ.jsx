import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../Common/SectionHeading.jsx";
import "./FAQ.css";

const faqs = [
  {
    q: "What is an AI Agent?",
    a: "An AI Agent is a task-specific assistant that automates workflows like scheduling, content creation and data processing — without requiring any code.",
  },
  {
    q: "Do I need technical skills to use an agent?",
    a: "Not at all. AJEMS is built no-code first. You configure agents with a visual builder, and templates get you running in minutes.",
  },
  {
    q: "Can I use multiple agents at the same time?",
    a: "Yes. Run as many agents in parallel as you need. They share context across CRM, CMS and HRMS so work never falls through the cracks.",
  },
  {
    q: "How customizable are the agents?",
    a: "Fully. Adjust triggers, actions, tone and guardrails. Advanced teams can extend behaviour through our open API and webhooks.",
  },
  {
    q: "What tools do the agents integrate with?",
    a: "AJEMS ships with 200+ native connectors covering email, calendars, messaging, storage and analytics — plus anything reachable over our API.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section">
      <div className="container faq__wrap">
        <SectionHeading
         
          title="Everything You Need to Know Before You Start"
          subtitle="Explore answers about features, pricing, implementation, security, and how AJEMS fits your business needs."
        />

        <div className="faq__list">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`faq__item ${isOpen ? "is-open" : ""}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <button className="faq__q">
                  <span>{item.q}</span>
                  <span className={`faq__icon ${isOpen ? "rot" : ""}`}>
                    <span></span>
                    <span></span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq__a-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="faq__a">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
