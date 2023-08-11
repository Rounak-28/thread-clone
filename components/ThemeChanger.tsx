"use client";

import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };


  return (
    <div
      className="bg-red-600 w-6 h-6 rounded-full"
      onClick={() => changeTheme()}
    >
      {/* theme: {theme} */}
      {/* <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button> */}
    </div>
  );
};

export default ThemeChanger;
