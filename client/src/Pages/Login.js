import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import classNames from "classnames";
import "./login.css";
import axios from "axios";

export default function Login() {
  const borderProperties = "border-2 border-borderColor rounded-md";

  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    // alert("hello");
    axios
      .post("/users", { mail, pass })
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

  return (
    <div className="h-[100vh] flex items-center">
      <div
        className={`${borderProperties} w-[35%] mx-auto min-w-[450px] flex flex-col gap-y-5 p-[2rem]`}>
        <div
          className={`${borderProperties} flex w-full justify-center rounded-sm px-[2rem] py-[1rem] gap-x-[20px]`}>
          <GoogleIcon />
          <span className="font-bold">Login with Google</span>
        </div>
        <div className={`${borderProperties}`}></div>
        <div className="emailCon">
          <p className="emailLab label">Email</p>
          <input
            type="text"
            className={classNames(borderProperties, "w-full p-[12px] ")}
            placeholder="john@example.com"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
          />
        </div>
        <div className="emailCon">
          <p className="passLab label">Password</p>
          <input
            type="password"
            className={classNames(borderProperties, "w-full p-[12px] ")}
            placeholder="Must be atleast 6 characters"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
        </div>
        <div className="forgotPass">
          <a className="forgotBtn" href="www.google.com">
            Forgot Password?
          </a>
        </div>
        <button className="loginBtn" onClick={handleSumbit}>
          Login
        </button>
        <div className="signUp">
          <span>Fresh to Freelancing?</span>
          <a className="signBtn" href="www.google.com">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
