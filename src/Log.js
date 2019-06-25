import React from 'react';
import STORE from './STORE';

export default function Log(props){
  let when = new Date().toLocaleTimeString();
  return(<span>{props.name} {when}{props.action}{props.icon}</span>);
}