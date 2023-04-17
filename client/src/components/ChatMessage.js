import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";
import MessageBody from "./MessageBody";
export default function ChatMessage() {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, []);
  const dp =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const [isTyping, setIsTyping] = useState(true);
  const [message, setMessage] = useState("");
  return (
    <div className="relative flex h-full flex-col">
      <div className="contactInfo flex items-center gap-x-2 bg-white p-2 ">
        <div className="flex w-10 items-center ">
          <img
            className="h-10 w-10 rounded-full "
            src={dp}
            alt="Image Description"
          />
          <span
            className={` absolute top-9 left-10 block h-2.5 w-2.5 rounded-full ${
              true ? "bg-green-400" : "bg-red-400"
            }  ring-2 ring-white`}></span>
        </div>
        <div className="flex flex-col">
          <div className="text-md font-semibold ">Manigandan</div>
          {isTyping ? (
            <div className="text-xs font-medium text-green-600">
              Mas Happy Typing....
            </div>
          ) : (
            <div className="time text-xs text-slate-500">Yesterday</div>
          )}
        </div>
      </div>
      <div className="overflow-auto py-1" ref={containerRef}>
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"me"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
        <MessageBody
          sender={"Mani"}
          timestamp={"8:08 PM"}
          message={"Hii from Me"}
        />
      </div>

      <div className="mt-auto w-full ">
        {/* <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full">
          2
        </div> */}
        <form>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <DocumentDuplicateIcon className="h-6 w-6 " />

              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              id="chat"
              rows={1}
              className="mx-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Your message..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onFocus={(e) => setIsTyping(false)}
              defaultValue={message}
            />
            <button
              type="submit"
              className="inline-flex cursor-pointer justify-center rounded-full p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
              <svg
                aria-hidden="true"
                className="h-6 w-6 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
