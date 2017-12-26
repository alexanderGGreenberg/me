import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div>
        <header className="Experience-title">
          <h1 className= "App-title">What I'm up to</h1>
            <ExperienceCard 
              title = 'StartupTree'
              description = 'Built mobile app messaging platform and events feed.  I specialzed in building
              the login page and adding search functionality to the feeds.  This app is on its way to
              the app store and the will be availible at around 20 schools who requested it.'>
            </ExperienceCard>
            <ExperienceCard 
              title = 'Big Red Hacks'
              description = 'Made front end of mobile app in React Native, it was ok.  Provide dat link
              and boot it.  LOL!'>
            </ExperienceCard>
            <ExperienceCard
              title = 'CS 3410 Course Staff'
              description = 'Next semester I will be working as a TA on the CS 3410 course staff!  This is p cool
              stuff because it means I get to teach ppl how to make a processor and be so cool and stuff.  As
              always smash dat link or whateva its tite yo TITE'>
            </ExperienceCard>
        </header>      
      </div>
    );
  }
}

export default Experience;
