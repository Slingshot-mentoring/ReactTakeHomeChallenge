import React, {Component} from "react";
import './HowItWorks.scss';

// import resume from "./images/resume.png"
// import rocket from "./images/rocket.png"
import human from "./images/human.png"
import catapulting from "./images/catapulting.png"
import phone from "./images/trophy-phone.png"
import join from "./images/join.png"
import brainstorm from "./images/brainstorm.png"
// import feet from "./images/feet.png"

import ScrollAnimation from 'react-animate-on-scroll';
import HowItWorksComp from './HowItWorksComp';

class Journey extends Component {
  container = React.createRef();
  state = {
    open: false,
  };

  render() {
    return (
      <div className="mentor-journey-container-style" id="how-it-works">
        <div className="mentor-journey-header-style">
          How It Works
        </div>
        <HowItWorksComp name="Join"/>
        <HowItWorksComp name="Brainstorm"/>
        <HowItWorksComp name="Incubate"/>
        <HowItWorksComp name="Slingshot"/>
        <HowItWorksComp name="And"/>
      <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/irMjdW8iLdZsKNVWA">
        <button className="mentor-journey-apply-style">JOIN TODAY</button>
      </a>
      </div>
    )
  }
}

export default Journey;