import React, { useState } from "react";

const CountdownForm = ({ onSetTargetDate,timeup,setTimeUp }) => {
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [error, setError] = useState("");

  const validateDate = (targetDate) => {
    const now = new Date();
    const maxDate = new Date(now);
    maxDate.setDate(now.getDate() + 99);

    if (targetDate < now) {
      setError("Target date and time must be in the future.");
      return false;
    } else if (targetDate > maxDate) {
      setError("Target date must be within 99 days from today.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetDate = new Date(`${inputDate}T${inputTime}`);
    if (validateDate(targetDate)) {
      setError("");
      onSetTargetDate(targetDate);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="countdown-form">
      <div>
        <label>Target Date:</label>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Target Time:</label>
        <input
          type="time"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          required
        />
      </div>
      {error && <p className="error">{error}</p>}
      {timeup && <p className="error" style={{color:"purple"}}>The countdown is over!What's next on your adventure</p>}
      <button type="submit" onClick={()=>{setTimeUp(false)}}>Start Countdown</button>
    </form>
  );
};

export default CountdownForm;
