import React from "react";
import free from "./images/free.png"
import collab from "./images/collab.png"
import superhero from "./images/superhero.png"
import connectglobe from "./images/connectearth.png"

import ScrollAnimation from 'react-animate-on-scroll';

import "./Experience.scss";
import ExperienceComp from "./ExperienceComp";

function Program() {
  return (
    
    <div className="mentor-program-container-style" id="the-experience">
      <div className="mentor-program-header-style">
        The Experience
      </div>

      <ExperienceComp name="Become"/>
      <ExperienceComp name="Mentor"/>
      <ExperienceComp name="Ideate"/>
      <ExperienceComp name="Grow"/>
    </div>
  )
}

export default Program;
