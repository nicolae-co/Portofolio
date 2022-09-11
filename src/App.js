
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./componets/Navigation";
import Content from "./componets/Content";
import Footer from "./componets/Footer";
import Logo from "./componets/Logo";

import './styles/App.css'

import ThemeContext, {themes} from "./Themes";






function App() {
  const [theme, setTheme] = useState(themes.dark)
  const toggleTheme = ()=>
    theme === themes.dark 
      ? setTheme(themes.light)
      : setTheme(themes.dark)


  return (
    <ThemeContext.Provider value={theme}>
      <div className="navigation row ">
        <Logo />
        <Navigation />
        <div style={theme} className="col-2 theme">
        <button style={theme} className="theme-btn" onClick={toggleTheme}>Toggle theme</button>
        </div>
        
      </div>
      <Content />
      <Footer />
      
    </ThemeContext.Provider>
  );
}

export default App;
