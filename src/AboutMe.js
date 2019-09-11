import React, { Component } from 'react';
import Linkify from 'react-linkify'
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <header id="aboutme--wrapper">
          <h1>About Me</h1>
            <p id = "aboutme--par">
              Hey! I'm a Senior at Cornell studying Computer Science.  I care a lot about making intuitive and impactful software.  
              Last summer I learned to use the power of machine learning to help peole make more informed decisions.
              Now I lead the software subteam on Cornell Mars Rover. Want to get in contact or ask a question?
              Feel free to <a href="mailto:agg73@cornell.edu">talk to me!</a>
            </p>
        </header>
      </div>
    );
  }
}

export default AboutMe;
