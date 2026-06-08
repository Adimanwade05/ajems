import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Features from "./pages/Features/Features.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import Contact from "./pages/Contact/Contact.jsx";

export const routes = [
  { path: "/", element: <Home />, label: "Home" },
  { path: "/features", element: <Features />, label: "Features" },
  { path: "/pricing", element: <Pricing />, label: "Pricing" },
  { path: "/case-studies", element: <Home />, label: "Case Studies", hash: "case-studies" },
  { path: "/about", element: <About />, label: "About" },
  { path: "/contact", element: <Contact />, label: "Contact" },
];

/* Links shown in the navbar (order + labels per brief) */
export const navLinks = [
  
  { to: "/Solutions", label: "Solutions" },
  { to: "/Industries", label: "Industries" },
  { to: "/Pricing", label: "Pricing" },
  { to: "/Resources", label: "Resources" },
  { to: "/Contact", label: "Contact" },
];
