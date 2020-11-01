import React, {Component} from "react";
import './Journey.scss';

import resume from "./images/resume.png"
import rocket from "./images/rocket.png"
import human from "./images/human-flag.png"
import phone from "./images/trophy-phone.png"
// import feet from "./images/feet.png"

import ScrollAnimation from 'react-animate-on-scroll';
import JourneyComp from './JourneyComp';

class Journey extends Component {
  container = React.createRef();
  state = {
    open: false,
  };

  render() {
    return (

      <div className="journey-container-style" id="journey">
        <div className="journey-header-style">
          Your Journey
        </div>
        <JourneyComp name="Apply"/>
        <JourneyComp name="Project"/>
        <JourneyComp name="Create"/>
        <JourneyComp name="Impress"/>

        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/XrtjBEnuRacLgyqh7">
          <button className="journey-apply-style">APPLY NOW</button>
        </a>
      </div>
    )
  }
}

export default Journey;