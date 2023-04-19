import React from "react";
import aboutme from "../img/aboutme.png"

function About() {
  return (
    <div id="aboutme">
<section className="about">
    <div className="main">
    <img src={aboutme} alt="Logo" />
      <div className="about-text">
        <h2>About Me</h2>
        <h5>
          Developer <span>&amp; Analytics</span>
        </h5>
        <p>
        I've always had a thing for tech. Inspired by my father who is a fullstack developer,
        From a young age I've been fascinated with the idea of creating through tech. 
        So my journey started in high school when I started self-teaching myself how to code. 
        After graduating high school, For multiple reasons college was not an option for me therefore I joined
        <a className="ank" href="https://www.roadtohire.org/about"  target="_blank" rel="noopener noreferrer"> Road to Hire </a>
         where I was taught more in depth through many different technologies and the rest is history.
        </p> 
        <a href="/contact" className="btn">
        Let's Talk
                </a>
      </div>
    </div>
  </section>
    </div>
  
  );
}

export default About;
// Let's Talk