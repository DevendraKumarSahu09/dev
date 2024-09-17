import React from "react";
import "./skills.css";

// Importing SVG icons
import nodejsIcon from "./../../icons/nodejs.svg";
import reactIcon from "./../../icons/react.svg";
import psIcon from "./../../icons/ps.svg";
import tailIcon from "./../../icons/tailwindcss-icon.svg";
import aiIcon from "./../../icons/ai.svg";
import cppIcon from "./../../icons/cpp.svg";
import cssIcon from "./../../icons/css.svg";
import discordIcon from "./../../icons/discord.svg";
import fontIcon from "./../../icons/fontawe.svg";
import gcloudIcon from "./../../icons/gcloud.svg";
import gitIcon from "./../../icons/git.svg";
import githubIcon from "./../../icons/github.svg";
import htmlIcon from "./../../icons/html.svg";
import javaIcon from "./../../icons/java.svg";
import jsIcon from "./../../icons/js.svg";
import mongoIcon from "./../../icons/mongo.svg";
import mysqlIcon from "./../../icons/mysql.svg";
import netlifyIcon from "./../../icons/netlify.svg";
import pyIcon from "./../../icons/py.svg";
import vercelIcon from "./../../icons/vercel.svg";
import postman from "./../../icons/postman.svg";

const toolsAndTechnologies = [
  { icon: reactIcon, name: "React" },
  { icon: nodejsIcon, name: "Node.js" },
  { icon: tailIcon, name: "Tailwind CSS" },
  { icon: githubIcon, name: "GitHub" },
  { icon: psIcon, name: "Photoshop" },
  { icon: aiIcon, name: "Illustrator" },
  { icon: pyIcon, name: "Python" },
  { icon: netlifyIcon, name: "Netlify" },
  { icon: mysqlIcon, name: "MySQL" },
  { icon: jsIcon, name: "JavaScript" },
  { icon: javaIcon, name: "Java" },
  { icon: gitIcon, name: "Git" },
  { icon: fontIcon, name: "FontAwesome" },
  { icon: gcloudIcon, name: "Google Cloud" },
  { icon: mongoIcon, name: "MongoDB" },
  { icon: cppIcon, name: "C++" },
  { icon: vercelIcon, name: "Vercel" },
  { icon: htmlIcon, name: "HTML" },
  { icon: discordIcon, name: "Discord" },
  { icon: cssIcon, name: "CSS" },
  { icon: postman, name: "Postman" },
];

const Skills = () => {
  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div>
        <h3>Tools & Technologies</h3>
        <div className="tools-tech-list">
          {toolsAndTechnologies.map((tool, index) => (
            <div key={index} className="tool-item">
              <img
                src={tool.icon}
                alt={`${tool.name} Icon`}
                className="tool-icon"
              />
              {/* <div className="tool-name">{tool.name}</div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
