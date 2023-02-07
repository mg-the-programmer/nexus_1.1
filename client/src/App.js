import "./App.css";
import React from "react";
import Login from "./Pages/Login";

import Signup from "./Pages/Signup";
import { useState } from "react";
import ErrorAlert from "./components/ErrorAlert";
import Test from "./Test";

function App() {
  const [isdarkmode, setisdarkmode] = useState(true);

  const mode = isdarkmode ? "dark" : "light";

  return (
    <div className={`App ${mode}`}>
      {/* <ErrorAlert head={"Error"} message={"Something went wrong"} /> */}
      {/* <h1>Hello</h1> */}
      {/* <Test /> */}
      {/* <ResumeBuilder /> */}
      {/* <Login /> */}
      <Signup />
      {/* <Test /> */}
      <button
        className="fixed top-4 right-4 bg-blue-500 p-2 rounded-md"
        onClick={() => setisdarkmode(!isdarkmode)}>
        Change Mode
      </button>
      {/* <ErrorAlert head={"Password"} message={"Password does not match"} /> */}
      {/* <Users /> */}
    </div>
  );
}

export default App;
