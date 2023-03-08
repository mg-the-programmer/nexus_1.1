import React from "react";

export default function FProfileCard({ post }) {
  return (
    <article
      key={post.id}
      className="mx-2 flex flex-col items-start justify-between gap-y-2.5 rounded-md bg-white p-5 shadow hover:shadow-md ">
      <div className="relative flex items-center gap-x-4">
        <div className="hs-tooltip inline-block">
          <a className="hs-tooltip-toggle relative " href="#">
            <img
              className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-gray-800"
              src={post.author.imageUrl}
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
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          <p className="text-gray-600">{post.author.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3 text-xs">
        {/* <time dateTime={post.datetime} className="text-gray-500">
          {post.available ? (
            <span class="mr-2 inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
              <span class="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
              Available
            </span>
          ) : (
            <span class="mr-2 inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
              <span class="mr-1 h-2 w-2 rounded-full bg-red-500"></span>
              Unavailable
            </span>
          )}
        </time> */}
        {post.category.map((option) => (
          <a
            href={option.href}
            className="relative z-10 rounded-full bg-gray-100 py-1.5 px-3 font-medium text-gray-800 hover:bg-gray-200">
            {option.title}
          </a>
        ))}
      </div>
      <div className="group flex flex-col gap-y-2 border-b pb-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600">
          <a href={post.href}>
            <span />
            {post.title}
          </a>
        </h3>
        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {post.description}
        </p>
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
          class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 dark:bg-blue-600 dark:focus:ring-blue-800 dark:hover:bg-blue-700">
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
