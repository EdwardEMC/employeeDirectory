import React from "react";
import "./style.css";

function IndividualCard(props) {
  return (
    <div>
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
        {/* <span onClick={() => props.backToDirectory(props.id)} className="back">
          Back
        </span> */}
    </div>
  );
}

export default IndividualCard;