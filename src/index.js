import React from "react";
import ReactDOM from "react-dom";
import Sidebar from "./Sidebar";

import "./styles.css";

// 6d8086

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox, Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>Hello CodeSandbox, Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>Hello CodeSandbox, Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>Hello CodeSandbox, Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Sidebar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
