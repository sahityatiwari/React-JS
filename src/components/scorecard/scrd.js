import React from 'react';
import "./scrdcss.css";

const Scoreboard = ({ runs, wickets, runplus, wicketplus }) => {
  return (
    <div className='scoreboard'>
      <h1>Cricket Scoreboard</h1>
      <div className='display'>
        <p className='score'>Runs: {runs}</p>
        <p className='score'>Wickets: {wickets}</p>
        {wickets > 10 && <p className='result'>!!!!! LOST LOST !!!!!</p>}
      </div>
      <div className='increment'>
        <button className='button' onClick={() => runplus(4)}>4 Runs</button>
        <button className='button' onClick={() => runplus(6)}>6 Runs</button>
        <button className='button' onClick={() => runplus(1)}>1 Run</button>
        <button className='button' onClick={() => runplus(2)}>2 Runs</button>
        <button className='button' onClick={() => runplus(3)}>3 Runs</button>
        <button className='buttonw' onClick={wicketplus}>Wicket</button>
      </div>
    </div>
  );
};

export default Scoreboard;
