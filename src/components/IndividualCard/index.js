import React from "react";
import { Link, useLocation } from "react-router-dom";
import Individual from "../utils/Individual";
import "./style.css";

function IndividualCard() {
  const location = useLocation();
  let person = Individual();
  if(person[0]) {
    return (
      <div>
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Back
        </Link>
        <div>
          <img alt={person[0].name} src={person[0].image} />
        </div>
        <div>
          <div className="card-body">                        
            <strong>Name:</strong> {person[0].name}         
            <strong>Age:</strong> {person[0].age}
            <strong>Email:</strong> {person[0].email}
            <strong>Occupation:</strong> {person[0].occupation}
            <strong>Location:</strong> {person[0].location}
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