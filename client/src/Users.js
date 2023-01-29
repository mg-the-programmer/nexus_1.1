// import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/users").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleSubmit = async () => {
    const data = { name: "asfl", age: 12 };
    axios
      .post("/users", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div>
            <h1 key={item._id}>{item.name}</h1>
          </div>
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
