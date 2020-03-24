import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Directory
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/search"
          className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
          Search
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/employee"
          className={location.pathname.includes("/employee") ? "nav-link active" : "nav-link"}>
          Employee
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;