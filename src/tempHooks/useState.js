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
//       <hr />
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() => setChecked((checked) => !checked)}
//       />
//       <p>{checked ? "checked" : "not checked"}</p>
//     </div>
//   );
// }


// Creating controlled components with useState
// function App() {
//   const [sound, setSound] = useState("");
//   const [color, setColor] = useState("#000000");

//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${sound} sounds like ${color}`);
//     setSound("");
//     setSound("000000");
//   };

//   return (
//     <form onSubmit={submit}>
//       <input
//         onChange={(e) => setSound(e.target.value)}
//         value={sound}
//         type="text"
//         placeholder="Sound..."
//       />
//       <input
//         onChange={(e) => setColor(e.target.value)}
//         value={color}
//         type="color"
//       />
//       <button>ADD</button>
//     </form>
//   );
// }

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
}

function StarRating({ totalStars = 5 }) {
  const [selectedStarts, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStarts > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStarts} of {totalStars}
      </p>
    </>
  );
}

function App() {
  return <StarRating totalStars={10} />;
}
