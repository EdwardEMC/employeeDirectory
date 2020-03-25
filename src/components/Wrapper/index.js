import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div style={{backgroundColor: "white"}} className="wrapper">{props.children}</div>;
}

export default Wrapper;