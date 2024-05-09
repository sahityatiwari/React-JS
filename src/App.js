import React, { useState } from "react";
import Scoreboard from "./components/scorecard/scrd";
import "./components/scorecard/scrdcss.css";

const App = () => {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const runplus = (run) => {
    setRuns(runs + run);
  };

  const wicketplus = () => {
    setWickets(wickets + 1);
  };

  let score;
  if (wickets < 10) {
    score = (
      <Scoreboard
        runs={runs}
        wickets={wickets}
        runplus={runplus}
        wicketplus={wicketplus}
      />
    );
  } else {
    score = (

      <div className="display">
          <h1>Final Score</h1>
        <p className="score">Runs: {runs}</p>
        <p className="score">Wickets: {wickets}</p>
        
      </div> 
    );
  }

  return score;
};

export default App;
