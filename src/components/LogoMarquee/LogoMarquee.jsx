import "./LogoMarquee.css";

const logos = [
  "TATA",
  "Google",
  "ChatGPT",
  "WhatsApp",
  "Gemini",
  "Instagram",
  "Notion",
  "Slack",
];

export default function LogoMarquee() {
  const loop = [...logos, ...logos];
  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-label">
          Trusted by Growing Businesses Across Industries
        </p>
        <div className="marquee">
          <div className="marquee__track">
            {loop.map((name, i) => (
              <span className="marquee__logo" key={`${name}-${i}`}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
