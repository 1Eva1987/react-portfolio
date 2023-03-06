import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="projects">
      <div>
        <img className="card-img" src={props.image} alt={props.name}></img>
      </div>
      <div>
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text">{props.description}</p>
      </div>
      <a href={props.repo}>GitHub Repo</a>
      <a href={props.live}>GitHub Live</a>
    </div>
  );
}
export default Projects;
