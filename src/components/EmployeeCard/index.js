import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2">
          <img alt={props.name} src={props.thumbnail} />
        </div>
        <div className="col-md">
          <div className="card-body">                        
            <strong>Name:</strong> {props.name}         
            <strong>&emsp;Age:</strong> {props.age}
            <strong>&emsp;Email:</strong> {props.email}
            <strong>&emsp;Occupation:</strong> {props.occupation}
            <strong>&emsp;Location:</strong> {props.location}
          </div>
        </div>
        <span onClick={() => props.openEmployee(props.id)} className="explore">
          Explore
        </span>
      </div>
    </div>
  );
}

export default EmployeeCard;