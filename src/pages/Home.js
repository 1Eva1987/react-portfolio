import React from "react";
import "../pages/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hello">
        <h1>
          <span>Hello,</span>
        </h1>
        <h2>
          My name is <span>Ieva</span>
        </h2>

        <p>I'm a Junior Developer</p>
        <p>based in </p>
        <p>North Lincolnshire</p>
        <p className="question">Want to know more?</p>
        <p className="more">
          Feell free to use the <span>LINKS </span>above.
        </p>
      </div>
    </div>
  );
}

export default Home;
