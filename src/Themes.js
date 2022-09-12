import React from "react";

export const themes= {
    dark: {
        color: "#FCF7F8",
        backgroundColor: '#1B1F3B'       
    },
    light: {
        color: '#1B1F3B',
        backgroundColor: '#FCF7F8'
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext