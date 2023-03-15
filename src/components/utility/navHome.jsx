import React from "react";
import { Link } from "react-router-dom";

function Navhome() {
    return (
        <div className="hero">
            <nav>
                <h2 className="logo">
                    Portfo<span>lio</span>
                </h2>
                <ul>
                    <Link to="/">
                        <li>
                            <a>Home</a>
                        </li>
                    </Link>
                    <li>
                        <a href="#aboutme">About Me</a>
                    </li>
                    <Link to="/projects">
                        <li>
                            <a>Projects</a>
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li>
                            <a>Contact Me</a>
                        </li>
                    </Link>
                </ul>
                <a href="/projects" className="btn">
                    Portfolio
                </a>
            </nav>
            <div className="content">
                <h4>Hello, my name is</h4>
                <h1>
                    Walter <span>Marikwa</span>
                </h1>
                <h3>I am a Data Engineer.</h3>
                <div className="newslatter">
                    <form action="https://formspree.io/waltermarikwa02@gmail.com" method="post" id="contact">
                        <input
                            type="email"
                            name="email"
                            id="mail"
                            placeholder="Enter Your Email"
                        />
                        <input type="submit" name="submit" defaultValue="Lets Start" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Navhome;
