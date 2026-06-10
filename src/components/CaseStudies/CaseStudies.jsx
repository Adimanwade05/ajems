import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Bot,
  Zap,
  BarChart3,
  Boxes,
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";
import SectionHeading from "../Common/SectionHeading.jsx";
import "./CaseStudies.css";

import caseImg from "../../assets/images/case1.png";
import caseImg2 from "../../assets/images/case2.png";

const studies = [
  {
    tag: "Retail & CPG",
    Icon: ShoppingBag,
    metric: "25%",
    metricLabel: "Reduction in project timelines",
    variant: "gradient-blue",
    img: caseImg,
  },
  {
    tag: "Operations",
    Icon: Bot,
    quote:
      "We replaced a 15-minute screening call with an AI agent that does it in 5 minutes.",
    variant: "plain",
    img: caseImg2,
  },
  {
    tag: "Technology",
    Icon: Zap,
    metric: "40%",
    metricLabel: "Faster production time",
    variant: "gradient-blue",
    img: caseImg,
  },
  {
    tag: "Finance",
    Icon: BarChart3,
    metric: "3x",
    metricLabel: "Faster monthly reporting",
    variant: "plain",
    img: caseImg,
  },
  {
    tag: "Logistics",
    Icon: Boxes,
    metric: "60%",
    metricLabel: "Fewer manual handoffs",
    variant: "gradient-blue",
    img: caseImg,
  },
];

// 3x clone for infinite peek both sides
const loopStudies = [...studies, ...studies, ...studies];

export default function CaseStudies() {
  const trackRef = useRef(null);

  // start in the middle set so cards peek on both sides
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".case");
    if (!card) return;
    const gap = parseInt(getComputedStyle(track).columnGap || "0", 10);
    const cardW = card.offsetWidth + gap;
    track.scrollLeft = cardW * studies.length;
  }, []);

  // infinite loop — when reaching clone edges, jump back to middle set
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".case");
    if (!card) return;
    const gap = parseInt(getComputedStyle(track).columnGap || "0", 10);
    const cardW = card.offsetWidth + gap;
    const setWidth = cardW * studies.length;

    if (track.scrollLeft <= cardW * 0.5) {
      track.scrollLeft += setWidth;
    } else if (track.scrollLeft >= setWidth * 2 + cardW * 0.5) {
      track.scrollLeft -= setWidth;
    }
  };

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".case");
    const gap = parseInt(getComputedStyle(track).columnGap || "0", 10);
    const amount = (card?.offsetWidth || 360) + gap;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="cases section" id="case-studies">
      <div className="container">
        <SectionHeading
          title="The Impact of One Connected Platform"
          subtitle="Discover how businesses streamline operations, improve productivity, and achieve measurable growth with AJEMS."
        />
      </div>

      {/* full-width infinite carousel */}
      <div className="cases__viewport">
        <div className="cases__track" ref={trackRef} onScroll={handleScroll}>
          {loopStudies.map((s, i) => (
            <article className={`case case--${s.variant}`} key={i}>
              {/* content — 40% */}
              <div className="case__body">
                <span className="case__tag">
                  <s.Icon size={14} strokeWidth={2} /> {s.tag}
                </span>

                <div className="case__bottom">
                  {s.metric ? (
                    <div className="case__metric-wrap">
                      <span className="case__metric">{s.metric}</span>
                      <span className="case__metric-label">
                        {s.metricLabel}
                      </span>
                    </div>
                  ) : (
                    <div className="case__quote-wrap">
                      <Quote className="case__quote-mark" size={24} />
                      <p className="case__quote">{s.quote}</p>
                      <span className="case__author"> {s.author}</span>
                    </div>
                  )}

                  <Link to="/contact" className="case__link">
                    Read More <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* image — 60% */}
              <div className="case__media">
                <img src={s.img} alt={s.tag} />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* arrows */}
      <div className="container">
        <div className="cases__controls">
          <button
            className="cases__arrow"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className="cases__arrow"
            onClick={() => scrollByCard(1)}
            aria-label="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
