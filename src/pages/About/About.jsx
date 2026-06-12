import AboutHero from "../../components/About/AboutHero/AboutHero.jsx";
import RealNumbers from "../../components/About/RealNumbers/RealNumbers.jsx";
import BentoGrid from "../../components/About/BentoGrid/BentoGrid.jsx";
import TeamSection from "../../components/About/TeamSection/TeamSection.jsx";
// import FeaturesTabs from "../../components/FeaturesTabs/FeaturesTabs.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";


const aboutFaqs = [
  { q: "Who is AJEMS for?", a: "Teams of any size looking to unify CRM, ERP, HRMS, and CMS on one intelligent platform." },
  { q: "How big is the AJEMS team?", a: "We're a lean, remote-first team focused on shipping fast and listening to our community." },
  { q: "Where is AJEMS used?", a: "AJEMS powers 10M+ users across 120+ countries, from startups to enterprises." },
  { q: "How do I get support?", a: "Reach us via WhatsApp, Telegram, or email at support@ajems.com — we respond within hours." },
  { q: "How do I get support?", a: "Reach us via WhatsApp, Telegram, or email at support@ajems.com — we respond within hours." },
];

export default function About() {
  return (
    <>
      <AboutHero />
      <RealNumbers />
      {/* <FeaturesTabs /> */}
      <BentoGrid />
      <TeamSection />
      <FAQ
        title="Questions about AJEMS?"
        subtitle="Get to know who we are and how we work."
        faqs={aboutFaqs}
      />
    </>
  );
}