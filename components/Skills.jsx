import React from "react";
import "@styles/skills.css";
import {
  TbBrandCpp,
  TbBrandTailwind,
  TbBrandNextjs,
  TbBrandBootstrap,
} from "react-icons/tb";
import {
  SiPhp,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiVisualstudio,
  SiLatex,
} from "react-icons/si";
import { FaReact, FaJava, FaGithub } from "react-icons/fa";
import {
  BiLogoPython,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoSpringBoot,
} from "react-icons/bi";

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-heading">
        <h1>Technologies</h1>
        <h2>I work with the following technologies and tools:</h2>
      </div>
      <div className="skill-sections">
        <div className="section">
          <div className="heading">Languages</div>
          <div className="icons">
            {[
              { name: "C++", icon: <TbBrandCpp /> },
              { name: "Python", icon: <BiLogoPython /> },
              { name: "PHP", icon: <SiPhp /> },
              { name: "Java", icon: <FaJava /> },
              { name: "JavaScript", icon: <BiLogoJavascript /> },
              { name: "TypeScript", icon: <BiLogoTypescript /> },
            ].map((item, index) => (
              <div key={index} className="m-2 flex flex-col items-center">
                <div className="icon">{item.icon}</div>
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="heading">Frameworks</div>
          <div className="icons">
            {[
              { name: "ReactJS", icon: <FaReact /> },
              { name: "NextJS", icon: <TbBrandNextjs /> },
              { name: "Django", icon: <SiDjango /> },
              { name: "SpringBoot", icon: <BiLogoSpringBoot /> },
              { name: "Tailwind CSS", icon: <TbBrandTailwind /> },
              { name: "Bootstrap", icon: <TbBrandBootstrap /> },
            ].map((item, index) => (
              <div key={index} className="m-2 flex flex-col items-center">
                <div className="icon">{item.icon}</div>
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="heading">Databases</div>
          <div className="icons">
            {[
              { name: "MySQL", icon: <SiMysql /> },
              { name: "MongoDB", icon: <SiMongodb /> },
            ].map((item, index) => (
              <div key={index} className="m-2 flex flex-col items-center">
                <div className="icon">{item.icon}</div>
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="heading">Other Tools</div>
          <div className="icons">
            {[
              { name: "GitHub", icon: <FaGithub /> },
              { name: "VSCode", icon: <SiVisualstudio /> },
              { name: "LaTex", icon: <SiLatex /> },
            ].map((item, index) => (
              <div key={index} className="m-2 flex flex-col items-center">
                <div className="icon">{item.icon}</div>
                <span className="icon-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
