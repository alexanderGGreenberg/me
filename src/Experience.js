import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div>
        <header id= 'experience--wrapper'>
          <h1 id= "experience--title">What I'm up to</h1>
            <ExperienceCard 
              title = 'Capital One'
              description = 'I used supervised and unsupervised learning techniques
              on JIRA and survey data to help Capital One understand their data,
              and make more informed decisions.'>
            </ExperienceCard>
            <ExperienceCard
              title = 'Cornell Mars Rover'
              description = 'My big initiative this year for Cornell Mars Rover
              is having an accurate and fast ball detection system. Currently,
              I am researching and implementing the SURF algorithm.'>
            </ExperienceCard>
            <ExperienceCard 
              title = 'Intel'
              description = 'I worked with my mentor and my manager to build two tools
              over the summer. I built a finite-state machine model that calculated 
              power consumption for an I/O trace and a tool that performed high volume
              data integrity tests of a SSD.'>
            </ExperienceCard>
            <ExperienceCard 
              title = 'StartupTree'
              description = 'I built a mobile app messaging platform and events feed  
              plus several feeds for events and organizations. I also created the 
              login page and added search functionality to the app.'>
            </ExperienceCard>
            <ExperienceCard 
              title = 'Big Red Hacks, Fall 2017'
              description = 'At Big Red Hacks my team and I built a prototype for AnonAlert, an app
              designed for high school students allowing them to anonymously raise their hand in class.  I built
              the student front end with React Native.'>
            </ExperienceCard>
          </header>
      </div>  
    );
  }
}

export default Experience;
