import "./LogoMarquee.css";

import logo1 from "../../assets/images/logo1.png";
import logo2 from "../../assets/images/logo2.png";
import logo3 from "../../assets/images/logo3.png";
import logo4 from "../../assets/images/logo4.png";
import logo5 from "../../assets/images/logo5.png";


const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5
];

export default function LogoMarquee() {
  const loop = [...logos, ...logos];

  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-label">
          Trusted by Growing Businesses Across Industries
        </p>

        <div className="marquee">
          <div className="marquee__track">
            {loop.map((logo, i) => (
              <div className="marquee__logo" key={i}>
                <img src={logo} alt={`Partner Logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}