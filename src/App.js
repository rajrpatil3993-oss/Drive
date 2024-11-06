import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [asciiLines, setAsciiLines] = useState([]);
  const [carPosition, setCarPosition] = useState(0);

  // ASCII frame with "TY A" in the center and * border
  const frameTemplate = [
    "*******************************",
    "*                             *",
    "*                             *",
    "*           T   Y   A         *",
    "*                             *",
    "*                             *",
    "*******************************"
  ];

  const car = "<O>";

  const updateCarPosition = () => {
    // Copy the frame template
    const newFrame = [...frameTemplate];

    // Determine the car position on the square perimeter
    if (carPosition < 30) newFrame[0] = newFrame[0].slice(0, carPosition) + car + newFrame[0].slice(carPosition + 3);
    else if (carPosition < 36) newFrame[carPosition - 29] = "*" + car + newFrame[carPosition - 29].slice(4);
    else if (carPosition < 66) newFrame[6] = newFrame[6].slice(0, 65 - carPosition) + car + newFrame[6].slice(68 - carPosition);
    else newFrame[72 - carPosition] = "*" + newFrame[72 - carPosition].slice(1, 28) + car + "*";

    setAsciiLines(newFrame);

    // Loop back to the start after a full loop
    setCarPosition((prevPos) => (prevPos + 1) % 73);
  };

  useEffect(() => {
    const intervalId = setInterval(updateCarPosition, 150); // Move the car every 150ms
    return () => clearInterval(intervalId);
  }, [carPosition]);

  useEffect(() => {
    // Redirect to the link after 5 seconds
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://drive.google.com/drive/folders/1IXxbMOwnqnXvhLXb9RWxABt4bqBOMa2_?usp=sharing";
    }, 5000); // 5-second delay before redirect
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="App">
      <div className="ascii-art">
        {asciiLines.map((line, index) => (
          <pre key={index}>{line}</pre>
        ))}
      </div>
    </div>
  );
}

export default App;
