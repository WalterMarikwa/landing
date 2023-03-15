import React from "react";
import Nav from "../utility/nav";
import Form from "./form";
import "../styles/contactStyles.css"

function Contact() {
  return (
    <div className = 'bodyCont'>
      <Nav />
      <Form />
    </div>
  );
}

export default Contact;
