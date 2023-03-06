import React from "react";

export default function ChatInfo() {
  const dp =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  return (
    <div className="relative inline-block h-20 bg-white ">
      <img
        className="inline-block rounded-full h-9 w-9 ring-2 ring-gray-800"
        src={dp}
        alt="Image Description"
      />
      <span
        className={` absolute top-6 left-8 block h-2.5 w-2.5 rounded-full ${
          true ? "bg-green-400" : "bg-red-400"
        }  ring-2 ring-white`}></span>
    </div>
  );
}
