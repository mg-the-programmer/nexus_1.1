import { useState } from "react";

function useDarkMode(initialValue = false) {
  const [isDarkMode, setIsDarkMode] = useState(initialValue);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
