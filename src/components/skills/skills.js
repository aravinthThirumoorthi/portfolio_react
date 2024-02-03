import React from "react";
import "./skills.css";
import uiux from "../../assests/uiux.jpg";
import webdev from "../../assests/website.jpg";
import appdev from "../../assests/appdev.jpg";

function Skills() {
  return (
    <section id="skills">
      <span className="skilltitle">Skills I aquired</span> <br />
      <span className="skilldesc">
        I am a skilled and passionate designer where I have experience in
        website and app development
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={uiux} alt="uiux" className="skillimg" />
          <div className="skillbartext">
            <h2>UI/UX design</h2>
            <p>
              A UI/UX developer creates visually appealing and user-friendly
              interfaces by combining design principles with technical skills.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={webdev} alt="webdev" className="skillimg" />
          <div className="skillbartext">
            <h2>Website design</h2>
            <p>
              A website designer crafts visually engaging and functional online
              experiences by blending graphic design and coding skills.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={appdev} alt="appdev" className="skillimg" />
          <div className="skillbartext">
            <h2>App design</h2>
            <p>
              An app designer specializes in creating intuitive and visually
              pleasing interfaces for mobile applications, ensuring a seamless
              user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
