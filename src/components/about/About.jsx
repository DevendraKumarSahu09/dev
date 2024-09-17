import React from 'react';
import "./about.css";
// import Me from "../../assets/image.png";

import Me2 from "../../assets/dev2.jpg";
// import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me2} alt="" className="about__img" />
        {/* <div className="about__data grid"></div> */}
        <div className="about__data">
          <div className="about__info">
          {/* ▫▪▸▹◈ */}
            <div className="about__description">
            ▸ I am Devendra Sahu, a student at VIT Bhopal, studying Computer Science and Engineering with specialization in Health Informatics. I enjoy working with the MERN stack, which includes technologies like MongoDB, Express.js, React, and Node.js. <br />
              ▸ Problem-solving is my passion, and I love tackling challenges to find creative solutions. <br />
              ▸ My goal is to use my skills to make a positive impact in the field of technology and beyond.</div>
            <a href="https://drive.google.com/file/d/1d73VXcDxeGYfxsuYWldjzzAC5l2BVagE/view?usp=sharing" target='_blank' className="btn">
              My Resume
            </a>
          </div>

          {/* <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number">80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <AboutBox/> */}
    </section>
  )
}

export default About
