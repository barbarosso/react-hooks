import React, { useState, useEffect } from "react";

function SimpleComponent(props) {
  return (
    <div>
      {console.log("simple", props.message)}
      {props.message}
    </div>
  );
}

const MemoizedSimpleComponent = React.memo(SimpleComponent);

function OtherComponent(props) {
  return (
    <div>
      {console.log("other ", props.message)}
      {props.message}
    </div>
  );
}

export default function MemoizeExample() {
  const [message, setMessage] = useState("Dit is een boodschap van algemeen nut");
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <MemoizedSimpleComponent message={counter} />
      <MemoizedSimpleComponent message={message} />
      {/* <OtherComponent message={message} />
      <OtherComponent message={counter} /> */}
      <button onClick={() => setCounter(counter + 1)}>change count</button>
      <button onClick={() => setMessage(message + counter)}>change message</button>
    </div>
  );
}
