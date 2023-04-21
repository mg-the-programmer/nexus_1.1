import React, { useEffect, useState } from "react";
import { HeartIcon, LinkIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

export default function ProjectCard({
  customStyle,
  post,
  img = "https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?w=2000",
  dp = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}) {
  const [likes, setLikes] = useState(post.likes);
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
      className={`${customStyle} inline-block max-w-[280px] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800  `}>
      <div className=" relative h-auto w-auto max-w-[280px] ">
        <img
          className="h-full cursor-pointer rounded-t-lg "
          src={img}
          alt="Project Preview"
        />
        <a
          href="/dashboard"
          target="_blank"
          class="absolute inset-0  flex items-center justify-center rounded-t-lg opacity-0 transition duration-300 ease-in-out hover:bg-gray-900 hover:bg-opacity-50 hover:opacity-100">
          <LinkIcon className="h-6 w-6 text-white" />
        </a>
      </div>
      <div className="flex flex-row justify-between p-5">
        <div className="flex items-center ">
          <img
            src={dp}
            alt="Profile Pic"
            className="mr-2 h-7 w-7 rounded-full "
          />

          <h5 className="text-md font-medium tracking-tight text-gray-900 dark:text-white">
            {post.creator}
          </h5>
        </div>
        <div className="flex items-center">
          <button
            className={`flex h-6 w-6 items-center justify-center ${
              liked ? "text-red-500" : ""
            } rounded-full`}
            onClick={() => toggleLike()}>
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
