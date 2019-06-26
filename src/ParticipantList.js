import React from 'react';
import Participant from './Participant';
import './ParticipantList.css';

export default function ParticipantList(props){
  const people = props.participants.map((person, index)=>{
    return (<Participant key={index} name={person.name} avatar = {person.avatar} inSession = {person.inSession} onStage={person.onStage} />); 
  });

  return(<div className="list col-full">
{people}
  </div>);
} 