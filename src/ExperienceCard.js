import React, { Component } from 'react';
import './ExperienceCard.css';

class ExperienceCard extends Component {
  render() {
    return (
      <div id= "experiencecard--wrapper">
        <aside>
          {this.props.title}
        </aside>
        <main id = "experiencecard--wrapper-left">
          {this.props.description}
        </main>
      </div>
     
    );
  }
}

export default ExperienceCard;
