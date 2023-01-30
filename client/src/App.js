import "./App.css";
import React from "react";
import Login from "./Pages/Login";

import Signup from "./Pages/Signup";
import { useState } from "react";

function App() {
  const [isdarkmode, setisdarkmode] = useState(true);

  const mode = isdarkmode ? "dark" : "light";

  return (
    <div className={`App ${mode}`}>
      {/* <h1>Hello</h1> */}
      {/* <Test /> */}
      {/* <ResumeBuilder /> */}
      {/* <Login /> */}
      <Signup />
      {/* <Users /> */}
    </div>
  );
}

export default App;
