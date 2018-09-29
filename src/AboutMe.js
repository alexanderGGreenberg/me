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
              Hey! I'm a Junior at Cornell studying Computer Science.  I care a lot about making intuitive and impactful software.  
              Last Summer I learned to create power, maintainable and efficient low-level tools at Intel.
              Over the Summer of 2017 my team and I became experts at mobile development and React Native at
              <a href="https://startuptree.co/"> StartupTree </a>.  Want to get in contact or ask a question?
              Feel free to <a href="mailto:agg73@cornell.edu">talk to me!</a>
            </p>
        </header>
      </div>
    );
  }
}

export default AboutMe;
