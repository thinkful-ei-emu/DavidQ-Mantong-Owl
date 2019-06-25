import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantList from './ParticipantList';
import STORE from './STORE';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticipantList participants = {STORE}/>

      </div>
    );
  }
}

export default App;


