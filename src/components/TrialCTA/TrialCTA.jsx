import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Reveal from "../Common/Reveal.jsx";
import "./TrialCTA.css";

const perks = [
  "Full access to all features",
  "No credit card required",
  "Cancel anytime",
  "Free onboarding support",
];

export default function TrialCTA() {
  return (
    <section className="trial section">
      <div className="container">
        <Reveal variant="scale">
          <div className="trial__card glass">
            <div className="trial__glow gradient-animated" />

            <div className="trial__content">
              <span className="section-eyebrow">14-day free trial</span>
              <h2 className="trial__title">
                Start free. <span className="text-gradient">Scale when ready.</span>
              </h2>
              <p className="trial__sub">
                Try every AJEMS feature free for 14 days — no credit card,
                no commitment. See why teams switch and never look back.
              </p>

              <ul className="trial__perks">
                {perks.map((p) => (
                  <li key={p}>
                    <span className="trial__check"><Check size={13} strokeWidth={3} /></span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="trial__actions">
                <Link to="/contact" className="btn btn-primary trial__btn">
                  Start 14-Day Free Trial
                </Link>
                <Link to="/pricing" className="btn btn-secondary">
                  Compare plans
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}