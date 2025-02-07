import React, { createContext, useState, } from "react";


// Create a context (power station)
export const PowerContext = createContext();

// Create a provider (provides electricity)
export function PowerProvider({ children }) {
    const [power, setPower] = useState("💡");
    const [bgColor, setbgColor] = useState('red');



    const changeBackground = (color) => {  // Function to change background
        setbgColor(color);
        document.body.style.backgroundColor = color; // Apply to document.body
    };


    return (
        <PowerContext.Provider value={{ power, setPower, bgColor, changeBackground }}>
            {children}
        </PowerContext.Provider>
    );
}


