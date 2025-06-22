import React from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>🌗 Theme Switcher</h1>
        <ThemeButton />
        <Card />
      </div>
    </ThemeProvider>
  );
};

export default App;
