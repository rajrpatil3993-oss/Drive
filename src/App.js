import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading time and show the loader
    setTimeout(() => {
      setLoadingComplete(true);
      setShowLoader(false); // Hide the loader after 3 seconds
    }, 3000); // 3 seconds delay for demonstration
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      // Redirect to Drive after 3 seconds of loading
      window.location.href = "https://drive.google.com/drive/folders/1IXxbMOwnqnXvhLXb9RWxABt4bqBOMa2_?usp=sharing";
    }
  }, [loadingComplete]);

  return (
    <div className="App">
      <div className="ascii-art">
        <div className="text">
          <span className="letter letter-t">T</span>
          <span className="letter letter-y">Y</span>
          <span className="letter letter-a">A</span>
        </div>
        {showLoader && <div className="loader">*</div>} {/* Display loader until page loads */}
      </div>
    </div>
  );
}

export default App;
