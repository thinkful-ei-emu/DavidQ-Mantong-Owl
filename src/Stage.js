import React from 'react';
import STORE from './STORE';
import participant from './Participant';
import './Stage.css';

export default function Stage (){
 const stageParticipant = STORE.filter((pa)=>pa.onStage);
 let onStage= stageParticipant.map((pa)=> {
   return (
      <div className= "onStage" key =  {pa.id} >
       <p>{pa.name}</p>
       <img src = {pa.avatar} />
    </div>);
    }
 )
 
    return (
        <div className="Stage container col-3">
            {onStage} 
        </div>
    )
}