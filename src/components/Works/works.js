import React from "react";
import "./works.css";
import frontend from "../../assests/frontend.jpg";
import react from "../../assests/react.png";
import java from "../../assests/java.jpg";
import flutter from "../../assests/Flutter.png";
import canva from "../../assests/canva.png";

function Works() {
  return (
    <section id="works">
      <span className="workstitle">Technology</span>
      <span className="worksdesc">
        Frontend is the user-facing part of a software application, focusing on
        design and user experience using HTML, CSS, and JavaScript. Canva is a
        graphic design platform with a user-friendly interface, allowing both
        non-designers and professionals to create visual content easily. React
        is a JavaScript library for building dynamic user interfaces,
        emphasizing component-based development and efficient updates using a
        virtual DOM. Java is a versatile, object-oriented programming language
        known for platform independence, widely used in web and mobile app
        development, as well as enterprise systems, due to its portability and
        extensive ecosystem.
      </span>
      <div className="worksimgs">
        <img src={frontend} alt="frontend" className="worksimg" />
        <img src={react} alt="react" className="worksimg" />
        <img src={java} alt="java" className="worksimg" />
        <img src={flutter} alt="flutter" className="worksimg" />
        <img src={canva} alt="canva" className="worksimg" />
      </div>
    </section>
  );
}

export default Works;
