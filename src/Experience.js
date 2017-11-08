import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

class Experience extends Component {
  render() {
    return (
      <div>
        <header className="Experience-title">
          <h1 className= "App-title">What I Build</h1>
            <ExperienceCard 
              title = 'StartupTree'
              description = 'Built mobile app messaging platform and events feed.  I specialzed in building
              the login page and adding search functionality to the feeds.  This app is on its way to
              the app store and the will be availible at around 20 schools who requested it.'>
            </ExperienceCard>
        </header>      
      </div>
    );
  }
}

export default Experience;
