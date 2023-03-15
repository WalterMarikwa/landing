import React from "react";
// import {ReactDOM} from 'react-dom';
// import Nav from "./components/utility/nav";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Contact from "./components/contacts/contacts";
import Footer from "./components/utility/footer";
import Resume from "./components/utility/resume";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
