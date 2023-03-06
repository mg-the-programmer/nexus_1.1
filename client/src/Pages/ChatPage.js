import React from "react";
import ChatInfo from "../components/ChatInfo";

export default function ChatPage() {
  return (
    <>
      <div className="flex h-[93vh] items-center bg-gray-100 ">
        <div className="cardContainer mx-auto h-4/5 w-[85%] rounded-md bg-white p-4 shadow hover:shadow-md ">
          <div className="flex h-full w-[30%] flex-col gap-y-2 rounded bg-gray-100 p-3 font-medium ">
            Contacts
            <ChatInfo />
          </div>
        </div>
      </div>
    </>
  );
}
