import React, { useState, useEffect } from "react";

export default function Names() {
  let [names, setNames] = useState([]);
  let [count, setCounter] = useState(0);

  useEffect(async () => {
    console.log("will be triggered one time");
    const response = await fetch("https://uinames.com/api/?amount=100&region=nigeria")
     const data = await response.json()
     setNames(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(count => count + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(
    () => {
      console.log("use effect only triggers when count has changed ");
      document.title = `count ${count} `;
    },
    [count]
  ); // Only re-run the effect if count changes

  return (
    <div className="App">
      <div>
        {names.map((item, i) => (
          <div key={i}>
            {item.name} {item.surname}
          </div>
        ))}
      </div>
    </div>
  );
}
