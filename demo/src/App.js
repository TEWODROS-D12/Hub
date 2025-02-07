import React from "react";
import { PowerProvider } from "./PowerContext";
import House from "./House";

export default function App() {
    return (
        <PowerProvider>
            <House />
        </PowerProvider>
    );
}
