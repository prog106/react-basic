import React, { useState } from "react";
import './AppXY.css';

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({x:0, y:0})
  return (
    <div className='container' onPointerMove={(e) => {
      // console.log(e.clientX, e.clientY);
      // setX(e.clientX);
      // setY(e.clientY);
      setPosition({x:e.clientX, y:e.clientY})
    }}>
      {/* <div className='pointer' style={{'left': x, 'top': y}}/> */}
      {/* <div className='pointer' style={{transform: `translate(${x}px, ${y}px)`}}/> */}
      <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px)`}}/>
    </div>
  );
}
