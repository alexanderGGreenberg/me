import React, { Component } from 'react';
import alexFace from './static/image/alexFace.svg';
import gitHub from './static/image/gitHub.svg';
import linkedin from './static/image/linkedin.svg';
import AboutMe from './AboutMe'
import './App.css';
import Experience from './Experience';
import './Experience';


class App extends Component {
  render() {
    return (
      <div id="App">
        <header id="App-header">
          <img src={alexFace} id="App-logo" alt="logo" />
          <h1 id="App-title">Alex Greenberg</h1>
        </header>
        <AboutMe>
        </AboutMe>
        <Experience>
        </Experience>
      </div>


    );
  }
}

export default App;
