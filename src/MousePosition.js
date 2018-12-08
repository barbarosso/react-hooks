import React from "react";
import { useMousePosition } from "./hooks/useMousePostion";

export default function MousePosition() {
  // Declare a new state variable, which we'll call "count"
  const { positionX, positionY } = useMousePosition();
  return (
    <div>
      <p>Mouse position</p>
      {positionX} - {positionY}
    </div>
  );
}
