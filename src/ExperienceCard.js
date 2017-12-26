import React, { Component } from 'react';
import './ExperienceCard.css';



class ExperienceCard extends Component {
  render() {
    console.log(this.props.description)
    console.log(this.props.title)
    return (
      <div class= "wrapper">
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
