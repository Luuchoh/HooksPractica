import { ThemeContext, useThemeProvider } from "./context/ThemeContext";

import Home from "./pages/Home";

import "./App.css";

function App() {
  const themeValues = useThemeProvider();

  return (
    <ThemeContext.Provider value={themeValues}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
