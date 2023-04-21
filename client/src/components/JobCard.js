import { useState, useEffect } from "react";
import dayjs from "dayjs"; // assuming you have already installed dayjs library
import relativeTime from "dayjs/plugin/relativeTime"; // plugin for relative time calculation
import "dayjs/locale/en"; // assuming you want to display the badge in English
import { BookmarkIcon } from "@heroicons/react/24/outline";

// apply the relativeTime plugin to dayjs
dayjs.extend(relativeTime);
// set the locale to English
dayjs.locale("en");

export default function FProfileCard({ post }) {
  const [timeAgo, setTimeAgo] = useState("");
  var timestamp = post.createdAt;
  useEffect(() => {
    // calculate the relative time from the given timestamp to now
    const relativeTime = dayjs(timestamp).fromNow();
    setTimeAgo(relativeTime);
  }, [timestamp]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <article
      key={post._id}
      className="mx-2 flex flex-col items-start justify-between gap-y-2.5 rounded-md bg-white p-6 shadow hover:shadow-md ">
      <div className="relative flex w-full items-center gap-x-4">
        <div className="text-base leading-6">
          <p className="font-semibold text-gray-900">
            <a>
              <span className="absolute " />
              {post.title}
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
      <div className="skils flex flex-wrap items-center gap-y-2 gap-x-3 text-xs">
        {post.requiredSkills.map((option) => (
          <a className="relative z-0 rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-800 hover:bg-gray-200">
            {option}
          </a>
        ))}
      </div>
      <div className="pricing mt-1 flex w-full flex-wrap justify-evenly gap-y-2">
        <p className="text-md font-medium text-gray-900">
          <span className="text-bold text-gray-900"> ${post.budget}</span>
          {/* <span className="text-gray-600">/hr</span> */}
        </p>
        <p className="text-md font-medium">
          <span className="text-bold text-gray-900"> ${post.budget}+</span>
          <span className="text-gray-600"> spent</span>
        </p>
        {/* <p className="font-medium text-md">
          <span className="text-gray-900 text-bold"> 100%</span>
          <span className="text-gray-600"> Job Success</span>
          <div className="w-full h-1 bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className={`h-1  rounded-full bg-blue-600 dark:bg-blue-500`}></div>
          </div>
        </p> */}
      </div>
      <div className="title&description group flex flex-col gap-y-2 border-b pb-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
          <a href={post.href}>
            <span />
            {post.jobTitle}
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
            {timeAgo}
          </span>
        </div>
      </div>

      <div className="callForAction flex w-full justify-end gap-x-4 px-2 ">
        <button className="text-sm font-medium text-blue-700 hover:text-blue-900">
          <a href={`/freelancer/${post._id}`}>View Details</a>
        </button>
        <a href="/messages">
          <button
            type="button"
            onClick={() => (window.location.href = "messages")}
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
        </a>
      </div>
    </article>
  );
}
