import React from "react";
import CTA from "./CTA";
import react4 from '../../assets/react4.png'
import HeaderSocials from "./HeaderSocials";
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Erfan Moghadasi</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
            <img className="header__img" src={react4} alt="me" />
        </div>
        <a className="scroll_down" href="#contact">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
