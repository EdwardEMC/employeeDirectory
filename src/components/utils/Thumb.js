import React from "react";

function Thumb(name, color) {
  const letter = name.split("");
  return (
    <div className="thumb-box" style={{backgroundColor: color}}>
      {letter[0]}
    </div>
  )
}

export default Thumb;