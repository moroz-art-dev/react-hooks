import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// useEffect
// function App() {
//   const [name, setName] = useState("Jan");
//   const [admin, setAdmin] = useState(false);
//   useEffect(() => {
//     console.log = `Celebrate ${name}`;
//   }, [name]);
//   useEffect(() => {
//     console.log = `The user is: ${admin ? "admin" : "not admin"}.`;
//   }, [admin ]);
//   return (
//     <section>
//       <p>Congratulations {name}!</p>
//       <button onClick={() => setName("Will")}>Change Winner</button>
//       <p>{admin ? "logged in" : "not loggen in"}</p>
//       <button onClick={() => setAdmin(!admin)}>Log In</button>
//     </section>
//   );
//}
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      console.log("data");
      await fetch("https://api.github.com/users")
        .then((respons) => respons.json())
        .then(setData); //.then(res => setDate(res))
    }
    fetchEmployees();
  }, []);
  console.log("d", data);
  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Remove Data</button>
      </div>
    );
  }
  return <p>No users</p>;
}
