import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const useThemeProvider = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = {
    dark: {
      backgroundColor: "black",
      color: "#efefef",
    },
    light: {
      backgroundColor: "#efefef",
      color: "black",
    },
  };
  const handleThemeMode = () => {
    setDarkMode(!darkMode);
  };

  const themeMode = { handleThemeMode, darkMode, theme };

  return themeMode;
};
