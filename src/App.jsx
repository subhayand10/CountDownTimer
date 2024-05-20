import React, { useState } from "react";
import CountDownTimer from "./CountDownTimer";
import CountDownForm from "./CountDownForm";
import "./App.css";

function App() {
  const [targetDate, setTargetDate] = useState(null);
  const [timeup, setTimeUp] = useState(false);

  const handleComplete = () => {
    //alert("Time's up!");
    setTimeUp(true);
    setTargetDate(null);
  };

  return (
    <div className="App">
      <h1>Countdown <span style={{color:"purple"}}>Timer</span></h1>
      {!targetDate ? (
        <CountDownForm onSetTargetDate={setTargetDate} timeup={timeup} setTimeUp={setTimeUp}/>
      ) : (
        <div>
          <CountDownTimer targetDate={targetDate} onComplete={handleComplete} />
          <button onClick={() => setTargetDate(null)}>Cancel Countdown</button>
        </div>
      )}
    </div>
  );
}

export default App;
