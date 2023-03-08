import React from "react";

export default function ChatInfo(
  props,
  {
    name = "Manigandan",
    recentMsg = "Heyy There What's up",
    timing = "Yesterday",
    notiCount = 2,
  }
) {
  const dp =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  return (
    <div
      className={`relative inline-block flex items-center bg-white ${props.className} justify-between `}>
      <div className="flex items-center">
        <div className="dp flex items-center">
          <img
            className="inline-block h-10 w-10 rounded-full "
            src={dp}
            alt="Image Description"
          />
          <span
            className={` absolute top-10 left-10 block h-2.5 w-2.5 rounded-full ${
              true ? "bg-green-400" : "bg-red-400"
            }  ring-2 ring-white`}></span>
        </div>
        <div className="details ml-2">
          <div className="text-sm font-semibold ">{name}</div>
          <div className="w-24 overflow-hidden overflow-ellipsis whitespace-nowrap text-xs text-slate-500">
            {recentMsg}
          </div>
        </div>
      </div>
      <div className="timing flex flex-col items-end">
        <div className="time text-xs text-slate-500">{timing}</div>
        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-medium text-white">
          {notiCount}
        </div>
      </div>
    </div>
  );
}
