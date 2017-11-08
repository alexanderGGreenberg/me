import React, { Component } from 'react';
import './ExperienceCard.css';

class ExperienceCard extends Component {
  render() {
    return (
      <div className="ExperienceCard-container">
           {this.props.title} - {this.props.when}
      </div>
    );
  }
}

export default ExperienceCard;
