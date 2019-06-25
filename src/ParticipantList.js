import React from 'react';
import Participant from './Participant';

export default function ParticipantList(props){
  const people = props.participants.map((person, index)=>{
    return (<Participant key={index} name={person.name} avatar = {person.avatar} inSession = {person.inSession} onStage={person.onStage} />); 
  });

  return(<div>
{people}
  </div>);
} 