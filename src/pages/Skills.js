import React from "react";
import "../pages/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div>
          <FaHtml5 />
        </div>
        <div>
          <FaCss3Alt />
        </div>
        <div>
          <FaBootstrap />
        </div>
        <div>
          <FaJsSquare />
        </div>
        <div>
          <SiJquery />
        </div>
        <div>
          <FaGithub />
        </div>
        <div>
          <TbBrandVscode />
        </div>
        <div>
          <FaNodeJs />
        </div>
        <div>
          <FaReact />
        </div>
      </div>
    </div>
  );
}
export default Skills;
