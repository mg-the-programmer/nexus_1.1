import "./App.css";
import React from "react";
import Login from "./Pages/Login";
import FreelancerSettings from "./Pages/FreelancerSettings";

import Signup from "./Pages/Signup";
import { useState } from "react";
import ErrorAlert from "./components/ErrorAlert";
import Navbar from "./components/Navbar";
import FreelancerForm from "./Pages/FreelancerForm";
import FreelancerInfo from "./Pages/FreelancerInfo";

function App() {
  const [isdarkmode, setisdarkmode] = useState(true);

  const mode = isdarkmode ? "dark" : "light";

  return (
    <div className={`App ${mode}`}>
      {/* <ErrorAlert head={"Error"} message={"Something went wrong"} /> */}
      {/* <button
        className="fixed top-4 right-4 rounded-md bg-blue-500 p-2"
        onClick={() => setisdarkmode(!isdarkmode)}>
        Change Mode
      </button> */}
      <Navbar />
      <FreelancerSettings />
      {/* <FreelancerInfo /> */}
      {/* <FreelancerForm /> */}
    </div>
  );
}

export default App;
