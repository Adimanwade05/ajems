import Hero from "../../components/Hero/Hero.jsx";
import LogoMarquee from "../../components/LogoMarquee/LogoMarquee.jsx";
import FeaturesTabs from "../../components/FeaturesTabs/FeaturesTabs.jsx";
import IndustryTabs from "../../components/IndustryTabs/IndustryTabs.jsx";
import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import Counters from "../../components/Counters/Counters.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import CaseStudies from "../../components/CaseStudies/CaseStudies.jsx";
import TrialCTA from "../../components/TrialCTA/TrialCTA.jsx";
import WhyUs from "../../components/WhyUs/WhyUs.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <IndustryTabs />
      {/* <FeaturesTabs /> */}
      <Dashboard />
      {/* <Counters /> */}
      {/* <Testimonials /> */}
      <CaseStudies />
      <FAQ />
      {/* <CTA /> */}
    </>
  );
}