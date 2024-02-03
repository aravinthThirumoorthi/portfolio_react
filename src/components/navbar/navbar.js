import React from "react";
import "./navbar.css";
import logo from "../../assests/aravi.png";
import { Link } from "react-scroll";
import contact from "../../assests/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menucard">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menulist"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menulist"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="menulist"
        >
          Technology
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={525}
          duration={500}
          className="menulist"
        >
          Contact
        </Link>
      </div>
      <button
        className="menubtn"
        onClick={() => {
          document
            .getElementById("ctitle")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="contact me" className="menuimg" />
        Contact me
      </button>
    </nav>
  );
};

export default Navbar;
