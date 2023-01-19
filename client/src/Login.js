import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import classNames from "classnames";
import "./login.css";

export default function Login() {
  const borderProperties = "border-2 border-borderColor rounded-md";

  return (
    <form
      className={classNames(
        borderProperties,
        "w-[40%] mx-auto min-w-[450px] flex flex-col gap-y-5 p-[2rem] "
      )}
      method="POST">
      <div
        className={classNames(
          borderProperties,
          "flex w-full justify-center rounded-sm px-[2rem] py-[1rem] gap-x-[20px]"
        )}>
        <GoogleIcon />
        <span className="font-bold">Login with Google</span>
      </div>
      <div className={classNames(borderProperties)}></div>
      <div className="emailCon">
        <p className="emailLab label">Email</p>
        <input
          type="text"
          className={classNames(borderProperties, "w-full p-[12px] ")}
          placeholder="john@example.com"
        />
      </div>
      <div className="emailCon">
        <p className="passLab label">Password</p>
        <input
          type="text"
          className="passInp inpField"
          placeholder="Must be atleast 6 characters"
        />
      </div>
      <div className="forgotPass">
        <a className="forgotBtn" href="www.google.com">
          Forgot Password?
        </a>
      </div>
      <button className="loginBtn">Login</button>
      <div className="signUp">
        <span>Fresh to Freelancing?</span>
        <a className="signBtn" href="www.google.com">
          Sign Up
        </a>
      </div>
    </form>
  );
}
