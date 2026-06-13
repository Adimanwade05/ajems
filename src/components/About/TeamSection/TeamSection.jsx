import { FaXTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import Reveal from "../../Common/Reveal.jsx";
import img1 from "../../../assets/images/team.jpg";
import "./TeamSection.css";

const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    bio: "Believes every business deserves software that just works — without the complexity.",
    img: img1,
    dot: "#f5a623",
  },
  {
    name: "Priya Nair",
    role: "Chief Product Officer",
    bio: "Obsessed with details. Believes great design is invisible until you take it away.",
    img: img1,
    dot: "#6c5ce7",
  },
  {
    name: "Rohan Mehta",
    role: "Head of Engineering",
    bio: "Ships fast, breaks nothing. Building systems that scale with zero drama.",
    img: img1,
    dot: "#e84393",
  },
  {
    name: "Sara Khan",
    role: "Head of Customer Success",
    bio: "Turns every support ticket into a relationship. Customer-first, always.",
    img: img1,
    dot: "#00b894",
  },
];

export default function TeamSection() {
  return (
    <section className="team section">
      <div className="container">
        <Reveal variant="blur">
          <div className="team__head">
            <h2 className="team__title">The Minds Behind AJEMS</h2>
            <p className="team__sub">
              Passionate professionals committed to transforming business operations.
            </p>
          </div>
        </Reveal>

        <div className="team__grid">
          {team.map((m, i) => (
            <Reveal key={m.name} variant="up" delay={i * 0.07}>
              <div className="tcard">
                <img src={m.img} alt={m.name} className="tcard__photo" />

                {/* info card — name/role/socials always visible, bio on hover */}
                <div className="tcard__info">
                  <div className="tcard__top">
                    <h3>{m.name}</h3>
                    <span
                      className="tcard__dot"
                      style={{ background: m.dot }}
                    />
                  </div>
                  <p className="tcard__role">{m.role}</p>

                  {/* bio — hover pe reveal */}
                  <p className="tcard__bio">{m.bio}</p>

                  <div className="tcard__socials">
                    <a href="#" aria-label="Twitter">
                      <FaXTwitter size={14} />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedin size={14} />
                    </a>
                    <a href="#" aria-label="Email">
                      <FaEnvelope size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
