import React from "react";
import "./Projects.css";
import { FaGithub, FaEye } from "react-icons/fa";

function Projects(props) {
  return (
    <div className="projects">
      <img className="card-img" src={props.image} alt={props.name}></img>
      <h2 className="card-title">{props.name}</h2>
      <p className="card-text">{props.description}</p>
      <div className="links">
        <a href={props.repo} target="_blank" rel="noreferrer">
          <FaGithub className="icon" />
          GitHub
        </a>
        <a href={props.live} target="_blank" rel="noreferrer">
          <FaEye className="icon" /> Live
        </a>
      </div>
    </div>
  );
}
export default Projects;
