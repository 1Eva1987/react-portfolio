import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="projects">
      <div>
        <img src={props.image} alt={props.name}></img>
      </div>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Projects;
