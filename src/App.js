
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./componets/Navigation";
import Content from "./componets/Content";
import Footer from "./componets/Footer";
import Logo from "./componets/Logo";

import './styles/App.css'

import ThemeContext, {themes} from "./Themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons'






function App() {
  const [theme, setTheme] = useState(themes.dark)
  const [icon, setIcon] =useState(faSun)
  const toggleTheme = ()=>
    theme === themes.dark 
      ? (setTheme(themes.light), setIcon(faMoon))
      : (setTheme(themes.dark), setIcon(faSun))
  
  

  return (
    <ThemeContext.Provider value={theme}>
      <div className="navigation row ">
        <Logo />
        <Navigation />
        <div style={theme} className="col-2 theme">
        <button style={theme} className="theme-btn" onClick={toggleTheme}>
          <FontAwesomeIcon icon={icon} size='2xl' />
        </button>
        </div>
        
      </div>
      <Content />
      <Footer />
      
    </ThemeContext.Provider>
  );
}

export default App;
