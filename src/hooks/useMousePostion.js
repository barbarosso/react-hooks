import { useState, useEffect } from "react";

export function useMousePosition() {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  function handleMouseMove(event) {
    setPositionX(event.clientX);
    setPositionY(event.clientY);
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return { positionX, positionY };
}