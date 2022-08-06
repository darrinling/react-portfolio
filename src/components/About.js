import React from "react";
import Darrin from "../assets/images/Darrin.jpg";

const About = () => {
  return (
    <section className="content container">
      <div id="about" className="row">
        <img
          id="profile-pic"
          src={Darrin}
          alt="DarrinProfile"
          className="col"
        />
        <div className="col">
          <h2>Here's my deal:</h2>
          <p className="col" id="about-text">
            My name is Darrin and I am a full stack developer from Boulder, CO.
            My experience in development comes from a combination of self
            teaching and completing a coding boot camp at the University of
            Denver. I love to learn and am constantly trying to add to my
            skillset. When I'm not coding you will likely find me playing disc
            golf, camping, fishing, or cooking. If the weather isn't cooperating
            with outdoor activities, I love to watch movies and read science
            fiction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
