import React from "react";
import "./style.css";

function IndividualCard(props) {
  if(props.id) {
    return (
      <div>
        <span onClick={props.backToDirectory} className="back">
          Back
        </span>
        <div>
          <img alt={props.name} src={props.image} />
        </div>
        <div>
          <div className="card-body">                        
            <strong>Name:</strong> {props.name}         
            <strong>Age:</strong> {props.age}
            <strong>Email:</strong> {props.email}
            <strong>Occupation:</strong> {props.occupation}
            <strong>Location:</strong> {props.location}
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div>
        No Employee Selected
      </div>
    );
  }
}

export default IndividualCard;