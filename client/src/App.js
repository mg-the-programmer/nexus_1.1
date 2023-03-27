import "./App.css";
import React, { useEffect } from "react";
import Login from "./Pages/Login";
import FreelancerSettings from "./Pages/Freelancer/FreelancerSettings";
import { useLocation } from "react-router-dom";

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
import axios from "axios";

function App() {
  const routing = useRoutes([
    {
      path: "/signin",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
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
      path: "/freelancer/info",
      element: <FreelancerForm />,
    },
    {
      path: "*",
      element: <Dashboard />,
    },
  ]);

  // const routing = useRoutes(routes);
  const [isDarkMode, setIsDarkMode] = useState(false);
  //create a loading state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/freelancer/64115415247d2e83c2af8532")
      .then((res) => {
        console.log(res.data.darkMode);
        setIsDarkMode(res.data.darkMode);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleDarkModeChange(value) {
    setIsDarkMode(value);
  }

  let mode = isDarkMode ? "dark" : "light";

  const currentPath = useLocation().pathname;
  const isAuthPage = currentPath === "/signin" || currentPath === "/signup";

  return (
    //use the loading state
    loading ? (
      <div>Loading...</div>
    ) : (
      <div className={`App ${mode}  `}>
        {/* <ErrorAlert head={"Error"} message={"Something went wrong"} /> */}
        {/* <button
        className="fixed p-2 bg-blue-500 rounded-md top-4 right-4"
        onClick={() => setisdarkmode(!isdarkmode)}>
        Change Mode
      </button> */}
        {!isAuthPage && <Navbar onDarkModeChange={handleDarkModeChange} />}

        {routing}
        {/* <FreelancerSettings /> */}
        {/* <Dashboard /> */}
        {/* <ChatPage /> */}
        {/* <FreelancerInfo /> */}
        {/* <FreelancerForm /> */}
      </div>
    )
  );
}

export default App;
