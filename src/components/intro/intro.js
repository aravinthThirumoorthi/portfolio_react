import React from "react";
import "./intro.css";
import profile from "../../assests/profile.png";
import { Link } from "react-scroll";
import hire from "../../assests/hire.png";

function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span> <br />
        <span className="im">
          I'm<span className="name"> ARAVINTH THIRUMOORTHI</span>
          <br />
          Website Developer
        </span>
        <p className="intropara">
          A website developer is a professional responsible for creating,
          designing, and maintaining websites. They possess expertise in various
          programming languages, such as HTML, CSS, and JavaScript, and often
          use frameworks and tools to streamline development.
        </p>
        <Link>
          <button className="btn">
            <img src={hire} alt="hireme" className="hireimg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={profile} alt="mypic" className="mypic" />
    </section>
  );
}

export default Intro;
