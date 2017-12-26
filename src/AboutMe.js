import React, { Component } from 'react';
import Linkify from 'react-linkify'
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <header className="AboutMe-title">
          <h1 className= "App-title">About Me</h1>
          <p className= "AboutMe-par">
            Hey! I'm a Sophmore at Cornell studying Computer Science.  I'm an overnight oats addict 
            and technology lover.  I love learning new skills, getting lost on super long walks, 
            and playing ping pong.  Last summer at <a href="https://startuptree.co/"> StartupTree </a>
            my team and I became React Native and JavaScript experts.  Now I'm trying to take my
            React Native skills and bring them to web development.  This site will be updated 
            frequently as I learn more and more React.  I'm hoping to use my website to talk
            about my projects and goals, as well as learn React.
          </p>
         
        </header>
          
      </div>


    );
  }
}

export default AboutMe;
