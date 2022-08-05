import React from "react";
import "./About.css";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            {/* <artice className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </artice> */}
            {/* <artice className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </artice> */}
            <artice className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </artice>
          </div>
          <p className="welcome__tag">Welcome to my portfolio.</p>
          <p className="about__me">
            I am a web developer & programmer living in Uttarakhand, India. I
            make web applications, usually with React. Love Building interative
            web apps.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
