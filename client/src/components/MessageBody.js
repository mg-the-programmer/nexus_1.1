import React from "react";
import classNames from "classnames";

const Message = ({ sender, message, timestamp }) => {
  const isSentByMe = sender === "me";
  const containerClassNames = classNames(
    "flex",
    "flex-col",
    "items-" + (isSentByMe ? "end" : "start"),
    "justify-center",
    "max-w-md",
    { "ml-auto": isSentByMe, "mr-auto": !isSentByMe }
  );
  const messageClassNames = classNames(
    "bg-gray-300",
    "text-gray-800",
    "px-3",
    "py-1.5",
    "max-w-xl",
    { "ml-auto": isSentByMe, "mr-auto": !isSentByMe }
  );

  return (
    <div className={`${containerClassNames} px-4`}>
      <div className="text-sm font-medium text-black">{sender}</div>
      <div className={`${messageClassNames} rounded-md `}>
        <div className="text-sm">{message}</div>
        <div className="flex flex-row justify-end ">
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
