import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  Video,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import PageHero from "../../components/Common/PageHero.jsx";
import Reveal from "../../components/Common/Reveal.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import "./Contact.css";

const infos = [
  {
    Icon: MapPin,
    label: "Office",
    value: "Remote-first, serving teams worldwide",
  },
  { Icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { Icon: Mail, label: "Email", value: "support@ajems.com" },
  {
    Icon: Clock,
    label: "Support Hours",
    value: "Mon–Sat, 9:00 AM – 7:00 PM IST",
  },
];

const industriesList = [
  "Manufacturing",
  "IT & Software",
  "Healthcare",
  "Real Estate",
  "Education",
  "Construction",
  "Retail & E-commerce",
  "Other",
];

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
];

const contactFaqs = [
  {
    q: "How quickly will the AJEMS team respond?",
    a: "We typically reply within one business day, and often within a few hours during working hours.",
  },
  {
    q: "Can I book a live product demo?",
    a: "Yes. Use the Schedule a Demo section below to pick a time, and we'll walk you through AJEMS tailored to your business needs.",
  },
  {
    q: "Do you provide onboarding and migration support?",
    a: "Absolutely. Our paid plans include guided onboarding and data migration support so your team is up and running fast.",
  },
  {
    q: "What channels can I use to reach AJEMS?",
    a: "Reach us by email, WhatsApp, or Telegram — whichever is most convenient for you.",
  },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Contact() {
  /* ===== form ===== */
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  /* ===== demo calendar (dynamic) ===== */
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selDate, setSelDate] = useState(null);
  const [selTime, setSelTime] = useState(null);
  const [booked, setBooked] = useState(false);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();

  const prevMonth = () => {
    setSelDate(null);
    setSelTime(null);
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  };

  const nextMonth = () => {
    setSelDate(null);
    setSelTime(null);
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  };

  const isPast = (d) => {
    const date = new Date(viewYear, viewMonth, d);
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < t;
  };

  const isSelected = (d) =>
    selDate &&
    selDate.getDate() === d &&
    selDate.getMonth() === viewMonth &&
    selDate.getFullYear() === viewYear;

  const pickDate = (d) => {
    if (isPast(d)) return;
    setSelDate(new Date(viewYear, viewMonth, d));
    setSelTime(null);
  };

  const book = () => {
    if (selDate && selTime) setBooked(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build a Smarter Business Together"
        subtitle="Tell us about your goals and challenges, and we'll show you how AJEMS can streamline operations, automate workflows, and drive measurable results."
      />

      {/* ===== Contact form + info ===== */}
      <section className="contact section">
        <div className="container contact__wrap">
          {/* aside */}
          <Reveal variant="up" className="contact__aside">
            <h3 className="contact__aside-title">Get in Touch</h3>
            <p className="contact__aside-text">
              Whether you're just exploring AJEMS or ready to roll it out across
              your organization, our team is here to help you find the fastest
              path to value.
            </p>

            <div className="contact__infos">
              {infos.map((it) => (
                <div className="contact__info" key={it.label}>
                  <span className="contact__info-icon">
                    <it.Icon size={17} strokeWidth={2} />
                  </span>
                  <div>
                    <span className="contact__info-label">{it.label}</span>
                    <strong className="contact__info-value">{it.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* form */}
          <Reveal variant="up" delay={0.1} className="contact__formwrap">
            <form className="contact__form" onSubmit={submit}>
              {sent ? (
                <div className="contact__success">
                  <span className="contact__success-check">✓</span>
                  <h3>Inquiry Sent</h3>
                  <p>
                    Thanks, {form.name || "there"} — our team will be in touch
                    shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSent(false)}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <>
                  <div className="contact__row">
                    <label>
                      <span>Full Name *</span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jane Doe"
                        required
                      />
                    </label>
                    <label>
                      <span>Company Name *</span>
                      <input
                        type="text"
                        value={form.company}
                        onChange={update("company")}
                        placeholder="Company Inc."
                        required
                      />
                    </label>
                  </div>

                  <div className="contact__row">
                    <label>
                      <span>Email Address *</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@company.com"
                        required
                      />
                    </label>
                    <label>
                      <span>Phone Number *</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </label>
                  </div>

                  <label className="contact__select-label">
                    <span>Industry *</span>
                    <div className="contact__select">
                      <select
                        value={form.industry}
                        onChange={update("industry")}
                        required
                      >
                        <option value="" disabled>
                          Select your industry
                        </option>
                        {industriesList.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="contact__select-chev" />
                    </div>
                  </label>

                  <label>
                    <span>How Can We Help? *</span>
                    <textarea
                      rows="4"
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your goals or the processes you'd like to automate…"
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="btn btn-primary contact__submit"
                  >
                    Send Inquiry
                  </button>

                  <p className="contact__terms">
                    By submitting this form, you agree to our{" "}
                    <a href="/terms">Terms &amp; Conditions</a> and{" "}
                    <a href="/privacy">Privacy Policy</a>.
                  </p>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* ===== Schedule a Demo ===== */}
      <section className="demo section">
        <div className="container">
          <Reveal variant="up">
            <div className="demo__box">
              {/* left — info */}
              <div className="demo__left">
                <span className="demo__eyebrow">SCHEDULE A DEMO</span>
                <h2 className="demo__title">See AJEMS in Action</h2>
                <p className="demo__text">
                  Book a personalized demo and discover how AJEMS can simplify
                  operations, automate workflows, and bring your entire business
                  onto one platform.
                </p>

                <div className="demo__meta">
                  <span className="demo__meta-item">
                    <Clock size={14} /> 30 min
                  </span>
                  <span className="demo__meta-item">
                    <Video size={14} /> Google Meet
                  </span>
                  <span className="demo__meta-item">
                    <Globe size={14} /> Asia/Kolkata
                  </span>
                </div>

                <ul className="demo__points">
                  <li>Understand your business goals</li>
                  <li>Identify processes to automate</li>
                  <li>See how AJEMS fits your workflow</li>
                </ul>
              </div>

              {/* right — dynamic calendar */}
              <div className="demo__right">
                {booked ? (
                  <div className="demo__booked">
                    <span className="demo__booked-check">
                      <Check size={22} strokeWidth={3} />
                    </span>
                    <h3>Demo Booked!</h3>
                    <p>
                      {selDate?.getDate()} {MONTHS[selDate?.getMonth()]}{" "}
                      {selDate?.getFullYear()} · {selTime}
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => {
                        setBooked(false);
                        setSelDate(null);
                        setSelTime(null);
                      }}
                    >
                      Book another
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="demo__cal">
                      <div className="demo__cal-head">
                        <button
                          type="button"
                          className="demo__cal-nav"
                          onClick={prevMonth}
                          aria-label="Previous month"
                        >
                          <ChevronLeft size={15} />
                        </button>
                        <strong>
                          {MONTHS[viewMonth]} {viewYear}
                        </strong>
                        <button
                          type="button"
                          className="demo__cal-nav"
                          onClick={nextMonth}
                          aria-label="Next month"
                        >
                          <ChevronRight size={15} />
                        </button>
                      </div>

                      <div className="demo__cal-days">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                          <span key={i} className="demo__cal-day">
                            {d}
                          </span>
                        ))}
                        {Array.from({ length: firstDay }).map((_, i) => (
                          <span key={`e-${i}`} />
                        ))}
                        {Array.from(
                          { length: daysInMonth },
                          (_, i) => i + 1,
                        ).map((n) => (
                          <button
                            type="button"
                            key={n}
                            disabled={isPast(n)}
                            className={`demo__cal-date ${isSelected(n) ? "is-active" : ""}`}
                            onClick={() => pickDate(n)}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selDate && (
                      <div className="demo__slots">
                        {timeSlots.map((t) => (
                          <button
                            type="button"
                            key={t}
                            className={`demo__slot ${selTime === t ? "is-active" : ""}`}
                            onClick={() => setSelTime(t)}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      type="button"
                      className="btn btn-primary demo__btn"
                      disabled={!selDate || !selTime}
                      onClick={book}
                    >
                      <Calendar size={15} /> Book a Free Demo
                    </button>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ
        title="Contact &amp; Support FAQs"
        subtitle="Quick answers about reaching our team and getting started with AJEMS."
        faqs={contactFaqs}
      />
    </>
  );
}
