import React, { Component } from 'react';
import './ExperienceCard.css';

class ExperienceCard extends Component {
  render() {
    return (
      <div id= "ExperienceCard-wrapper">
        <aside>
          {this.props.title}
        </aside>
        <main>
          {this.props.description}
        </main>
      </div>
     
    );
  }
}

export default ExperienceCard;
