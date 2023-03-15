import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav() {
    return (
        <div className="background">
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
                        <a href="/#aboutme">About Me</a>
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
        </div>
    );
}

export default Nav;
