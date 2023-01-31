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
      <button
        className="fixed top-4 right-4 bg-blue-500 p-2 rounded-md"
        onClick={() => setisdarkmode(!isdarkmode)}>
        Change Mode
      </button>
      {/* <Users /> */}
    </div>
  );
}

export default App;
