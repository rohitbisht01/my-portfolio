import React from "react";
import "./Experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Frontend Development */}
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text__light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text__light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text__light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>Reactjs</h4>
                <small className="text__light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Development */}
        <div className="experience__backened">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>Nodejs</h4>
                <small className="text__light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>Express</h4>
                <small className="text__light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text__light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckCircleFill className="experience__details__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text__light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
