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
              title = 'Cornell Mars Rover'
              description = 'This semester on the Cornell Mars Rover team I have been working
              on optimizing our Docker container creation process. My project achieves a
              speedup of 62.4 times by running a container in detached mode and attaching
              onto this container whenever a container is requested.'>
            </ExperienceCard>
            <ExperienceCard
              title = 'CS 3410 Course Staff'
              description = 'For the last two semesters I have been working as a TA on the Computer 
              System Organization and Programming (CS 3410) course staff.  CS 3410 
              covers essential topics such as processor design and pipelining, 
              virtual memory, and C programming. As a TA I hold office hours, 
              help lead a discussion section, and grade student work.'>
            </ExperienceCard>
            <ExperienceCard 
              title = 'Big Red Hacks, Fall 2017'
              description = 'At Big Red Hacks my team and I built a prototype for AnonAlert, an app
              designed for high school students allowing them to anonymously raise their hand in class.  I built
              the student frontend with React Native, which included an interface for starting a new session and
              raising your hand.'>
            </ExperienceCard>
            <ExperienceCard
              title = 'Open Source Cornell'
              description = 'Last year I joined Open Source Cornell. As 
              president, I handle the Cornell CS wiki and chair weekly meetings and
              work sessions.'>
            </ExperienceCard>
          </header>
      </div>  
    );
  }
}

export default Experience;
