import { useState } from "react";
import PageHero from "../../components/Common/PageHero.jsx";
import Reveal from "../../components/Common/Reveal.jsx";
import "./Contact.css";

const infos = [
  { icon: "✉️", label: "Email", value: "hello@ajems.io" },
  { icon: "💬", label: "Live chat", value: "Available 24/7" },
  { icon: "📍", label: "Office", value: "Remote-first, worldwide" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        subtitle="Book a demo or send us a message — our team usually replies within one business day."
      />

      <section className="contact section">
        <div className="container contact__wrap">
          <Reveal variant="up" className="contact__aside">
            <h3 className="contact__aside-title">Get in touch</h3>
            <p className="contact__aside-text">
              Whether you're exploring AJEMS or ready to roll it out across your
              org, we'd love to help you map the fastest path to value.
            </p>
            <div className="contact__infos">
              {infos.map((it) => (
                <div className="contact__info glass" key={it.label}>
                  <span className="contact__info-icon">{it.icon}</span>
                  <div>
                    <span className="contact__info-label">{it.label}</span>
                    <strong className="contact__info-value">{it.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="scale" delay={0.1} className="contact__formwrap">
            <form className="contact__form glass" onSubmit={submit}>
              {sent ? (
                <div className="contact__success">
                  <span className="contact__success-check">✓</span>
                  <h3>Message sent</h3>
                  <p>Thanks, {form.name || "there"} — we'll be in touch shortly.</p>
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
                      <span>Name</span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Jane Doe"
                        required
                      />
                    </label>
                    <label>
                      <span>Email</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="jane@company.com"
                        required
                      />
                    </label>
                  </div>
                  <label>
                    <span>Company</span>
                    <input
                      type="text"
                      value={form.company}
                      onChange={update("company")}
                      placeholder="Company Inc."
                    />
                  </label>
                  <label>
                    <span>Message</span>
                    <textarea
                      rows="5"
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us what you're looking to achieve…"
                      required
                    />
                  </label>
                  <button type="submit" className="btn btn-primary contact__submit">
                    Send message
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
