import React from "react";
import "./home.css";
// import Me from "../../assets/image.png";
import Me1 from "../../assets/without-bg.png";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
// import AnimatedCircle from './Circle';
//import ParticlesComponent from "./Particle";


const Home = () => {
  return (
    <section className="home container" id="home">
      {/* <ParticlesComponent id="particles" /> */}
      <div className="intro">
        
          {/* <AnimatedCircle className="animatedCircle" /> */}
          <img src={Me1} alt="Profile" className="home__img" />
      

        <h1 className="home__name">Devendra Kumar Sahu</h1>
        <span className="home__education">I'm a MERN full stack developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Contact Me
        </a>

        <ScrollDown />
      </div>

      <Shapes/>
    </section>
  );
};

export default Home;
