import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function EmployeeCard(props) {
  const location = useLocation();

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
        <Link
          to={"/employee/"+props.id}
          className={location.pathname.includes("/employee") ? "nav-link active" : "nav-link"}>
          Select
        </Link>
      </div>
    </div>
  );
}

export default EmployeeCard;