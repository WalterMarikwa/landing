import React from "react";
import Navproject from "../utility/navProject";
import Cards from "./projectCard";
// import ProdSearch from "./prodSearch";
import "../styles/projectStyles.css";


function Projects() {
  return (
    <div>
      <Navproject />
      {/* <ProdSearch /> */}
      <Cards />
    </div>
  );
}

export default Projects;
