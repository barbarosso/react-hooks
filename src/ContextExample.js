import React, { useContext } from "react";

export const TestContext = React.createContext();

export default function ContextExample() {
  return (
    <TestContext.Provider value={}>
      <ExtraWrapper />
    </TestContext.Provider>
  );
}

function ExtraWrapper() {
  return (
    <div>
      <Display />
    </div>
  );
}

function Display() {
  const value = useContext(TestContext);
  return <div>{value}, I am learning react hooks.</div>;
}
