import React from "react";
import ChatInfo from "../components/ChatInfo";
import ChatMessage from "../components/ChatMessage";

export default function ChatPage() {
  return (
    <>
      <div className="h-[93vh] bg-gray-100 py-10 ">
        <div className="cardContainer mx-4 flex h-full max-w-6xl flex-row gap-x-2 rounded-md bg-white p-4 shadow hover:shadow-md md:mx-auto">
          <div className="flex flex w-full flex-col gap-y-1 rounded bg-gray-100 font-medium md:flex-[0.40] ">
            <div className="p-3">Contacts</div>
            <ChatInfo />
            <ChatInfo />
            <ChatInfo />
          </div>
          <div className="flex hidden h-full w-full flex-col rounded border-gray-200 bg-gray-100 md:inline-block">
            <ChatMessage />
          </div>
        </div>
      </div>
    </>
  );
}
