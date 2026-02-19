import { Link } from "react-router-dom";
import TwinklingStars from "./TwinklingStars";

const awards = [
  {
    icon: "/assets/achivements/1.png",
    title: " UI/UX Development",
    subtitle: "easy user interface",
  },
  {
    icon: "/assets/achivements/2.png",
    title: "Software development",
    subtitle: "technologies",
  },
  {
    icon: "/assets/achivements/3.png",
    title: "Artificial Intelligence &",
    subtitle: " Machine learning",
  },
  {
    icon: "/assets/achivements/4.png",
    title: "we develop android ",
    subtitle: "applications",
  },
];

const Hero = () => {
  return (
    <section id="home" className="hero relative">
      <TwinklingStars />

      <div className="hero__content">
        <div className="hero__intro">
          <h1 className="hero__title">
            <span className="md:whitespace-nowrap">ADVANCING NEXT GENERATION</span>
            <span className="hero__title-accent">GLOBALLY.</span>
          </h1>

          <p className="hero__proof">Experienced software developers delivering innovative software and Android applications recognized worldwide.</p>

          <Link to="/contact" className="button button--primary hero__cta">
            <span className="button__content">
              <span className="button__text">Request Estimate</span>
            </span>
          </Link>
        </div>

        <ul className="achievements">
          {awards.map((award, index) => (
            <li key={award.title} className="achievements__item">
              <div className="achievements__icon-wrap">
                <img
                  src={award.icon}
                  alt=""
                  className={`achievements__icon ${index === 1 || index === 2 ? "achievements__icon--large" : ""}`}
                />
              </div>
              <p className="achievements__text">{award.title}</p>
              <p className="achievements__text">{award.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
