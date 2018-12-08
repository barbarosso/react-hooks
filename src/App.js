import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import MousePosition from "./MousePosition";
import AdvancedCounter from "./AdvancedCounter";
import Names from "./Names";
import UseRefInput from "./UseRefInput";
import MemoizeExample from "./MemoizeExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React hooks</h1>
        <Counter />
        {/* <MousePosition /> */}
        {/* <AdvancedCounter /> */}
        <Names />
        {/* <UseRefInput /> */}
        {/* <MemoizeExample /> */}
        {/* <ContextExample /> */}
      </header>
    </div>
  );
}

export default App;

/**
 * https://reactjs.org/docs/hooks-intro.html
 * https://www.npmjs.com/package/eslint-plugin-react-hooks
 */
