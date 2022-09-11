import React from "react";

export const themes= {
    dark: {
        color: "#FFFFFF",
        backgroundColor: '#000000'
    },
    light: {
        color: '#14213d',
        backgroundColor: '#e5e5e5'

    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext