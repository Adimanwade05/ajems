import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../Common/SectionHeading.jsx";
import "./FAQ.css";

// default FAQs (agar koi page list na bheje)
const defaultFaqs = [
  {
    q: "Do I need technical knowledge or coding skills to use AJEMS?",
    a: "No. AJEMS is designed for business users and teams. You can create forms, workflows, dashboards, reports, and business applications without writing code.",
  },
  {
    q: "What types of business systems can be built using AJEMS?",
    a: "You can build CRM, HRMS, ERP, inventory management, approval workflows, project management, vendor management, compliance systems, and other custom business applications tailored to your processes.",
  },
  {
    q: "Can AJEMS be customized for different industries?",
    a: "Yes. AJEMS is highly flexible and can be configured for industries such as healthcare, manufacturing, real estate, education, IT services, construction, and many others.",
  },
  {
    q: "Can I try AJEMS before purchasing?",
    a: "Absolutely. AJEMS offers a free 14-day trial, allowing you to explore the platform, build your first application, and evaluate how it fits your business requirements before making a decision.",
  },
  {
    q: "How quickly can I get started with AJEMS?",
    a: "Most businesses can start creating forms, workflows, and dashboards within a few hours. Depending on complexity, complete business systems can be deployed in days instead of months.",
  },
];

export default function FAQ({
  title = "Questions Before You Switch? We've Got Answers.",
  subtitle = "See how AJEMS helps businesses simplify operations, automate processes, and grow without complexity.",
  faqs = defaultFaqs,
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq section">
      <div className="container faq__wrap">
        <SectionHeading title={title} subtitle={subtitle} />

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
