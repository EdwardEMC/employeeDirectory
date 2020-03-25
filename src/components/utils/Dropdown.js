import React from "react";

function Dropdown(props) {

    return(
        <div className="btn-group d-flex justify-content-center">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={props.sortEmployee}>Name</button>
                    <button className="dropdown-item" onClick={props.sortEmployee}>Age</button>
                    <button className="dropdown-item" onClick={props.sortEmployee}>Email</button>
                    <button className="dropdown-item" onClick={props.sortEmployee}>Occupation</button>
                    <button className="dropdown-item" onClick={props.sortEmployee}>Location</button>
                </div>
            </div>
            &emsp;
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Occupation
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Occupation">All</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Occupation">CEO</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Occupation">General Manager</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Occupation">Team Manager</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Occupation">Business Analyst</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Occupation">Developer</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Occupation">Intern</button>
                </div>
            </div>
            &emsp;
            <div className="dropdown">
                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Location
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Location">All</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Location">Adelaide</button>
                    <button className="dropdown-item" onClick={props.filterEmployee} value="Location">Melbourne</button>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;