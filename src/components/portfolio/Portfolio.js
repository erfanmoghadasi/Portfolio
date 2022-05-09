import React from "react";
import "./portfolio.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

const data = [
  {
    id: 1,
    image: img1,
    title: "Olympus Gods Landing Page",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18164749-Olympus-Gods-NFT-Landing-Page",
  },
  {
    id: 2,
    image: img2,
    title: "Funky Frogo / NFT Collection",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18168645-Funky-Frogo-NFT-Collection",
  },
  {
    id: 3,
    image: img3,
    title: "Metamorphosis or 90s",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18166592-Metamorphosis-or-90s",
  },
  {
    id: 4,
    image: img4,
    title: "Crypto Exchanger-Design",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18172644-Crypto-Exchanger-Design",
  },
  {
    id: 5,
    image: img5,
    title: "Blitz Website",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18163937-Blitz-Website",
  },
  {
    id: 6,
    image: img6,
    title: "meetings app: landing page",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/18171167-meetings-app-landing-page",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  rel="noopener noreferrer"
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
