import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className= "Experience-title">What I'm up to</h1>
            <ExperienceCard 
              title = 'StartupTree'
              description = 'Built mobile app messaging platform and events feed.  I built several feeds
              for events and .'>
            </ExperienceCard>
            <ExperienceCard
              title = 'CS 3410 Course Staff'
              description = 'Next semester I will be working as a TA on the Computer System Organization and
              Programming (CS 3410) course staff.  CS 3410 is a fast past class that covers essential topics
              such as processor design and pipeling, virtual memory and caching, MIPS assembly and C programming.
              As a TA I will be holding office hours, helping lead a discussion section, and grading student work.'>
            </ExperienceCard>
            <ExperienceCard 
              title = 'Big Red Hacks, Fall 2017'
              description = 'At Big Red Hacks my team and I built a prototype for AnonAlert, an app
              that designed for high school students to anonomoulsy raise their hand in class.  I built
              the student frontend with React Native, which included an interface for starting a new session and
              raising your hand'>
            </ExperienceCard>
            <ExperienceCard
              title = 'Open Source Cornell'
              description = 'This year I joined Open Source Cornell.  Next semester, as president, some of my 
              responsabilites will be handling the website, and maintaining the wiki'>
            </ExperienceCard>
        </header>  
      </div>  
    );
  }
}

export default Experience;
