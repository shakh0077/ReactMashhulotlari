import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      padding: "20px",
      textAlign: "center"
    }}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? " Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
