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
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Client/Dashboard";
import FreelancerForm from "./Pages/Freelancer/FreelancerForm";
import FreelancerInfo from "./Pages/Freelancer/FreelancerInfo";
import ProjectsView from "./Pages/Client/ProjectsView";
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
      path: "/projects",
      element: <ProjectsView />,
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
  const [isDarkMode, setIsDarkMode] = useState();
  //create a loading state
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/freelancer/64115415247d2e83c2af8532")
      .then((res) => {
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
        {!isAuthPage && <Navbar onDarkModeChange={handleDarkModeChange} />}
        {routing}
      </div>
    )
  );
}

export default App;
