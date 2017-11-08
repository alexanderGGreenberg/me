import React, { Component } from 'react';
import './ExperienceCard.css';

class ExperienceCard extends Component {
  render() {
    return (
      <div>
        <div className="ExperienceCard-title">
          { this.props.title }  
        </div>
        <div className = "ExperienceCard-description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
