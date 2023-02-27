import "./App.css";
import React from "react";
import Login from "./Pages/Login";
import FreelancerSettings from "./Pages/Freelancer/FreelancerSettings";

import Signup from "./Pages/Signup";
import { useState } from "react";
import ErrorAlert from "./components/ErrorAlert";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Client/Dashboard";
import FreelancerForm from "./Pages/Freelancer/FreelancerForm";
import FreelancerInfo from "./Pages/Freelancer/FreelancerInfo";

function App() {
  const [isdarkmode, setisdarkmode] = useState(true);

  const mode = isdarkmode ? "dark" : "light";

  return (
    <div className={`App ${mode}`}>
      {/* <ErrorAlert head={"Error"} message={"Something went wrong"} /> */}
      {/* <button
        className="fixed p-2 bg-blue-500 rounded-md top-4 right-4"
        onClick={() => setisdarkmode(!isdarkmode)}>
        Change Mode
      </button> */}
      <Navbar />
      {/* <FreelancerSettings /> */}
      <Dashboard />
      {/* <FreelancerInfo /> */}
      {/* <FreelancerForm /> */}
    </div>
  );
}

export default App;
