import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, backgroundColor }) {
  return (
  <div 
    className="child" 
    style={{ backgroundColor: backgroundColor }} 
    onClick={() => onChangeColor(() => getRandomColor())}
  />
  )
}

export default Child;
