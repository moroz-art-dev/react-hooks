import React, { useEffect, useState } from "react";
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

// useState
// const createArray = (length) => [...Array(length)];

// function Star({ selected = false, onSelect }) {
//   return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
// }

// function StarRating({ totalStars = 5 }) {
//   const [selectedStarts, setSelectedStars] = useState(0);
//   return (
//     <>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStarts > i}
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>{selectedStarts} of {totalStars}</p>
//     </>
//   );
// }

// function App() {
//   return <StarRating totalStars={10} />;
// }

function App() {
  const [name, setName] = useState("Jan");
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });
  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>Change Winner</button>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name="Artem" />
  </React.StrictMode>
);
