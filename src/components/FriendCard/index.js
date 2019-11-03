import React from "react";
import "./style.css";

function FriendCard(props) {
  
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} onClick={() => props.handleClick(props.id)} />
      </div>
      <span onClick={() => props.handleClick(props.id)} className="spin">
        
      </span>
      
    </div>
  );
}

export default FriendCard;
