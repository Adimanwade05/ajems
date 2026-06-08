import Reveal from "./Reveal.jsx";
import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  return (
    <div className={`sh sh-${align}`}>
      {eyebrow && (
        <Reveal variant="up" duration={0.5}>
          <span className="section-eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal variant="blur" delay={0.05}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal variant="up" delay={0.12} duration={0.6}>
          <p className="section-subtitle">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
