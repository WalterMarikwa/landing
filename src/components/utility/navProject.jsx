import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navproject() {
    return (
        <div className="background">
            <nav>
                <h2 className="logo">
                    Portfo<span>lio</span>
                </h2>
                <ul>
                    <Link to="/">
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </Link>
                    <li>
                        <a href="/#aboutme">About Me</a>
                    </li>
                    <Link to="/projects">
                        <li>
                            <a href="/projects">Projects</a>
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li>
                            <a href="/contact">Contact Me</a>
                        </li>
                    </Link>
                </ul>
                <a href="/resume" className="btn">
                    Resume
                </a>
            </nav>
        </div>
    );
}

export default Navproject;
