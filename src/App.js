import "./App.css";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import projects from "./projects.json";

class App extends React.Component {
  state = { projects };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/react-portfolio" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/projects"
              element={
                <Wrapper>
                  {this.state.projects.map((project) => {
                    return (
                      <Projects
                        image={project.image}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        repo={project.repo}
                        live={project.live}
                      />
                    );
                  })}
                </Wrapper>
              }
            ></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
