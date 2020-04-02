import React, { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={add}>버튼</button>
    </>
  );
}

export default App;
