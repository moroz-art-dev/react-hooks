import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function App() {
//   const [number, setNumber] = useReducer(
//     (number, newNumber) => number + newNumber,
//     0
//   );
//   return <h1 onClick={() => setNumber(1)}>{number}</h1>;
// }

// function App() {
//   const [checked, toggle] = useReducer((checked) => !checked, false);
//   return (
//     <div className="App">
//       <input type="checkbox" value={checked} onChange={toggle} />
//       {checked ? "checked" : "not checked"}
//     </div>
//   );
// }

const initialState = {
  message: "Hi!",
};
function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `I just said ${state.message}`,
      };
    case "wisper":
      return {
        message: "excuse me",
      };
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>YELL</button>
      <button onClick={() => dispatch({ type: "wisper" })}>wisper</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
