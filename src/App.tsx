import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TitleBar from "./components/Navbar/TitleBar";
import Hero from "./components/Hero/Hero";
import ThemeContext from "./context/context";
import { useContext } from "react";
function App() {
  const [theme, setTheme] = useState('light')
  const context = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={{currentValue: theme, setCurrentValue: setTheme}}>
      <TitleBar />
      <Hero />
    </ThemeContext.Provider>
  );
}

export default App;
