import PageHero from "../../components/Common/PageHero.jsx";
import Reveal from "../../components/Common/Reveal.jsx";
import Counters from "../../components/Counters/Counters.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import "./About.css";

const values = [
  { icon: "🎯", title: "Customer obsession", desc: "Every decision starts with the teams who run their day on AJEMS." },
  { icon: "🪄", title: "Simplicity wins", desc: "Powerful doesn't have to mean complicated. We sweat the details so you don't." },
  { icon: "🚀", title: "Move fast, stay solid", desc: "We ship quickly without ever compromising reliability or security." },
  { icon: "🤝", title: "Built in the open", desc: "Transparent roadmaps, honest changelogs, and a community we listen to." },
];

const timeline = [
  { year: "2021", text: "AJEMS founded with a simple idea: unify the tools businesses juggle." },
  { year: "2022", text: "Launched CRM + CMS, crossed our first 1,000 teams." },
  { year: "2023", text: "Added HRMS and shipped our first AI automation agents." },
  { year: "2024", text: "Reached 10M+ users across 120+ countries on one platform." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We're building the operating system for modern business"
        subtitle="AJEMS brings CRM, CMS and HRMS together so teams stop switching tools and start moving faster."
      />

      <section className="about section">
        <div className="container">
          <div className="about__intro">
            <Reveal variant="blur">
              <p className="about__lead">
                Businesses were drowning in disconnected software. We set out to
                fix that — one intelligent platform where customers, content and
                people finally live together, with AI handling the busywork.
              </p>
            </Reveal>
          </div>

          <div className="about__values">
            {values.map((v, i) => (
              <Reveal key={v.title} variant="up" delay={i * 0.07}>
                <div className="about__value glass">
                  <span className="about__value-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Counters />

      <section className="timeline section">
        <div className="container">
          <Reveal variant="blur">
            <h2 className="section-title centered timeline__title">
              The journey so far
            </h2>
          </Reveal>
          <div className="timeline__list">
            {timeline.map((t, i) => (
              <Reveal key={t.year} variant="up" delay={i * 0.08}>
                <div className="timeline__item glass">
                  <span className="timeline__year">{t.year}</span>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
