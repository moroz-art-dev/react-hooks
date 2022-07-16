import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FaStar } from "react-icons/fa";

// function App() {
//   const [status, setStatus] = useState("Not Delivered");
//   const [checked, setChecked] = useState(false);
//   return (
//     <div className="App">
//       <h1>The package is: {status}.</h1>
//       <button onClick={() => setStatus("Delivered")}>Deliver</button>
//       <hr/>
//       <input
//        type="checkbox"
//         value={checked}
//         onChange={() => setChecked((checked) => !checked)}
//          />
//       <p>{checked ? "checked" : "not checked"}</p>
//     </div>
//   );
// }
const createArray = (length) => [...Array(length)];

function Star({ selected = false }) {
  return <FaStar color={selected ? "red" : "gray"} />;
}

function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
}

function App() {
  return <StarRating totalStars={10} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Artem" />
  </React.StrictMode>
);
