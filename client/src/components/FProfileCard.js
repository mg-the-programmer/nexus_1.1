import React, { useState } from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

export default function FProfileCard({ post }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  post.price = "120K";
  post.hourRate = "18";
  post.jobSuccess = "100%";
  post.title = "Frontend Developer";
  post.imageUrl =
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";
  return (
    <article
      key={post.id}
      className="mx-2 flex flex-col items-start justify-between gap-y-2.5 rounded-md bg-white p-6 shadow hover:shadow-md ">
      <div className="relative flex w-full items-center gap-x-4">
        <div className="hs-tooltip inline-block">
          <a className="hs-tooltip-toggle relative " href="#">
            <img
              className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-gray-800"
              src={post.imageUrl}
              alt="Image Description"
            />

            <span
              className={`absolute top-6 right-0 block h-3 w-3 rounded-full ${
                post.available ? "bg-green-400" : "bg-red-400"
              } ring-2 ring-white`}></span>
            <div
              className="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
              role="tooltip">
              Maria Wanner is online
            </div>
          </a>
        </div>

        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a>
              <span className="absolute " />
              {post.name}
            </a>
          </p>
          <p className="text-gray-600">{post.jobTitle}</p>
        </div>
        <div className="bookmark z-[2px] ml-auto mr-1">
          <BookmarkIcon
            className={`h-6 w-6 text-black ${
              isBookmarked ? "fill-blue-500 " : "fill-none"
            }`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          />
        </div>
      </div>
      <div className="skils flex items-center gap-x-3 text-xs">
        {post.skills.map((option) => (
          <a className="relative z-10 rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-800 hover:bg-gray-200">
            {option}
          </a>
        ))}
      </div>
      <div className="pricing mt-1 flex w-full justify-evenly">
        <p className="text-md font-medium text-gray-900">
          <span className="text-bold text-gray-900"> ${post.rate}</span>
          <span className="text-gray-600">/hr</span>
        </p>
        <p className="text-md font-medium">
          <span className="text-bold text-gray-900"> ${post.price}+</span>
          <span className="text-gray-600"> earned</span>
        </p>
        <p className="text-md font-medium">
          <span className="text-bold text-gray-900"> {post.jobSuccess}</span>
          <span className="text-gray-600"> Job Success</span>
          <div className="h-1 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className={`h-1 w-[${post.jobSuccess}] rounded-full bg-blue-600 dark:bg-blue-500`}></div>
          </div>
        </p>
      </div>
      <div className="title&description group flex flex-col gap-y-2 border-b pb-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
          <a href={post.href}>
            <span />
            {post.title}
          </a>
        </h3>
        <p className="line-clamp-3 text-sm leading-6 ">{post.description}</p>
        <div className="badges">
          <span class="inline-flex items-center rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
            <svg
              aria-hidden="true"
              class="mr-1 h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"></path>
            </svg>
            2 minutes ago
          </span>
        </div>
      </div>

      <div className="callForAction flex w-full justify-end gap-x-4 px-2 ">
        <button className="text-sm font-medium text-blue-700 hover:text-blue-900">
          <a href="profile">View Details</a>
        </button>
        <button
          type="button"
          class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Message
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </article>
  );
}
