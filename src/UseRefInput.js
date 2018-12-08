import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function UseRefInput() {
  let [name, setName] = useState("Sebastiaan");

  let nameRef = useRef();

  const submitButton = () => {
    setName(nameRef.current.value);
  };

  return (
    <div className="App">
      <p>{name}</p>
      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}
