import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";

const ThemeButton = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-button">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeButton;
