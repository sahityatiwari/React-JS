import React, { useState } from "react";
import "./xyz.css";

const Xyz = () => {
    const map = {
        0: 'black',
        1: 'blue'
    };

    const [temp, setTemp] = useState(0);

    return (
        <>
            <div className="over">
                <div className="box" style={{ backgroundColor: map[temp] }}></div>
                <button className="button" onClick={() => setTemp(1-temp)}>click me</button>
            </div>
        </>
    );
};

export default Xyz;
