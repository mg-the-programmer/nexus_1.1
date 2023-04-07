import React, { useState } from "react";
import { HeartIcon, LinkIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

export default function ProjectCard({
  customStyle,
  img = "https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  name = "Manigandan",
  dp = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}) {
  const [likes, setLikes] = useState(1243);
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };
  return (
    <div
      className={`${customStyle} inline-block min-w-[280px] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800  `}
    >
      <div className=" relative h-auto w-auto min-w-[280px] ">
        <img
          className="h-full rounded-t-lg cursor-pointer "
          src={img}
          alt="Project Preview"
        />
        <a
          href="/dashboard"
          target="_blank"
          class="absolute inset-0  flex items-center justify-center rounded-t-lg opacity-0 transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-50 hover:opacity-100"
        >
          <LinkIcon className="w-6 h-6 text-white" />
        </a>
      </div>
      <div className="flex flex-row justify-between p-5">
        <div className="flex items-center ">
          <img
            src={dp}
            alt="Profile Pic"
            className="mr-2 rounded-full h-7 w-7 "
          />

          <h5 className="font-medium tracking-tight text-gray-900 text-md dark:text-white">
            {name}
          </h5>
        </div>
        <div className="flex items-center">
          <button
            className={`flex h-6 w-6 items-center justify-center ${
              liked ? "text-red-500" : ""
            } rounded-full`}
            onClick={() => toggleLike()}
          >
            <HeartIcon
              className={`${liked ? "fill-current text-red-500" : ""}`}
            />
          </button>
          <span className="ml-1 font-medium">{likes}</span>
        </div>
      </div>
    </div>
  );
}
