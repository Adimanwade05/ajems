import { Zap, GitBranch, Bell, UserCheck, Clock } from "lucide-react";
import SectionHeading from "../Common/SectionHeading.jsx";
import Reveal from "../Common/Reveal.jsx";
import "./WhyUs.css";

const flowNodes = [
  { id: "lead", label: "Lead re-engaged", sub: "Triggered from every interaction", tag: "Workflow", Icon: UserCheck },
  { id: "follow", label: "Follow-up needed", sub: "Auto-scheduled in 5 minutes", tag: "Condition", Icon: Clock },
];

export default function WhyUs() {
  return (
    <section className="whyus section">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built for speed and clarity"
          subtitle="AJEMS reduces busywork, improves visibility and creates stronger relationships."
        />

        <div className="whyus__grid">
          {/* LEFT — gradient feature card */}
          <Reveal variant="up">
            <article className="whyus__left">
              <div className="whyus__left-glow" />
              <h3 className="whyus__left-title">
                Intuitive design for maximum efficiency
              </h3>
              <p className="whyus__left-sub">
                With its straightforward design, AJEMS ensures a seamless,
                no-code experience your whole team can pick up in minutes.
              </p>

              <div className="whyus__visual">
                <span className="whyus__chip whyus__chip--tl">
                  <Zap size={13} /> Capture insights
                </span>
                <span className="whyus__chip whyus__chip--tr">
                  <GitBranch size={13} /> Extract data
                </span>

                <div className="whyus__core anim-float">
                  <div className="whyus__core-grid">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} style={{ animationDelay: `${i * 0.06}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* RIGHT — glass automation flow */}
          <Reveal variant="up" delay={0.1}>
            <article className="whyus__right glass">
              <h3 className="whyus__right-title">
                Streamlined interface for optimal performance
              </h3>
              <p className="whyus__right-sub">
                Thanks to its user-centric design, AJEMS delivers an incredibly
                smooth, automated experience.
              </p>

              <div className="whyus__flow">
                {/* top trigger node */}
                <div className="whyus__node whyus__node--trigger">
                  <div className="whyus__node-head">
                    <span><Bell size={14} /> New activity detected</span>
                    <span className="whyus__node-tag">Trigger</span>
                  </div>
                  <p>Extract vital data from every interaction.</p>
                </div>

                {/* connector */}
                <div className="whyus__branch">
                  <span className="whyus__line whyus__line--down" />
                  <span className="whyus__line whyus__line--split" />
                </div>

                {/* two child nodes */}
                <div className="whyus__children">
                  {flowNodes.map((n) => (
                    <div className="whyus__node" key={n.id}>
                      <div className="whyus__node-head">
                        <span><n.Icon size={14} /> {n.label}</span>
                        <span className="whyus__node-tag">{n.tag}</span>
                      </div>
                      <p>{n.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}