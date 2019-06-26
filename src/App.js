import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ParticipantList from './ParticipantList';
import STORE from './STORE';
import Stage from './Stage';
import Log from './Log';

class App extends Component {
  render() {
    return (
      <div className="App container ">
        <div className="col leftPane">
          <ParticipantList className="col-full" participants = {STORE}/>
          <Log name="David" action="hello"/>
        </div>
        <Stage />

      </div>
    );
  }
}

export default App;


