import React from "react";
import Navhome from "../utility/navHome";
import About from "../home/about";
import Service from "../home/service";
import ContactHome from "../home/contactComp";
// import Footer from "../utility/footer";
import "../styles/styles.css"

export default function Home() {
    return (
        <div className="homePage">
            <Navhome /> 
            <About />
            <Service />
            <ContactHome />
            {/* <Footer /> */}
        </div>
    );
}

