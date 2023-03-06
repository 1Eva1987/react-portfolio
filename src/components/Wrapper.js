import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
  return (
    <div>
      <h1>My projects</h1>
      <div className="wrapper">{props.children}</div>
    </div>
  );
}
export default Wrapper;
