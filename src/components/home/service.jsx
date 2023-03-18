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
                            Every website should be built with two primary goals: Firstly, it
                            needs to work across all devices. Secondly, it needs to be fast as
                            possible.
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
                            Every website should be built with two primary goals: Firstly, it
                            needs to work across all devices. Secondly, it needs to be fast as
                            possible.
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
                            Every website should be built with two primary goals: Firstly, it
                            needs to work across all devices. Secondly, it needs to be fast as
                            possible.
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
