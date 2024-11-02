import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [countdown, setCountdown] = useState(0);
  const [showAscii, setShowAscii] = useState(false);

  const handleClick = () => {
    setCountdown(3); // Start countdown from 3 seconds
    setShowAscii(true); // Show ASCII art
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer); // Clear timeout on cleanup
    } else if (countdown === 0 && showAscii) {
      setShowAscii(false); // Hide ASCII art after countdown
      window.location.href = "https://drive.google.com/drive/folders/1IXxbMOwnqnXvhLXb9RWxABt4bqBOMa2_?usp=sharing";
    }
  }, [countdown, showAscii]);

  return (
    <div className="App">
      {showAscii ? (
        <div className="ascii-art">
          <pre>
            {`
               ,---------------------------,
              |  /---------------------\\  |
              | |                       | |
              | |     Hold              | |
              | |      On               | |
              | |                       | |
              | |                       | |
              |  \\_____________________/  |
              |___________________________|
            ,---\\_____     []     _______/------,
          /         /______________\\           /|
        /___________________________________ /  | ___
        |                                   |   |    )
        |  _ _ _                 [-------]  |   |   (
        |  o o o                 [-------]  |  /    _)_
        |__________________________________ |/     /  /
    /-------------------------------------/|      ( )/
  /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            `}
          </pre>
          <p>Redirecting in {countdown}...</p>
        </div>
      ) : (
        <div className="link-box" onClick={handleClick}>
          <p>Click Me</p>
        </div>
      )}
    </div>
  );
}

export default App;
