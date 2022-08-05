import React from "react";
import "./Header.css";
import CV from "./CV";
// import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Rohit Bisht</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CV />
        {/* <HeaderSocials /> */}

        {/* <div className="me">
          <img src={me1} alt="" />
        </div> */}
        {/* <a href="#contact" className="scroll_down">
          Scroll Down
        </a> */}
      </div>
    </header>
  );
};

export default Header;
