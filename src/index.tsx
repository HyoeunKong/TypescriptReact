import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const plus = (a: string, b: string) => a + b;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
