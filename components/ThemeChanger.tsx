"use client";

import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

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
    <div className="text-2xl absolute left-3" onClick={() => changeTheme()}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ThemeChanger;
