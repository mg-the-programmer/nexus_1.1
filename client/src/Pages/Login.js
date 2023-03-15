import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import classNames from "classnames";
import "./login.css";
import axios from "axios";

export default function Login() {
  const borderProperties = "border-2 border-borderColor rounded-md";

  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const [accountType, setAccountType] = useState("client");

  const handleSumbit = (e) => {
    e.preventDefault();
    // alert("hello");
    axios
      .post("/signin", { mail, pass, accountType })
      .then((res) => {
        console.log(res.data);
        setmail("");
        setpass("");
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(mail, pass);
  };
  const selectedAccountType =
    "flex justify-center w-full px-4 py-2.5 mt-4 text-white bg-blue-500 rounded-lg md:w-full md:mt-0 md:mx-2 focus:outline-none";

  const unselectedAccountType =
    "flex justify-center w-full px-4 py-2.5 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-full md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none";

  return (
    // <div className="flex h-[100vh] items-center">
    //   <div
    //     className={`${borderProperties} mx-auto flex w-[35%] min-w-[450px] flex-col gap-y-5 p-[2rem]`}>
    //     <div
    //       className={`${borderProperties} flex w-full justify-center gap-x-[20px] rounded-sm px-[2rem] py-[1rem]`}>
    //       <GoogleIcon />
    //       <span className="font-bold">Login with Google</span>
    //     </div>
    //     <div className={`${borderProperties}`}></div>
    //     <div className="emailCon">
    //       <p className="emailLab label">Email</p>
    //       <input
    //         type="text"
    //         className={classNames(borderProperties, "w-full p-[12px] ")}
    //         placeholder="john@example.com"
    //         value={mail}
    //         onChange={(e) => setmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="emailCon">
    //       <p className="passLab label">Password</p>
    //       <input
    //         type="password"
    //         className={classNames(borderProperties, "w-full p-[12px] ")}
    //         placeholder="Must be atleast 6 characters"
    //         value={pass}
    //         onChange={(e) => setpass(e.target.value)}
    //       />
    //     </div>
    //     <div className="forgotPass">
    //       <a className="forgotBtn " href="www.google.com">
    //         Forgot Password?
    //       </a>
    //     </div>
    //     <button className="loginBtn " onClick={handleSumbit}>
    //       Login
    //     </button>
    //     <div className="signUp">
    //       <span>Fresh to Freelancing?</span>
    //       <a className=" signBtn" href="www.google.com">
    //         Sign Up
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="mx-auto mt-40 flex overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1664575196644-808978af9b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
        }}
      />
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <div className="mx-auto flex justify-center">
          <img
            className="h-7 w-auto sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>
        <p className="mt-3 text-center text-xl text-gray-600 dark:text-gray-200">
          Welcome back!
        </p>
        <a
          href="#"
          className="mt-4 flex transform items-center justify-center rounded-lg border text-gray-600 transition-colors duration-300 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
          <div className="px-4 py-2">
            <svg className="h-6 w-6" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>
          </div>
          <span className="w-5/6 px-4 py-3 text-center font-bold">
            Sign in with Google
          </span>
        </a>
        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
          <a
            href="#"
            className="text-center text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
            or login with email
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
        </div>
        <div className="mt-4">
          <div className="mt-6">
            <h1 className="text-sm font-medium text-gray-600 dark:text-gray-200">
              Select type of account
            </h1>
            <div className="mt-3 md:-mx-2 md:flex md:items-center">
              <button
                className={`${
                  accountType === "client"
                    ? selectedAccountType
                    : unselectedAccountType
                }`}
                onClick={() => setAccountType("client")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="px-2">client</span>
              </button>
              <button
                className={`${
                  accountType === "worker"
                    ? selectedAccountType
                    : unselectedAccountType
                }`}
                onClick={() => setAccountType("worker")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="px-2">worker</span>
              </button>
            </div>
          </div>
          <label
            className="mt-4 mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="LoggingEmailAddress">
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
            type="email"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="loggingPassword">
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-500 hover:underline dark:text-gray-300">
              Forget Password?
            </a>
          </div>
          <input
            id="loggingPassword"
            className="block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
            type="password"
          />
        </div>
        <div className="mt-6">
          <button
            onClick={handleSumbit}
            className="w-full transform rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          <a
            href="/signup"
            className="text-xs uppercase text-gray-500 hover:underline dark:text-gray-400">
            or sign up
          </a>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
        </div>
      </div>
    </div>
  );
}
