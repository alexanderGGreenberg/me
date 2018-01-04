import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 id= "Experience-title">What I'm up to</h1>
            <ExperienceCard 
              title = 'StartupTree'
              description = 'I built a mobile app messaging platform and events feed.  
              plus several feeds for events and organizations.  I also  the 
              login page and added search functionality to the app.'>
            </ExperienceCard>
            <ExperienceCard
              title = 'Cornell Mars Rover'
              description = 'This semester on the Cornell Mars Rover team I rewrote our 
              formatting script to be faster and more useful.  I used Git to format only 
              files that have been changed, and added options to format Python and C++ files 
              as well as to check for proper formatting, a feature our Travis CI tool uses.  
              My most recent project was expanding our command macro syntax to support a macro 
              command having nested lists of lists of commands, which will be executed in sequence.'>
            </ExperienceCard>
            <ExperienceCard
              title = 'CS 3410 Course Staff'
              description = 'Next semester I will be working as a TA on the Computer 
              System Organization and Programming (CS 3410) course staff.  CS 3410 
              is a fast-paced class that covers essential topics such as processor design 
              and pipelining, virtual memory and caching, MIPS assembly and C programming.  
              As a TA I will be holding office hours, helping lead a discussion section, 
              and grading student work.'>
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
              description = 'This year I joined Open Source Cornell.  Next semester, as 
              president, some of my responsibilities will be handling the website, and 
              maintaining the Cornell CS wiki.'>
            </ExperienceCard>
          </header>
      </div>  
    );
  }
}

export default Experience;
