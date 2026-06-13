import AboutHero from "../../components/About/AboutHero/AboutHero.jsx";
import RealNumbers from "../../components/About/RealNumbers/RealNumbers.jsx";
import BentoGrid from "../../components/About/BentoGrid/BentoGrid.jsx";
import TeamSection from "../../components/About/TeamSection/TeamSection.jsx";
// import FeaturesTabs from "../../components/FeaturesTabs/FeaturesTabs.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";

const aboutFaqs = [
  {
    q: "Do I need technical knowledge or coding skills to use AJEMS?",
    a: "No. AJEMS is designed for business users and teams. You can create forms, workflows, dashboards, reports, and business applications without writing code.",
  },
  {
    q: "What types of business systems can be built using AJEMS?",
    a: "You can build CRM, HRMS, ERP, inventory management, approval workflows, project management, vendor management, compliance systems, and other custom business applications tailored to your processes.",
  },
  {
    q: "Can AJEMS be customized for different industries?",
    a: "Yes. AJEMS is highly flexible and can be configured for industries such as healthcare, manufacturing, real estate, education, IT services, construction, and many others.",
  },
  {
    q: "Can I try AJEMS before purchasing?",
    a: "Absolutely. AJEMS offers a free 14-day trial, allowing you to explore the platform, build your first application, and evaluate how it fits your business requirements before making a decision.",
  },
  {
    q: "How quickly can I get started with AJEMS?",
    a: "Most businesses can start creating forms, workflows, and dashboards within a few hours. Depending on complexity, complete business systems can be deployed in days instead of months.",
  },
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
        title="Questions Before You Switch? We've Got Answers."
        subtitle="See how AJEMS helps businesses simplify operations, automate processes, and grow without complexity."
        faqs={aboutFaqs}
      />
    </>
  );
}
