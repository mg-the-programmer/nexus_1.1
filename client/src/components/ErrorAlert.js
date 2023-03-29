import React, { useState, useEffect } from "react";
export default function ErrorAlert({
  head = "Error",
  message = "Something went wrong",
}) {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShow(false);
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div
      className={`animate-on-load z-10 flex w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800`}>
      <div className="flex w-12 items-center justify-center bg-red-500">
        <svg
          className="h-6 w-6 fill-current text-white"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
        </svg>
      </div>
      <div className="-mx-3 px-4 py-2">
        <div className="mx-3">
          <span className="font-semibold text-red-500 dark:text-red-400">
            {head}
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-200">{message}</p>
        </div>
      </div>
    </div>
  );
}
