import React, { Component } from 'react';
import alexFace from './alexFace.svg';
import AboutMe from './AboutMe'
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={alexFace} className="App-logo" alt="logo" />
          <h1 className="App-title">Alex Greenberg</h1>
        </header>
        <AboutMe>
        </AboutMe>
      </div>


    );
  }
}

export default App;
