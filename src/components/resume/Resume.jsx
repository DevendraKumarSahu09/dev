import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Education & Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  institution={val.institution}
                  major={val.major}
                  grade={val.grade}
                  desc={val.desc}
                />
              );
            }
            return null; // Return null if category doesn't match
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  institution={val.institution}
                  role={val.role}
                  location={val.location}
                  
                />
              );
            }
            return null; // Return null if category doesn't match
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
