import React from "react";
import "./Portfolio.css";
import covid19 from "../../assests/covid19.png";
import amazonclone from "../../assests/amazonclone.png";

const data = [
  {
    id: 1,
    image: covid19,
    title: "Covid-19 Tracker",
    github: "https://github.com/rohitbisht01/Covid-19-Tracker",
    demo: "https://covid19-tracr.herokuapp.com/",
  },
  {
    id: 2,
    image: amazonclone,
    title: "Amazon Clone",
    github: "https://github.com/rohitbisht01/Amazon-clone",
    demo: "https://clone-ceacd.web.app/",
  },
  {
    id: 3,
    image: covid19,
    title: "Covid-19 Tracker",
    github: "https://github.com/rohitbisht01/Covid-19-Tracker",
    demo: "https://covid19-tracr.herokuapp.com/",
  },
  {
    id: 4,
    image: amazonclone,
    title: "Amazon Clone",
    github: "https://github.com/rohitbisht01/Amazon-clone",
    demo: "https://clone-ceacd.web.app/",
  },
  {
    id: 5,
    image: amazonclone,
    title: "Amazon Clone",
    github: "https://github.com/rohitbisht01/Amazon-clone",
    demo: "https://clone-ceacd.web.app/",
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
              <div className="portfolio__item__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item__cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
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
