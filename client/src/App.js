import "./App.css";
import React from "react";
import Login from "./Pages/Login";
import FreelancerSettings from "./Pages/Freelancer/FreelancerSettings";
import { useRoutes } from "react-router-dom";
import "./index.css";
import ErrorPage from "./Pages/ErrorPage";
import FreelanceProfile from "./Pages/Freelancer/FreelanceProfile";

import Signup from "./Pages/Signup";
import { useState } from "react";
import ErrorAlert from "./components/ErrorAlert";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Client/Dashboard";
import FreelancerForm from "./Pages/Freelancer/FreelancerForm";
import FreelancerInfo from "./Pages/Freelancer/FreelancerInfo";
import ChatPage from "./Pages/ChatPage";

function App() {
  const [isdarkmode, setisdarkmode] = useState(false);

  const mode = isdarkmode ? "dark" : "light";
  const routing = useRoutes([
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/profile",
      element: <FreelanceProfile />,
    },
    {
      path: "/settings",
      element: <FreelancerSettings />,
    },
    {
      path: "/messages",
      element: <ChatPage />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <Dashboard />,
    },
  ]);

  // const routing = useRoutes(routes);

  return (
    <div className={`App ${mode}  `}>
      {/* <ErrorAlert head={"Error"} message={"Something went wrong"} /> */}
      {/* <button
        className="fixed p-2 bg-blue-500 rounded-md top-4 right-4"
        onClick={() => setisdarkmode(!isdarkmode)}>
        Change Mode
      </button> */}
      <Navbar />
      {routing}
      {/* <FreelancerSettings /> */}
      {/* <Dashboard /> */}
      {/* <ChatPage /> */}
      {/* <FreelancerInfo /> */}
      {/* <FreelancerForm /> */}
    </div>
  );
}

export default App;
