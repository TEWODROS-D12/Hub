import React, { createContext, useContext, useState,} from "react";


// Create a context (power station)
const PowerContext = createContext(null);

// Create a provider (provides electricity)
export function PowerProvider({ children }) {
    const [power, setPower] = useState("💡");
    const[bgColor, setbgColor] = useState('red');


   
    const changeBackground = (color) => {  // Function to change background
        setbgColor(color);
        document.body.style.backgroundColor = color; // Apply to document.body
    };





    return (
        <PowerContext.Provider value={{ power, setPower,bgColor,changeBackground }}>
            {children}
        </PowerContext.Provider>
    );
}

// Custom hook to use the context
export function usePower() {
    return useContext(PowerContext);
}
