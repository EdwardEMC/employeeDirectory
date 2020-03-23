import React from "react";

function Dropdown(props) {

    return(
        <div className="btn-group">
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
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Filter By
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={props.filterEmployee}>Name</button>
                    <button className="dropdown-item" onClick={props.filterEmployee}>Age</button>
                    <button className="dropdown-item" onClick={props.filterEmployee}>Email</button>
                    <button className="dropdown-item" onClick={props.filterEmployee}>Occupation</button>
                    <button className="dropdown-item" onClick={props.filterEmployee}>Location</button>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;