import React from "react";
import Nav from "../utility/nav";
import aboutme from "../img/aboutme.png"
// import { NavLink, Link } from "react-router-dom";
import '../styles/resumeStyles.css'

function Resume() {
    return (
    <div>
      <Nav />
<div className="body">
 <div className="cover">
        <div className="left_side">
          <div className="profileText">
            <div className="imgBx">
            <img src={aboutme} alt="ResumeLogo" />
            </div>
            <h2>
              Walter Marikwa
              <br />
              <span>Engineer</span>
            </h2>
          </div>
          <div className="contactInfo">
            <h3 className="title">Contact Info</h3>
            <ul>
              <li>
                <span className="icon">
                  <i className="far fa-envelope" />
                </span>
                <span className="text">
                  <a href="mailto:waltermarikwa02@gmail.com">Email me</a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-globe-americas" />
                </span>
                <span className="text">www.mywebsite.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fab fa-linkedin-in" />
                </span>
                <span className="text">
                  <a
                    href="https://www.linkedin.com/in/walter-m-03b137175/"
                    target="_blank" rel="noopener noreferrer" 
                  >
                    LinkedIn
                  </a>
                </span>
              </li>
              <li>
                <span className="icon">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <span className="text">Charlotte NC, USA</span>
              </li>
            </ul>
          </div>
          <div className="contactInfo education">
            <h3 className="title">Education</h3>
            <ul>
              <li>
                <h5>March 2022 - August 2022</h5>
                <h4>Certification in Data Analytics Boot Camp</h4>
                <h4>University of North Carolina at Charlotte</h4>
              </li>
              <li>
                <h5>January 2016 - June 2018</h5>
                <h4>Highschool Diploma</h4>
                <h4>Garinger High School</h4>
              </li>
            </ul>
          </div>
          <div className="contactInfo language">
            <h3 className="title">Languages</h3>
            <ul>
              <li>
                <span className="text">Python</span>
                <span className="percent">
                  <div style={{ width: "75%" }} />
                </span>
              </li>
              <li>
                <span className="text">JavaScript</span>
                <span className="percent">
                  <div style={{ width: "80%" }} />
                </span>
              </li>
              <li>
                <span className="text">SQL</span>
                <span className="percent">
                  <div style={{ width: "90%" }} />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_side">
          <div className="aboutInfo">
            <h2 className="title2">Profile</h2>
            <p>
              A dedicated Data Engineer with 3 years of experience in building systems
              that gather, manage, and convert raw data into usable information.
              Currently helping develop advanced healthcare data integration solutions
              for clinicians, data scientists and business analysts using multiple
              tools and programming languages.
            </p>
          </div>
          <div className="aboutInfo">
            <h2 className="title2">Experience</h2>
            <br />
            <div className="boxInfo">
              <div className="year_company">
                <h2>Atrium Health, Charlotte NC</h2>
                <span>2020 - Present</span>
              </div>
              <h4 className="title2">Associate Data Engineer</h4>
              <p>
                Atrium Health is a hospital network that provides healthcare, hope,
                and healing at more than 1400 care locations and 40 hospitals across
                NC, SC, GA, and AL.
              </p>
              <br />
              <ul>
                <li>
                  Extracting data from different source files with high volume of data
                  sets from multiple databases using SSIS ETL Mappings/SQL TSQL
                  scripts and loading into data warehouse.
                </li>
                <li>
                  Developing ETL procedures using Python to ensure conformity,
                  compliance, and lack of redundancy translates business rules into
                  functional requirements.
                </li>
                <li>
                  Works closely with Clinicians, Data Analysts, and Data Scientists to
                  develop data warehouse projects and keep business standards in
                  check.
                </li>
                <li>
                  Developing, implementing, and maintaining data analytics protocols,
                  standards, and documentation.
                </li>
              </ul>
            </div>
            <br /> <br />
            <div className="boxInfo">
              <div className="year_company">
                <h2>Road to Hire, Charlotte NC</h2>
                <span>2019 - 2020</span>
              </div>
              <h4 className="title2">Software Engineer Apprentice</h4>
              <p>
                Road to Hire is a non-profit organization designed to interrupt cycles
                of intergenerational poverty by ensuring the young people in its
                programs have access to higher education, high-earning careers and
                prosperous futures.
              </p>
              <br />
              <ul>
                <li>
                  Developed various eCommerce web applications and components using
                  ReactJS, ExpressJS/NodeJS, and MySQL.
                </li>
                <li>
                  Assisted in building custom-designed Rest APIs and implementing
                  systems architecture designs, patterns, and approaches.
                </li>
                <li>
                  Collaborated across multiple teams to write structured, tested,
                  readable, and maintainable code for different web applications.
                </li>
                <li>
                  Shadowed senior developers to gain superior developer skills such as
                  problem-solving, debugging code, unit testing, and ability to
                  research for results.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div> 
    );
}

export default Resume;
