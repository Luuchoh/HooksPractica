import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../assets/styles/header.css";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="header">
      <h1>React Hooks</h1>
      <button type="button" onClick={theme.handleThemeMode}>
        {theme.darkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
