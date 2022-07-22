import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useInput } from "./useInput";

function App() {
  const [titelProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titelProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input {...titelProps} type="text" placeholder="Sound..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
