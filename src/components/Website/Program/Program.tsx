import React from "react";
import colleges from "./images/colleges.png"
import collab from "./images/collab.png"
import free from "./images/free.png"
import globe from "./images/globe.png"

import ScrollAnimation from 'react-animate-on-scroll';

import "./Program.scss";
import ProgramComp from './ProgramComp';
function Program() {
  return (
    
    <div className="program-container-style" id="program">
      <div className="program-header-style">
        Our Program
      </div>
      <ProgramComp name="Experience"/>
      <ProgramComp name="Slingshot"/>
      <ProgramComp name="Learn"/>
      <ProgramComp name="Join"/>
      
    </div>
  )
}

export default Program;
