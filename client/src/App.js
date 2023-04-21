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
import FDashboard from "./Pages/Freelancer/FDashboard";
import PostProjects from "./Pages/Freelancer/PostProjects";
import ProjectsView from "./Pages/Client/ProjectsView";
import ChatPage from "./Pages/ChatPage";
import axios from "axios";
import PostJob from "./Pages/Client/PostJob";

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
      path: "/dashboard/client",
      element: <Dashboard />,
    },
    {
      path: "/dashboard/freelancer",
      element: <FDashboard />,
    },
    {
      path: "/postjob",
      element: <PostJob />,
    },
    {
      path: "/postprojects",
      element: <PostProjects />,
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
      element: <ProjectsView />,
    },
  ]);

  // const routing = useRoutes(routes);
  const [isDarkMode, setIsDarkMode] = useState();
  //create a loading state
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState([]);
  const [userId, setUserId] = useState("");

  //have to fix dark mode
  // useEffect(() => {
  //   axios.get("/freelancerDetails").then((res) => {
  //     setUserDetails(res.data);
  //     setUserId(res.data._id);
  //     console.log(res.data._id);
  //   });
  // }, []);
  // axios
  //   .get(`/freelancer/${userId}`)
  //   .then((res) => {
  //     console.log(res.data);
  //     setIsDarkMode(res.data.darkMode);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

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
        {!isAuthPage && (
          <Navbar userId={userId} onDarkModeChange={handleDarkModeChange} />
        )}
        {routing}
      </div>
    )
  );
}

export default App;
