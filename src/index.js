import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [status, setStatus] = useState("Not Delivered");
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <h1>The package is: {status}.</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
      <hr/>
      <input
       type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
         />
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Artem" />
  </React.StrictMode>
);
