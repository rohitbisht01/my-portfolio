import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ROHIT
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/rohit-singh-bisht-5b672b1ba/">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/rohitbisht01"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/rohit_bisht95/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/rohitbisht95">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ROHIT All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
