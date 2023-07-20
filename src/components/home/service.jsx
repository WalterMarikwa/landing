import React from "react";

function Service() {
    return (
        <div className="service">
            <div className="title">
                <h2>Experience</h2>
            </div>
            <div className="box">
                <div className="card">
                    <i className="fas fa-bars" />
                    <h5>Web Development</h5>
                    <div className="pra">
                        <p>
                        Developed various eCommerce web applications and components using ReactJS, ExpressJS/NodeJS, and MySQL...
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <a className="button" href="/resume">
                                Read More
                            </a>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <i className="far fa-user" />
                    <h5>Data Engineering</h5>
                    <div className="pra">
                        <p>
                        Extracting data from different source files with high volume of data sets from multiple databases using... 
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <a className="button" href="/resume">
                                Read More
                            </a>
                        </p>
                    </div>
                </div>
                <div className="card">
                    <i className="far fa-bell" />
                    <h5>Data Analytics</h5>
                    <div className="pra">
                        <p>
                        Developing, implementing, and maintaining data analytics protocols, standards, and documentation…
                        </p>
                        <p style={{ textAlign: "center" }}>
                            <a className="button" href="/resume">
                                Read More
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Service;
