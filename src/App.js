import "./App.css";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
