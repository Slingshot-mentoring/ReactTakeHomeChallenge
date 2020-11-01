import React, {Component} from "react";
import './Journey.scss';

import resume from "./images/resume.png"
import rocket from "./images/rocket.png"
import human from "./images/human-flag.png"
import phone from "./images/trophy-phone.png"
// import feet from "./images/feet.png"

import ScrollAnimation from 'react-animate-on-scroll';

type PropsType={
    name: string;
};

class JourneyComp extends Component<PropsType>{
    constructor(props:PropsType){
        super(props);
    }
  container = React.createRef();
  state = {
    open: false,
  };

  render() {
    

      if(this.props.name === "Apply"){
      return(
        <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style" >
          
          <img className="journey-section-img-style" src={resume} alt="down arrow" />
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Apply
              </div>
            <div className="journey-section-text-style">
              Apply using this&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/XrtjBEnuRacLgyqh7">form</a>!
                &nbsp;<br />
                We'll get back if we think you'd be a great fit and set up an interview.
              </div>

          </div>
        </ScrollAnimation>
      )
        }
        else if(this.props.name === "Project"){
            return(
                

        <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style">
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Project Match
            </div>
            <div className="journey-section-text-style">
              Next, we’ll match you with one of the internship projects in Slingshot's startup Slingcubator!
            </div>
          </div>
          <img className="journey-section-img-style" src={rocket} alt="down arrow" />
          
        </ScrollAnimation>

            )
        }
        else if(this.props.name === "Create"){
            return(
                <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style">

          
          <img className="journey-section-img-style" src={human} alt="down arrow" />
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Create Impact
            </div>
            <div className="journey-section-text-style">
              Take ownership, learn, and make impactful contributions to a real-world startup.
            </div>
          </div>
        </ScrollAnimation>
            )
        }

        else if(this.props.name === "Impress"){
            return(
                <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style">
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Impress your dream schools!
            </div>
            <div className="journey-section-text-style">
              Showcase your work experience and demonstrate strong interest in CS
              to your dream schools.
            </div>
          </div>
          <img className="journey-section-img-style" src={phone} alt="down arrow" />
        </ScrollAnimation>
            )
        }
        
        
    
  }
}

export default JourneyComp;