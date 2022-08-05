import React from "react";
import "./Services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Start of UI/UX design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}

        {/* Start of web deb */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="services__list">
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>

            <li>
              <AiOutlineCheck className="service__list__icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
          </ul>
        </article>
        {/* end of web dev */}
      </div>
    </section>
  );
};

export default Services;
