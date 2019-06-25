import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantList from './ParticipantList';
import STORE from './STORE';
import Stage from './Stage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticipantList participants = {STORE}/>
        <Stage />

      </div>
    );
  }
}

export default App;


