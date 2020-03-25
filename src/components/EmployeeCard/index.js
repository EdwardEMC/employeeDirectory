import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";
import Thumb from "../utils/Thumb";

function EmployeeCard(props) {
  const location = useLocation();
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-2 d-flex justify-content-center thumb-position">
          {Thumb(props.name, props.color)}
        </div>
        <div className="col-md">
          <div className="card-body split">
            <strong>Name:</strong> {props.name}
            <br></br>         
            <strong>Age:</strong> {props.age}
            <br></br>  
            <strong>Email:</strong> {props.email}
            <br></br>
            <strong>Occupation:</strong> {props.occupation}
            <br></br>
            <strong>Location:</strong> {props.location}
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center thumb-position">
          <Link
            to={"/employee/"+props.id}
            className={location.pathname.includes("/employee") ? "nav-link active" : "nav-link"}>
            Select
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;