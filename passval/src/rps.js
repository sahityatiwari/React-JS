
import React, { useEffect, useState } from 'react';
import "./style.css";

const Rps = () => {
    const ini = {
        yc: "",
        cc: "",
        ys: 0,
        cs: 0,
    };
      
    const [inputData, setInputData] = useState(ini);

    const decision = (playerVal) => {
        const choices = ["ROCK", "PAPER", "SCISSORS"];
        const compChoice = choices[Math.floor(Math.random() * choices.length)];

        let updatedData = { ...inputData }; // Create a copy of the state object

        if (playerVal === compChoice) {
            updatedData.cc = playerVal;
            updatedData.yc = playerVal;
        } else if ((playerVal === "ROCK" && compChoice === "SCISSORS") ||
            (playerVal === "SCISSORS" && compChoice === "PAPER") ||
            (playerVal === "PAPER" && compChoice === "ROCK")) {
            updatedData.cc = compChoice;
            updatedData.yc = playerVal;
            updatedData.ys += 1;
            updatedData.cs -= 1;
        } else {
            updatedData.cc = compChoice;
            updatedData.yc = playerVal;
            updatedData.ys -= 1;
            updatedData.cs += 1;
        }

        setInputData(updatedData); 
    }

    return (
        <>
            <div className="container">
                <h1>Welcome to Rock, Paper, Scissors Game</h1>
                <div>
                    <button onClick={() => decision("ROCK")}>
                        {/* <img src="passval\src\rock.png" alt='dgfh' className='symbol'/> */}
                        <h4>ROCK</h4>
                    </button>
                    <button onClick={() => decision("PAPER")}>
                    {/* <img src="passval\src\paper.png" alt='dgfh' className='symbol'/> */}
                    <h4>PAPER</h4>
                    </button>
                    <button onClick={() => decision("SCISSORS")}>
                    {/* <img src="passval\src\pngimg.com - scissors_PNG33.png" alt='dgfh' className='symbol'/> */}
                    <h4>SCISSOR</h4>
                    </button>
                </div>
                <div className="content">
                    <p>Your choice: {inputData.yc}</p>
                    <p>Computer's choice: {inputData.cc}</p>
                    <h2>Your Score:{inputData.ys}</h2>
                    <h2>Computer Score:{inputData.cs}</h2>
                </div>
            </div>
        </>
    )
}

export default Rps;
