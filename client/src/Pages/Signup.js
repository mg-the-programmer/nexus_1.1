import axios from "axios";
import React, { useState } from "react";
import ErrorAlert from "../components/ErrorAlert";

const backgroundImg =
  "https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80";
export default function Signup() {
  const [accountType, setAccountType] = useState("client");
  const [firstName, setFirstName] = useState("Mani");
  const [lastName, setLastName] = useState("Gandan");
  const [email, setEmail] = useState("alphagameroffical@gmail.com");
  const [phone, setPhone] = useState("9843029028");
  const [password, setPassword] = useState("dfdff");
  const [confirmPassword, setConfirmPassword] = useState("dfdf");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

  const selectedAccountType =
    "flex justify-center w-full px-6 py-3 mt-4 text-white bg-blue-500 rounded-lg md:w-auto md:mt-0 md:mx-2 focus:outline-none";

  const unselectedAccountType =
    "flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none";

  const [isError, setIsError] = useState([]);
  const formValidation = (e) => {
    // e.preventDefault();
    console.log("submitted");

    phone.length !== 10 &&
      setIsError([
        ...isError,
        { head: "Phone", message: "Phone number must be 10 digits" },
      ]);
    password.length < 6 &&
      setIsError([
        ...isError,
        {
          head: "Password",
          message: "Password must be at least 6 characters",
        },
      ]);

    if (password !== confirmPassword) {
      setIsError([
        ...isError,
        { head: "Password", message: "Password does not match" },
      ]);
    } else {
      console.log("password matched");
    }
  };

  const handleSubmit = (e) => {
    formValidation();
    e.preventDefault();
    axios
      .post("/signup", {
        firstName,
        lastName,
        email,
        phone,
        password,
        accountType,
      })
      .then((res) => {
        // console.log(res);
        setIsError((prevError) => [...prevError, res.data]);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(isError);

  const errorHandler = () => {
    console.log("error handler");
  };

  return (
    <>
      <section className="z-0 bg-white dark:bg-gray-900">
        <div className="flex min-h-screen justify-center ">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}></div>
          <div className="mx-auto flex w-full max-w-3xl items-center p-8 lg:w-3/5 lg:px-12">
            <div className="w-full">
              <h1 className="text-2xl font-semibold capitalize tracking-wider text-gray-800 dark:text-white">
                Get your free account now.
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>
              <div className="mt-6">
                <h1 className="text-gray-500 dark:text-gray-300">
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
                    <span className="mx-2">client</span>
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
                    <span className="mx-2">worker</span>
                  </button>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="John"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                    Last name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Snow"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="text"
                    placeholder="XXXX-XXXXXX"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="johnsnow@example.com"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600 dark:text-gray-200">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:focus:border-blue-400"
                  />
                </div>
                <a
                  href="dashboard
                ">
                  <button
                    className="flex w-full transform items-center justify-between rounded-lg bg-blue-500 px-6 py-3 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type="submit">
                    <span>Sign Up </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="notifications fixed bottom-7 right-7 flex flex-col gap-y-3 ">
        {isError.map((error) => (
          <ErrorAlert head={error.head} message={error.message} />
          //create a timeout for .5s
        ))}
      </div>
    </>
  );
}
