import React from "react";
import "../styles/contactStyles.css"

function Form() {
  return (
    <div className="contact-container">
    <div className="row">
      <h1 className="fill">
        Fill the form.
        <br />
        It's easy.
      </h1>
      <div className="col">
        <form action="https://formspree.io/waltermarikwa02@gmail.com" method="post" id="contact"> 
          <input type="text" id="fname" name="fname" placeholder="First name" required />
          <span style={{ padding: 10 }} />
          <input type="text" id="lname" name="lname" placeholder="Last name" required />
          <br />
          <input type="email" id="email" name="email" placeholder="Email" size="30" required />
          <br />
          <br />
          <textarea type="text" id="msg" name="subject" placeholder="Write your message..." required rows={5} cols={50} />
          <br />
          <br />
          <button className="butt" name="submit" type="submit" id="contact-submit" data-submit="...Sending" value="Send Message">Send Message</button>
        </form>
      </div>
      {/* <div class="vl"></div> */}
      <div className="col">
        <h2>
          Let's talk about
          <br /> everything.
        </h2>
        <p>
        I’m an open minded individual, <br />
        I'm ready to jump on something new. <br />
        To learn more about me,
          <br /> Dont hesitate to click this link!
        </p>
        <br />
        <a className="ank" href="https://www.linkedin.com/in/walter-m-03b137175/" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  </div>
  
  );
}

export default Form;