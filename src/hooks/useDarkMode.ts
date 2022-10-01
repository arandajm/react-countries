import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    const selectedTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", selectedTheme);
    setTheme(selectedTheme);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, toogleTheme };
};

export default useDarkMode;
