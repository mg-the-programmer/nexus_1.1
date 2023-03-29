import React, { useState } from "react";

export default function DarkModeSwitch() {
  const [isdarkmode, setisdarkmode] = useState(true);
  return (
    <div>
      <button
        className="fixed top-4 right-4 rounded-md bg-blue-500 p-2"
        onClick={() => setisdarkmode(!isdarkmode)}>
        Change Mode
      </button>
    </div>
  );
}
