import React from "react";
import { usePower } from "./PowerContext";

export default function House() {
    const { power, setPower, bgColor, changeBackground } = usePower();



    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: { bgColor } }}>
            <div>
                <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{power}</h1>
                <div >
                    <button onClick={() => {
                        changeBackground('white');
                        setPower("❌ ")
                    }}>
                        Power OFF
                    </button>
                    <button onClick={
                        () => {
                            changeBackground('yellow');
                            setPower("💡")
                        }

                    }>
                        Power ON
                    </button>

                </div>

            </div>
        </div>
    );
}
