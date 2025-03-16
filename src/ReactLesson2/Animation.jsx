import React, { useState, useRef } from "react";

function  Animation() {
  const [darkMode, setDarkMode] = useState(false);
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  return (
    <div style={{
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      padding: "20px",
      textAlign: "center"
    }}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <div>
      <h1>Time: {count}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>  
      </div>
      
    </div>
  );
}

export default Animation;
