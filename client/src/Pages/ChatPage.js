import React from "react";
import ChatInfo from "../components/ChatInfo";

export default function ChatPage() {
  return (
    <>
      <div className="h-[93vh] bg-gray-100 pt-24 ">
        <div className="cardContainer mx-4 flex h-4/5 max-w-6xl flex-row gap-x-2 rounded-md bg-white p-4 shadow hover:shadow-md md:mx-auto">
          <div className="flex w-full flex-col gap-y-1 rounded bg-gray-100 font-medium sm:w-[40%] ">
            <div className="p-3">Contacts</div>
            <ChatInfo className="p-3" />
            <ChatInfo className="p-3" />
            <ChatInfo className="p-3" />
          </div>
          <div className="flex hidden h-full flex-col rounded bg-gray-100 p-3 sm:w-full md:inline-block">
            Messages
          </div>
        </div>
      </div>
    </>
  );
}
