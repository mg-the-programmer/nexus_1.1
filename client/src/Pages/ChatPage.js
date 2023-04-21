import React from "react";
import ChatInfo from "../components/ChatInfo";
import ChatMessage from "../components/ChatMessage";

export default function ChatPage() {
  return (
    <>
      <div className="h-[93vh] bg-gray-100 py-10 ">
        <div className="flex flex-row h-full max-w-6xl p-4 mx-4 bg-white rounded-md shadow cardContainer gap-x-2 hover:shadow-md md:mx-auto">
          <div className="flex flex w-full flex-col gap-y-1 rounded bg-gray-100 font-medium md:flex-[0.40] ">
            <div className="p-3">Contacts</div>
            <ChatInfo  />
          </div>
          <div className="flex flex-col hidden w-full h-full bg-gray-100 border-gray-200 rounded md:inline-block">
            <ChatMessage />
          </div>
        </div>
      </div>
    </>
  );
}
