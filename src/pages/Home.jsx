import React, { useContext } from "react";
import Characters from "../components/Characters";
import Header from "../components/Header";

import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={theme.darkMode ? theme.theme.dark : theme.theme.light}
      className="App"
    >
      <Header />
      <Characters />
    </div>
  );
};

export default Home;
