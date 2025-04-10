import React from 'react';
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer who loves creating amazing and
        responsive websites. I enjoy working with JavaScript, React, and other
        modern technologies.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
