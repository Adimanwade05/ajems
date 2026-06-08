import SectionHeading from "../Common/SectionHeading.jsx";
import "./Testimonials.css";

const reviews = [
  {
    name: "Sarah Kim",
    company: "Launchlane",
    title: "Team productivity win",
    text: "Our team saves hours every week thanks to the AI agent automation built into AJEMS.",
  },
  {
    name: "Ana Moretti",
    company: "Brightlabs",
    title: "Effortless integration",
    text: "We connected all our tools seamlessly and started automating immediately. No engineers needed.",
  },
  {
    name: "David Chen",
    company: "Northpeak",
    title: "One source of truth",
    text: "CRM, content and HR finally live in one place. Reporting that used to take days now takes minutes.",
  },
  {
    name: "Priya Nair",
    company: "Vertex Retail",
    title: "Faster decisions",
    text: "Real-time dashboards mean we catch issues before they become problems. Game changer for ops.",
  },
  {
    name: "Marco Rossi",
    company: "Helio Studio",
    title: "Beautiful & fast",
    text: "Set-up took an afternoon. The interface is gorgeous and our whole team adopted it instantly.",
  },
  {
    name: "Lena Park",
    company: "Forma",
    title: "Scales with us",
    text: "We doubled headcount and AJEMS never blinked. Onboarding new people is genuinely painless now.",
  },
];

function Card({ r }) {
  return (
    <div className="tcard glass">
      <div className="tcard__head">
        <span
          className="tcard__avatar"
          style={{
            background: `linear-gradient(135deg, var(--cta-color), var(--secondary-blue))`,
          }}
        >
          {r.name.charAt(0)}
        </span>
        <div>
          <strong className="tcard__name">{r.name}</strong>
          <span className="tcard__company">{r.company}</span>
        </div>
      </div>
      <h4 className="tcard__title">{r.title}</h4>
      <p className="tcard__text">{r.text}</p>
      <div className="tcard__stars">★★★★★</div>
    </div>
  );
}

export default function Testimonials() {
  const rowA = [...reviews, ...reviews];
  const rowB = [...reviews.slice().reverse(), ...reviews.slice().reverse()];

  return (
    <section className="testimonials section">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by businesses, trusted for results"
          subtitle="Thousands of teams run their day-to-day on AJEMS. Here's what a few of them say."
        />
      </div>

      <div className="testimonials__rows">
        <div className="testimonials__row">
          <div className="testimonials__track">
            {rowA.map((r, i) => (
              <Card r={r} key={`a-${i}`} />
            ))}
          </div>
        </div>
        <div className="testimonials__row">
          <div className="testimonials__track testimonials__track--reverse">
            {rowB.map((r, i) => (
              <Card r={r} key={`b-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
