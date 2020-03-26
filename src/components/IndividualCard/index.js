import React from "react";
import { Link } from "react-router-dom";
import Individual from "../utils/Individual";
import "./style.css";

function IndividualCard() {
  let person = Individual();
  return (
    <div>
      <div className="back">
        <Link to="/" className="nav-link customLink">
          Back
        </Link>
      </div>
      <br></br>
      <div className="card bg-light">
        <br></br>
        <div className="d-flex justify-content-center">
          <img src={person[0].image} alt={person[0].name} className="img-responsive profile"/>
        </div>
        <div className="card-body text-center "> 
          <h1><strong>{person[0].name}</strong></h1>                               
          <h4><strong>Age:</strong> {person[0].age}</h4>
          <br></br>
          <h4><strong>Email:</strong> {person[0].email}</h4>
          <br></br>
          <h4><strong>Occupation:</strong> {person[0].occupation}</h4>
          <br></br>
          <h4><strong>Location:</strong> {person[0].location}</h4>
        </div>
        <button onClick={()=>{console.log("Let's just imagine it deleted alright?")}} className="delete btn-danger">
            Delete
        </button>
        <br></br>
      </div>
    </div>
  );
}

export default IndividualCard;