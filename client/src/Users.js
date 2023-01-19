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
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div>
            <h1 key={item._id}>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
