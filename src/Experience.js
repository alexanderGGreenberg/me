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
              when = 'Summer 2017'>
            </ExperienceCard>
        </header>      
      </div>
    );
  }
}

export default Experience;
