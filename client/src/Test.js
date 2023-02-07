import React, { useState } from "react";

export default function Test() {
  const [isError, setIsError] = useState([]);

  console.log(isError);
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("Submitted");
    
    setIsError([...isError, "Error", "Something went wrong"]);
  };

  return (
    <>
      <button onClick={handleSubmit}>Click Me</button>
      {isError}
    </>
  );
}
