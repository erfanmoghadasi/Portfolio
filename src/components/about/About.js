import React from "react";
import "./about.css";
import js3 from "../../assets/js3.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={js3} className='js__logo' alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>experience</h5>
              <small>* year experience</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>experience</h5>
              <small>* year experience</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>experience</h5>
              <small>* year experience</small>
            </article>
          </div>

          <p>
            Officia enim aliqua eiusmod cillum officia proident. Velit est dolor
            magna labore consectetur labore sit nostrud Lorem do fugiat
            voluptate consectetur. Occaecat eiusmod mollit velit do eiusmod ut
            magna amet. Non anim culpa aliquip ipsum consequat minim veniam
            laboris amet in nisi ex amet. Id culpa sunt aliqua enim cillum
            adipisicing veniam fugiat irure enim. Elit ea proident quis proident
            irure aliquip deserunt.
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
