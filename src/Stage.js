import React from 'react';
import STORE from './STORE';
import participant from './Participant';
import './Stage.css';

export default function (){
 const stageParticipant = STORE.filter((pa)=>pa.onStage);
 let onStage= stageParticipant.map((pa)=> {
   return (
      <div className= "Stage" key =  {pa.id} >
       <p>{pa.name}</p>
       <img src = {pa.avatar} />
    </div>);
    }
 )
 
    return (
        <div className="Stage">
            {onStage} 
        </div>
    )
}