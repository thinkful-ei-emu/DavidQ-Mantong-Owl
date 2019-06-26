import React from 'react';
import './Participant.css';

export default function participant(props){
  return (<div className="par col-full"> {props.name} 
  <img src= {props.avatar}></img>
  {/* <p data-greenLight={props.inSession}></p>  */}
  <p>{props.onStage ? 'on stage':'left'}</p>
  
  
  </div>
  );       

}
    