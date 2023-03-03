import React from "react";

function Projects(props) {
  return (
    <div className="project screenshot">
      <div>
        <img src={props.image} alt="projects image"></img>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Projects;
