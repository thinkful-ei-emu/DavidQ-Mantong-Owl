import React from 'react';
import STORE from './STORE';

export default function Log(props){
  let when = new Date().toLocaleTimeString();
  return(<p>{props.name} {when}{props.action}{props.icon}</p>);
}